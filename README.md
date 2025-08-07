# Bootstrap 5 Minimal Starter Template

A clean, minimal Bootstrap 5 starter template with just the essentials - ready for you to build upon.

## 📁 Folder Structure

```
Bootstrap_5x_Starter/
│
├── index.html          # Minimal HTML with just "Hello, world."
├── README.md           # Documentation (this file)
│
├── css/                # Custom stylesheets
│   └── style.css       # Custom CSS with variables and helpers
│
├── js/                 # Custom JavaScript
│   └── script.js       # Bootstrap init + commented utilities
│
├── images/             # Image assets
│   └── (empty)         # Add your images here
│
└── fonts/              # Custom fonts
    └── (empty)         # Add web fonts here
```

## 🚀 What's Included

### Core Setup
- **Bootstrap 5.3.3** - Latest stable version via CDN
- **Bootstrap Icons** - Icon library included via CDN
- **Clean folder structure** - Flat organization for simplicity
- **Minimal HTML** - Just "Hello, world." to start fresh

## 🎯 How to Use This Template

### Option 1: Use as GitHub Template (Recommended)
1. Click the green **"Use this template"** button at the top of this repository
2. Name your new repository and choose public/private
3. Clone your new repository to your local machine
4. Start building your project!

### Option 2: Download ZIP
1. Click the green **"Code"** button
2. Select **"Download ZIP"**
3. Extract to your project folder
4. Initialize Git (optional): `git init`

### Option 3: Clone Directly
```bash
git clone https://github.com/kevanmacgee/Bootstrap_5x_Starter.git my-project
cd my-project
rm -rf .git  # Remove template's git history
git init     # Start fresh with your own git history
```

## 📋 Best Practices for Using This Template

### 1. **Assets Organization**

- **Images**: Store all images in `images/`
- **CSS**: Keep styles organized in `css/`
  - `style.css` for main custom styles
- **JavaScript**: Maintain scripts in `js/`
  - `script.js` for main functionality
  - Add separate JS files for complex features
  - Keep third-party libraries separate

### 2. **Development Workflow**

1. Clone/copy this template to start a new project
2. Update meta tags in `index.html`
3. Replace "Hello, world." with your content
4. Uncomment JavaScript features as needed (check script.js comments)
5. Customize CSS variables in `style.css`

### Minimal CSS (style.css)
The CSS file is intentionally minimal, containing only:

1. **CSS Variables** - Pre-defined color, spacing, and font variables matching Bootstrap defaults
   - Easy to override Bootstrap's color scheme
   - Consistent spacing system ready to use
   - No actual styles applied, just variables
2. **Component Override Example** - Simple button enhancement showing how to customize Bootstrap
   - Can be removed or modified as needed
   - Demonstrates the pattern for overriding Bootstrap components
3. **Media Query Templates** - Empty breakpoints matching Bootstrap's responsive grid
   - 576px, 768px, 992px, 1200px
   - Ready for your responsive styles

### JavaScript Structure (script.js)

The `script.js` file has the basic js needed for the Bootstrap features like tooltips and popovers to work and this is currently active. The rest of the features have been commented out and are non functional. You will need to un-comment them to turn them on. You should be able to delete all the commented out code if you want to run a true blank slate and build your own.

**Active:**
- **Bootstrap component initialization** - Tooltips and popovers ready to work

**Commented Out (Ready to Enable):**

- **Smooth scrolling** - For anchor links (uncomment when needed)
- **Form validation** - Bootstrap validation handlers
- **Back-to-top button** - Scroll-based visibility and smooth return
- **Intersection Observer** - For fade-in animations. **NOTE**: This just turns on the js functionality, so the browser can "see" and run the CSS animation instructions if they are there. You will have to add them manually to the CSS first.
- **Utility functions** - debounce, isInViewport, formatDate
- Each function includes "What it does", "Why enable it", and "When to uncomment" notes



## 🛠️ Customization

### Updating Bootstrap
To update Bootstrap version, replace the CDN links in `index.html`. You will update it with the current version name found on Bootstrap's site.
```html
<!-- Update these links with new version -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@[VERSION]/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@[VERSION]/dist/js/bootstrap.bundle.min.js">
```

### Adding Custom Fonts
1. Download font files to `fonts/`
2. Add @font-face rules in `style.css`
3. Update the `--font-primary` variable

### Theme Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    /* etc. */
}
```

## 🔗 Useful Resources

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Bootstrap Examples](https://getbootstrap.com/docs/5.3/examples/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 📝 License

This template is free to use for personal and commercial projects.

---

**Happy Coding! 🎉**
