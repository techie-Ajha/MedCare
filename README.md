# MedCare - Healthcare Appointment Booking Platform

**Created by: ANUP JHA**

A modern, responsive healthcare appointment booking platform built with React. This application provides a seamless experience for patients to book appointments with healthcare professionals.

## 🚀 Features

- **Modern UI/UX**: Clean, attractive, and natural human-built interface
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Appointment Booking**: Multi-step booking process with time slot selection
- **Doctor Profiles**: Browse and book appointments with qualified doctors
- **Security**: Algebraic question verification for login
- **Contact & About**: Complete information pages
- **Real-time Updates**: Live availability status for doctors

## 🛠️ Technologies Used

- **React 19.2.0** - Frontend framework
- **CSS3** - Styling with modern design system
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Poppins, Inter)
- **Axios** - HTTP client for API calls

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd medcare-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🎨 Design System

The application uses a comprehensive design system with:
- **Color Palette**: Primary blue (#2563eb), Secondary green (#059669), Accent amber (#f59e0b)
- **Typography**: Poppins for headings, Inter for body text
- **Spacing**: Consistent spacing using CSS custom properties
- **Animations**: Smooth transitions and micro-interactions
- **Shadows**: Layered shadow system for depth

## 📱 Responsive Breakpoints

- **Mobile**: 480px and below
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px and above

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx          # About page component
│   ├── BookingModal.jsx   # Appointment booking modal
│   ├── Contact.jsx        # Contact page component
│   ├── Doctors.jsx        # Doctors listing component
│   ├── Footer.jsx         # Footer component
│   ├── Hero.jsx           # Hero section component
│   ├── Login.jsx          # Login modal with verification
│   ├── navbar.jsx         # Navigation component
│   └── Services.jsx       # Services section component
├── styles/
│   └── global.css         # Global styles and design system
├── api/
│   └── api.js             # API configuration
└── App.jsx                # Main application component
```

## 🎯 Key Components

### BookingModal
- Multi-step form with validation
- Time slot selection with availability status
- Modern UI with smooth animations
- Responsive design for all devices

### Login System
- Algebraic question verification
- Secure authentication flow
- Modern modal design
- Error handling and validation

### Doctor Profiles
- Professional doctor information
- Availability status indicators
- Rating and review system
- Direct booking integration

## 🚀 Deployment

The app is ready for deployment on platforms like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📄 License

This project is private and owned by ANUP JHA.

## 👨‍💻 Author

**ANUP JHA**
- Healthcare Technology Solutions
- Modern Web Applications
- User Experience Design

---

*Built with ❤️ by ANUP JHA*