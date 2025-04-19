import React from 'react';
import './CategoryNav.css';

const categories = [
  "All",
  "Music",
  "Gaming",
  "JavaScript",
  "React",
  "CSS",
  "Tailwind",
  "Coding",
  "Web Development",
  "UI Design",
  "Latest",
  "Popular",
  "Trending",
  "Sports",
  "News"
];

const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");

  return (
    <div className="category-nav">
      <div className="category-scroll no-scrollbar">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav; 