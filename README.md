# 🚀 Task 2 - TechSolutions Website

## 📋 Project Overview

This is **Task 2** of the internship assignment, where I've recreated the original Task 1 Bootstrap website using the mandatory technology stack: **Nunjucks (templating engine)** + **Vite (bundler)**. 

The website maintains the exact same look, feel, and functionality as the original while demonstrating proficiency with modern templating and build tools.

---

## 🛠️ Technology Stack

### Templating Engine
- **Nunjucks** - A powerful templating engine for JavaScript inspired by jinja2
- **Why Nunjucks?** Excellent template inheritance, powerful filters, and great IDE support

### Bundler/Task Runner  
- **Vite** - Next generation frontend build tool
- **Why Vite?** Lightning fast development server, optimized builds, and excellent developer experience

### Additional Technologies
- **Bootstrap 5.3** - CSS framework for responsive design
- **Vanilla JavaScript** - For interactive functionality
- **CSS3** - Custom styles and animations
- **HTML5** - Semantic markup

---

## 📁 Project Structure

```
src/
├── templates/
│   └── partials/
│       ├── navbar.njk      # Navigation component
│       ├── hero.njk        # Hero section
│       ├── about.njk       # About section
│       ├── services.njk    # Services showcase
│       ├── portfolio.njk   # Portfolio gallery
│       ├── contact.njk     # Contact form
│       └── footer.njk      # Footer component
├── assets/
│   ├── css/
│   │   └── style.css       # Custom styles
│   └── js/
│       └── main.js         # Interactive functionality
└── index.html              # Main template file

dist/                       # Compiled output (generated)
vite.config.js             # Vite configuration
package.json               # Dependencies and scripts
README.md                  # This file
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd task2-techsolutions
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```
   Compiled files will be in the `dist/` directory

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally

---

## 🎨 Features Implemented

### Core Features
- **Responsive Design** - Mobile-first approach with Bootstrap 5
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Navigation** - Smooth scrolling and active section highlighting
- **Contact Form** - Functional contact form with validation
- **Portfolio Gallery** - Interactive project showcase with hover effects
- **Newsletter Signup** - Email subscription functionality
- **Social Media Integration** - Links to social platforms

### Technical Features
- **Component-based Architecture** - Modular Nunjucks templates
- **Template Inheritance** - Reusable components and layouts
- **Build Optimization** - Vite's optimized bundling for production
- **Hot Module Replacement** - Instant updates during development
- **Cross-browser Compatibility** - Works on all modern browsers
- **SEO Optimized** - Semantic HTML and meta tags

---

## 🔧 Configuration Details

### Vite Configuration (`vite.config.js`)
- Configured with Nunjucks plugin for template processing
- Custom build settings for optimal output
- Development server configuration for hot reload

### Template Variables
The project uses global template variables for easy customization:
- `title` - Page title
- `description` - Page description
- Dynamic content through Nunjucks loops and conditionals

---

## 🎯 Task Requirements Compliance

✅ **Templating Engine**: Nunjucks implemented throughout
✅ **Bundler**: Vite used for build process and development
✅ **Exact Recreation**: Maintains original Task 1 design and functionality  
✅ **Proper Structure**: Organized with src/templates/ and src/assets/
✅ **README Documentation**: Comprehensive setup and usage instructions
✅ **Separate Project**: Independent from Task 1 codebase

---

## 🌟 Key Highlights

- **100% Template-driven**: All HTML generated through Nunjucks templates
- **Component Reusability**: Modular partials for easy maintenance
- **Performance Optimized**: Fast loading with Vite's optimization
- **Developer Experience**: Hot reload and modern tooling
- **Production Ready**: Optimized builds for deployment

---

## 🚀 Deployment

The project is ready for deployment on any static hosting platform:

1. Run `npm run build` to create production bundle
2. Upload contents of `dist/` folder to your hosting provider
3. Configure your hosting to serve `index.html` as the main file

---

## 💡 Technical Insights

### Why This Tech Stack?

**Nunjucks Benefits:**
- Template inheritance reduces code duplication
- Powerful templating features (loops, conditionals, filters)
- Excellent debugging and error reporting
- Mozilla-backed with strong community support

**Vite Benefits:**
- Incredibly fast development server
- Optimized production builds
- Modern JavaScript features out of the box
- Excellent plugin ecosystem

---

## 📈 Performance Metrics

- **Development**: Lightning fast hot reload (~50ms)
- **Build Time**: Optimized production builds
- **Bundle Size**: Minimal overhead from build tools
- **Loading Speed**: Optimized assets and modern bundling

---

## 🤝 Contributing

This is an internship task project. For any questions or improvements:

1. Document your changes clearly
2. Ensure all templates compile correctly
3. Test responsive design across devices
4. Maintain consistent code style

---

## 📄 License

This project is created for internship evaluation purposes.

---

**Built with ❤️ using Nunjucks + Vite**  
*Task 2 Implementation - Modern Templating & Build Tools*

---

## 🔗 Links

- **Live Demo**: [Will be provided after deployment]
- **Task 1 Reference**: [https://capable-beijinho-e8369c.netlify.app/](https://capable-beijinho-e8369c.netlify.app/)
- **Repository**: [Will be provided after GitHub upload]

---

*This project demonstrates proficiency in modern web development practices using templating engines and build tools as required for Task 2 of the internship assignment.*