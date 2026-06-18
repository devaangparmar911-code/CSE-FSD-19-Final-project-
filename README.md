# 📋 To-Do App - Functional Project

A fully functional To-Do application built with **HTML, CSS, and JavaScript** with persistent local storage.

## ✨ Features

- ✅ **Add Tasks** - Create new tasks with Enter key or Add button
- ✅ **Mark Complete** - Check off tasks as you complete them
- ✅ **Delete Tasks** - Remove individual tasks
- ✅ **Persistent Storage** - All tasks saved locally (survives page refresh)
- ✅ **Task Counter** - Track total number of tasks
- ✅ **Clear Functions** - Remove completed or all tasks
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Modern UI** - Beautiful gradient background with smooth animations

## 📂 Project Structure

```
.
├── index.html      # Main HTML file
├── style.css       # Styling and responsive design
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🚀 Deployment Options

### **Option 1: GitHub Pages (Easiest - Free)**

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select `Deploy from a branch`
   - Branch: Select `main` 
   - Folder: Select `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes for deployment
6. Your app will be live at: `https://devaangparmar911-code.github.io/CSE-FSD-19-Final-project-/`

### **Option 2: Netlify (30 seconds - Free)**

1. Go to https://netlify.com
2. Click **"Add new site"** → **Import an existing project**
3. Connect GitHub and select your repository
4. Click **Deploy**
5. Your app goes live automatically!

### **Option 3: Vercel (Free)**

1. Go to https://vercel.com
2. Click **"New Project"**
3. Import your GitHub repository
4. Click **Deploy**
5. Live in seconds!

## 🏃 Running Locally

### Option A: Direct Browser (Easiest)
- Simply open `index.html` in your browser
- No server needed!

### Option B: With Python
```bash
# Python 3.x
python -m http.server 8000

# Then open: http://localhost:8000
```

### Option C: With Node.js
```bash
# Install http-server globally
npm install -g http-server

# Start server
http-server

# Then open: http://localhost:8080
```

## 💾 How to Use

1. **Open the app** - Open `index.html` in your browser or access your deployed URL
2. **Add Task** - Type in the input field and press Enter or click "Add Task"
3. **Complete Task** - Click the checkbox or task text to mark as done
4. **Delete Task** - Click the × button to remove a task
5. **Manage Tasks** - Use "Clear Completed" or "Clear All" buttons
6. **Auto-Save** - All tasks are automatically saved in your browser

## 🔧 Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Responsive design with gradients and animations
- **JavaScript (ES6)** - Modern JavaScript with local storage API
- **Local Storage** - Client-side data persistence

## 📱 Browser Compatibility

Works on all modern browsers:
- Chrome/Edge ✅
- Firefox ✅
- Safari ✅
- Mobile Browsers ✅

## 🎨 Customization

### Change Theme Colors
Edit `style.css` and look for:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```
Replace with your preferred colors.

### Change Font
Edit line in `style.css`:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

## 📝 License

Free to use and modify for any purpose.

## 🤝 Contributing

Feel free to fork and submit pull requests with improvements!

---

**Deployed Live:** Visit your deployed version at your chosen platform's URL

**Questions?** Check the code comments or create an issue in the repository.
