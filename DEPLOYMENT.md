# Scoreazy Deployment Guide

This guide will help you deploy the Scoreazy application to production environments.

## 🚀 Quick Deployment Overview

### Frontend (Vercel)
1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Configure Build**: Set build command to `npm run build`
3. **Set Output**: Set output directory to `build`
4. **Environment Variables**: Add `REACT_APP_API_URL` pointing to your backend

### Backend (Render/Railway)
1. **Connect Repository**: Link your GitHub repository
2. **Build Command**: `npm install`
3. **Start Command**: `npm start`
4. **Environment Variables**: Configure all required environment variables

### Database (MongoDB Atlas)
1. **Create Cluster**: Set up a free MongoDB Atlas cluster
2. **Get Connection String**: Copy the connection string
3. **Configure**: Add to backend environment variables

## 📋 Prerequisites

- Node.js 16+ installed
- Git repository set up
- MongoDB Atlas account
- Email service (Gmail, SendGrid, etc.)
- Deployment platform accounts (Vercel, Render, Railway)

## 🔧 Environment Setup

### Backend Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/scoreazy?retryWrites=true&w=majority

# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Admin Authentication
ADMIN_USERNAME=admin
ADMIN_PASSWORD=secure_password_123

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-here

# Server Configuration
PORT=5000
NODE_ENV=production

# Frontend URL (for CORS)
FRONTEND_URL=https://your-frontend-domain.vercel.app

# Admin Dashboard URL
ADMIN_URL=https://your-backend-domain.onrender.com/admin
```

### Frontend Environment Variables

Create a `.env` file in the `client` directory:

```env
REACT_APP_API_URL=https://your-backend-domain.onrender.com
```

## 🌐 Deployment Steps

### 1. MongoDB Atlas Setup

1. **Create Account**: Sign up at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. **Create Cluster**: Choose the free tier (M0)
3. **Database Access**: Create a database user with read/write permissions
4. **Network Access**: Allow access from anywhere (0.0.0.0/0) for development
5. **Get Connection String**: Copy the connection string and replace `<password>` with your actual password

### 2. Email Service Setup (Gmail)

1. **Enable 2FA**: Enable two-factor authentication on your Gmail account
2. **Generate App Password**: Go to Google Account settings → Security → App passwords
3. **Create App Password**: Generate a password for "Mail"
4. **Use in Environment**: Use this password in your `EMAIL_PASS` variable

### 3. Backend Deployment (Render)

1. **Sign Up**: Create account at [Render](https://render.com)
2. **New Web Service**: Click "New Web Service"
3. **Connect Repository**: Link your GitHub repository
4. **Configure Service**:
   - **Name**: `scoreazy-backend`
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: `Node`
5. **Environment Variables**: Add all variables from the backend `.env` file
6. **Deploy**: Click "Create Web Service"

### 4. Frontend Deployment (Vercel)

1. **Sign Up**: Create account at [Vercel](https://vercel.com)
2. **Import Project**: Click "Import Project"
3. **Connect Repository**: Link your GitHub repository
4. **Configure Project**:
   - **Framework Preset**: `Create React App`
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. **Environment Variables**: Add `REACT_APP_API_URL`
6. **Deploy**: Click "Deploy"

## 🔒 Security Considerations

### Production Security Checklist

- [ ] Use strong, unique passwords for all services
- [ ] Enable HTTPS on all domains
- [ ] Set up proper CORS configuration
- [ ] Use environment variables for all sensitive data
- [ ] Enable rate limiting
- [ ] Set up proper error handling
- [ ] Configure security headers
- [ ] Use secure session management
- [ ] Regular security updates
- [ ] Monitor application logs

### CORS Configuration

Update the CORS configuration in `server/server.js` for production:

```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
```

## 📊 Monitoring & Analytics

### Recommended Tools

1. **Application Monitoring**: 
   - [Sentry](https://sentry.io) for error tracking
   - [LogRocket](https://logrocket.com) for session replay

2. **Performance Monitoring**:
   - [Vercel Analytics](https://vercel.com/analytics) for frontend
   - [New Relic](https://newrelic.com) for backend

3. **Uptime Monitoring**:
   - [UptimeRobot](https://uptimerobot.com)
   - [Pingdom](https://pingdom.com)

## 🔧 Post-Deployment Checklist

### Backend Verification

- [ ] Health check endpoint responds: `GET /health`
- [ ] Contact form API works: `POST /api/contact`
- [ ] Admin dashboard accessible: `/admin`
- [ ] Email notifications working
- [ ] Database connection stable
- [ ] Rate limiting active
- [ ] CORS properly configured

### Frontend Verification

- [ ] All pages load correctly
- [ ] Contact form submits successfully
- [ ] Animations work smoothly
- [ ] Responsive design on all devices
- [ ] SEO meta tags present
- [ ] Performance optimized
- [ ] No console errors

### Integration Testing

- [ ] Contact form → Backend → Database → Email
- [ ] Admin login → Dashboard → Data management
- [ ] Cross-browser compatibility
- [ ] Mobile responsiveness
- [ ] Form validation
- [ ] Error handling

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**:
   - Check `FRONTEND_URL` environment variable
   - Verify CORS configuration in backend

2. **Database Connection**:
   - Verify MongoDB Atlas connection string
   - Check network access settings
   - Ensure database user has correct permissions

3. **Email Notifications**:
   - Verify Gmail app password
   - Check email service configuration
   - Test with different email providers

4. **Build Failures**:
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for missing environment variables

### Debug Commands

```bash
# Check backend logs
npm run dev

# Test database connection
node -e "require('./config/database.js').connectDB()"

# Test email configuration
node -e "require('./config/email.js').sendContactNotification({name:'Test',email:'test@test.com',phone:'1234567890',message:'Test message'})"
```

## 📈 Performance Optimization

### Frontend Optimization

1. **Image Optimization**: Use WebP format and lazy loading
2. **Code Splitting**: Implement React.lazy() for route-based splitting
3. **Bundle Analysis**: Use `npm run build --analyze` to identify large packages
4. **Caching**: Implement proper cache headers
5. **CDN**: Use Vercel's global CDN

### Backend Optimization

1. **Database Indexing**: Add indexes for frequently queried fields
2. **Connection Pooling**: Configure MongoDB connection pooling
3. **Caching**: Implement Redis for session storage
4. **Compression**: Enable gzip compression
5. **Rate Limiting**: Configure appropriate rate limits

## 🔄 Continuous Deployment

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Render
        uses: johnbeynon/render-deploy-action@v1.0.0
        with:
          service-id: ${{ secrets.RENDER_SERVICE_ID }}
          api-key: ${{ secrets.RENDER_API_KEY }}

  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📞 Support

For deployment issues or questions:

- **Documentation**: Check the README.md file
- **Issues**: Create an issue in the GitHub repository
- **Email**: support@scoreazy.com

---

**Happy Deploying! 🚀**

Remember to test thoroughly in a staging environment before deploying to production. 