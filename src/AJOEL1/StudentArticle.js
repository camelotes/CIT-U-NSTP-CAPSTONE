// StudentArticle.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './StudentArticle.css'; // Import the CSS file

function ArticleList({ articles }) {
  return (
    <div className="articles-container">
      {articles.map((article) => (
        <div key={article.id} className="article-container">
          <div className="article-box">
            {/* Image Box */}
            <img src={`C:\\Users\\jjabe\\Downloads\\create LOGO.jpg`} alt={`Article ${article.id}`} />

            {/* Article Title */}
            <p>{article.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function StudentArticle() {
  const articles = [
    { id: 1, title: 'NSTP is a program designed to develop the youth’s physical, moral, spiritual, intellectual, and social well-being and promote defense preparedness and ethics of service while undergoing training in any of its three program components. Its various components are specially designed to enhance the youth’s active contribution to the general welfare.' },
    { id: 2, title: 'NSTP is a program designed to develop the youth’s physical, moral, spiritual, intellectual, and social well-being and promote defense preparedness and ethics of service while undergoing training in any of its three program components. Its various components are specially designed to enhance the youth’s active contribution to the general welfare.' },
    { id: 3, title: 'NSTP is a program designed to develop the youth’s physical, moral, spiritual, intellectual, and social well-being and promote defense preparedness and ethics of service while undergoing training in any of its three program components. Its various components are specially designed to enhance the youth’s active contribution to the general welfare.' },
    // Add more articles as needed
  ];

  return (
    <div>
      {/* Navigation Bar */}
      <div className="nav-container">
        <nav>
          <ul className="nav-list">
            <li><NavLink exact to="/homepage">Home</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/studentarticle" activeClassName="active">Articles</NavLink></li>
            <li><NavLink to="/faqs">FAQs</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>
        </nav>
      </div>

      {/* Header - Articles */}
      <div className="header-container">
        <h2>Articles</h2>
      </div>

      {/* Header - Articles */}
      <div className="add-article-container">
        <button className="add-article-btn">Add Article</button>
      </div>

      {/* List of Articles */}
      <ArticleList articles={articles} />
    </div>
  );
}

export default StudentArticle;
