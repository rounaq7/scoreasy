const express = require('express');
const { basicAuth } = require('../middleware/auth');
const Contact = require('../models/Contact');

const router = express.Router();

// GET /admin - Admin dashboard page
router.get('/', basicAuth, async (req, res) => {
  try {
    // Get basic statistics
    const totalContacts = await Contact.countDocuments();
    const newContacts = await Contact.countDocuments({ status: 'new' });
    const contactedContacts = await Contact.countDocuments({ status: 'contacted' });
    const convertedContacts = await Contact.countDocuments({ status: 'converted' });
    const lostContacts = await Contact.countDocuments({ status: 'lost' });

    // Get recent contacts (last 10)
    const recentContacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .select('name email phone status createdAt');

    // Get contacts from last 30 days
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const recentMonthContacts = await Contact.countDocuments({
      createdAt: { $gte: thirtyDaysAgo },
    });

    res.json({
      success: true,
      data: {
        stats: {
          total: totalContacts,
          new: newContacts,
          contacted: contactedContacts,
          converted: convertedContacts,
          lost: lostContacts,
          recentMonth: recentMonthContacts,
        },
        recentContacts,
      },
    });

  } catch (error) {
    console.error('Error fetching admin dashboard data:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching dashboard data',
    });
  }
});

// GET /admin/contacts - Get all contacts with pagination
router.get('/contacts', basicAuth, async (req, res) => {
  try {
    const { page = 1, limit = 20, status, search, sortBy = 'createdAt', sortOrder = 'desc' } = req.query;
    
    const query = {};
    
    // Filter by status
    if (status && ['new', 'contacted', 'converted', 'lost'].includes(status)) {
      query.status = status;
    }
    
    // Search by name or email
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
      ];
    }

    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;

    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const contacts = await Contact.find(query)
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit))
      .select('-__v');

    const total = await Contact.countDocuments(query);

    res.json({
      success: true,
      data: {
        contacts,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(total / parseInt(limit)),
          totalItems: total,
          itemsPerPage: parseInt(limit),
        },
      },
    });

  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts',
    });
  }
});

// GET /admin/contacts/:id - Get specific contact details
router.get('/contacts/:id', basicAuth, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id).select('-__v');
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found',
      });
    }

    res.json({
      success: true,
      data: contact,
    });

  } catch (error) {
    console.error('Error fetching contact details:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contact details',
    });
  }
});

// PUT /admin/contacts/:id - Update contact details
router.put('/contacts/:id', basicAuth, async (req, res) => {
  try {
    const { name, email, phone, message, status } = req.body;
    
    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email.toLowerCase();
    if (phone) updateData.phone = phone;
    if (message) updateData.message = message;
    if (status && ['new', 'contacted', 'converted', 'lost'].includes(status)) {
      updateData.status = status;
    }
    
    updateData.updatedAt = Date.now();

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    ).select('-__v');

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found',
      });
    }

    res.json({
      success: true,
      message: 'Contact updated successfully',
      data: contact,
    });

  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating contact',
    });
  }
});

// DELETE /admin/contacts/:id - Delete contact
router.delete('/contacts/:id', basicAuth, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found',
      });
    }

    res.json({
      success: true,
      message: 'Contact deleted successfully',
    });

  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting contact',
    });
  }
});

// GET /admin/export - Export contacts as CSV
router.get('/export', basicAuth, async (req, res) => {
  try {
    const { status, startDate, endDate } = req.query;
    
    const query = {};
    
    if (status && ['new', 'contacted', 'converted', 'lost'].includes(status)) {
      query.status = status;
    }
    
    if (startDate && endDate) {
      query.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .select('name email phone message status createdAt');

    // Convert to CSV format
    const csvHeader = 'Name,Email,Phone,Message,Status,Created At\n';
    const csvData = contacts.map(contact => {
      return `"${contact.name}","${contact.email}","${contact.phone}","${contact.message.replace(/"/g, '""')}","${contact.status}","${contact.createdAt.toISOString()}"`;
    }).join('\n');

    const csv = csvHeader + csvData;

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=contacts-${new Date().toISOString().split('T')[0]}.csv`);
    res.send(csv);

  } catch (error) {
    console.error('Error exporting contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Error exporting contacts',
    });
  }
});

module.exports = router; 