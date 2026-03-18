# TODO Web Application

A simple and clean Todo application built with React using functional components and hooks.

## Features

✅ **Add Tasks** - Enter new tasks using the input field and click "Add Task" (or press Enter)  
✅ **Mark as Complete** - Click the checkbox to toggle task completion status  
✅ **Delete Tasks** - Remove tasks with the delete button  
✅ **Visual Feedback** - Completed tasks show with strikethrough text and green highlight  
✅ **Task Statistics** - View total tasks and completed tasks count  
✅ **Real-time Updates** - UI updates instantly without page reload  
✅ **Responsive Design** - Works beautifully on desktop and mobile devices  

## Project Structure

```
Todo/
├── App.js           # Main component managing app state
├── TodoList.js      # Component to display list of tasks
├── TodoItem.js      # Component for individual task item
├── App.css          # Styling for the application
├── index.js         # React entry point
├── index.html       # HTML template
└── package.json     # Project dependencies and scripts
```

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

The app will open automatically at `http://localhost:3000`

## How to Use

1. **Add a Task**: Type your task in the input field and click "Add Task" or press Enter
2. **Mark Complete**: Click the checkbox next to a task to mark it as completed
3. **Delete Task**: Click the "Delete" button to remove a task
4. **View Stats**: The stats shown at the top display total and completed tasks

## Key Features Explained

### State Management
- Uses React's `useState` hook to manage tasks array and input field
- Tasks are stored as objects with unique IDs, text, and completion status

### Component Hierarchy
```
App
├── TodoList
│   └── TodoItem (repeated for each task)
```

### Unique Task IDs
- Each task receives a unique ID using `Math.random().toString(36).substr(2, 9)`
- IDs are used for toggling completion and deleting tasks

### Styling
- Modern gradient background and clean UI design
- Smooth hover effects and transitions
- Mobile-responsive layout that adapts to smaller screens
- Completed tasks show with strikethrough and green highlight

## Browser Support

Works on all modern browsers that support ES6 and React 18+

## Technologies Used

- **React 18** - UI library with functional components
- **Hooks** - useState for state management
- **CSS3** - Styling with gradient backgrounds and flexbox
- **JavaScript ES6+** - Modern JavaScript features

---

Enjoy your TODO app! 🎉
