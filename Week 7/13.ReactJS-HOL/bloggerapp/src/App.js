import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [section, setSection] = useState('');

  let content;
  if (section === 'book') {
    content = <BookDetails />;
  } else if (section === 'blog') {
    content = <BlogDetails />;
  } else if (section === 'course') {
    content = <CourseDetails />;
  } else {
    content = <p className="info-text">Select a category to view detailed content.</p>;
  }

  return (
    <div className="App">
      <header>
        <h1>Blogger Pro</h1>
        <p>Clean UI. Real-time rendering. Powered by React.</p>
      </header>

      <div className="button-group">
        <button onClick={() => setSection('book')}>📘 Books</button>
        <button onClick={() => setSection('blog')}>✍️ Blogs</button>
        <button onClick={() => setSection('course')}>🎓 Courses</button>
      </div>

      <div className="card">{content}</div>

      <footer>
        <p>&copy; 2025 Made by Vinay. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
