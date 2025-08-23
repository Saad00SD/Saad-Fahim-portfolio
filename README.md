# Saad Fahim - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional portfolio layout
- **Responsive**: Optimized for all device sizes
- **Dark/Light Mode**: Toggle between themes
- **Smooth Animations**: Engaging user experience with CSS animations
- **Contact Form**: Easy way for visitors to get in touch
- **Project Showcase**: Display your work with detailed descriptions
- **Experience Timeline**: Professional experience and achievements
- **Skills & Technologies**: Highlight your technical expertise

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation
- **Theming**: next-themes for dark/light mode

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd saad-fahim-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view your portfolio

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── About.tsx       # About section
│   ├── Achievements.tsx # Achievements section
│   ├── Contact.tsx     # Contact form
│   ├── Experience.tsx  # Experience timeline
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation bar
│   ├── Projects.tsx    # Projects showcase
│   └── ThemeToggle.tsx # Theme switcher
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── main.tsx           # Application entry point
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

### Deploy to Platforms

This project can be easily deployed to various platforms:

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect your repo
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Firebase Hosting**: Deploy using Firebase CLI

## 🎨 Customization

### Personal Information
Update your personal information in the respective component files:
- `Hero.tsx` - Name, title, and introduction
- `About.tsx` - Personal description and background
- `Experience.tsx` - Work experience and timeline
- `Projects.tsx` - Your projects and achievements
- `Contact.tsx` - Contact information and social links

### Styling
- Modify `tailwind.config.ts` for custom colors and animations
- Update `src/index.css` for global styles
- Customize component styles in individual component files

### Content
- Replace images in the `public/` directory
- Update the `cv.pdf` file with your resume
- Modify project descriptions and links

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

This is a personal portfolio project, but if you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Name**: Saad Fahim
- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

---

Made with ❤️ using React, TypeScript, and Tailwind CSS
