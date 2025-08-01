# Scoreazy - Counseling & Mentorship Program

A full-stack web application for Scoreazy's personalized learning platform that blends educational psychology, AI, and technology to offer personalized learning experiences.

## 🎯 Features

- **Responsive Landing Page** with beautiful animations using Framer Motion
- **Contact Form** with validation and email notifications
- **MongoDB Integration** for storing contact submissions
- **Admin Dashboard** to view contact form submissions
- **SEO Optimized** with proper meta tags and structured data
- **Mobile-First Design** using Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- React.js 18
- Tailwind CSS
- Framer Motion
- React Hook Form
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Nodemailer
- CORS

### Deployment
- Frontend: Vercel
- Backend: Render/Railway
- Database: MongoDB Atlas

## 📁 Project Structure

```
scoreazy/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── utils/
│   ├── package.json
│   └── tailwind.config.js
├── server/                 # Node.js backend
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   ├── package.json
│   └── server.js
├── .env.example
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Email service (Gmail, SendGrid, etc.)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd scoreazy
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   cp .env.example .env
   # Edit .env with your MongoDB URI and email credentials
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd client
   npm install
   npm start
   ```

4. **Environment Variables**
   
   Create `.env` file in the server directory:
   ```env
   MONGODB_URI=your_mongodb_atlas_connection_string
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_app_password
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=secure_password
   PORT=5000
   ```

## 📱 Features Overview

### Landing Page Sections
- **Hero Section**: Eye-catching headline with CTA
- **About Scoreazy**: Company information and mission
- **Why Choose Scoreazy**: Benefits with animated cards
- **Mentorship Journey**: Timeline of the program
- **Testimonials**: Student success stories
- **FAQs**: Common questions and answers
- **Contact Form**: Lead generation with validation
- **Footer**: Links and social media

### Backend Features
- **Contact Form API**: POST /api/contact
- **Email Notifications**: Automatic admin alerts
- **Data Validation**: Input sanitization and validation
- **Admin Dashboard**: Protected route to view submissions
- **CORS Support**: Cross-origin resource sharing

## 🎨 Design Features

- **Smooth Animations**: Framer Motion for scroll animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design for EdTech industry
- **Accessibility**: Proper alt texts, semantic HTML, and ARIA labels
- **Performance**: Optimized images and lazy loading

## 🔧 API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all submissions (admin only)

### Admin
- `GET /admin` - Admin dashboard (protected)

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `build`
4. Add environment variables for API URL

### Backend (Render/Railway)
1. Connect your GitHub repository
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add environment variables

### Database (MongoDB Atlas)
1. Create a free cluster
2. Get connection string
3. Add to backend environment variables

## 📊 Admin Dashboard

Access the admin dashboard at `/admin` with the credentials set in your environment variables.

Features:
- View all contact form submissions
- Export data
- Basic authentication

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email support@scoreazy.com or create an issue in the repository.

---

**Scoreazy** - Making scoring easier for students through personalized learning and AI-powered mentorship. 