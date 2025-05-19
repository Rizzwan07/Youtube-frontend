import React from 'react';
import './CategoryNav.css';
import { AiFillHome } from 'react-icons/ai';
import { FaMusic, FaGamepad, FaCode, FaReact, FaCss3Alt, FaLaptopCode, FaPalette, FaNewspaper, FaFire, FaChartLine, FaFutbol, FaGlobe } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const categories = [
  { name: "All", icon: <AiFillHome size={18} /> },
  { name: "Music", icon: <FaMusic size={18} /> },
  { name: "Gaming", icon: <FaGamepad size={18} /> },
  { name: "JavaScript", icon: <FaCode size={18} /> },
  { name: "React", icon: <FaReact size={18} /> },
  { name: "CSS", icon: <FaCss3Alt size={18} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={18} /> },
  { name: "Coding", icon: <FaLaptopCode size={18} /> },
  { name: "Web Development", icon: <FaCode size={18} /> },
  { name: "UI Design", icon: <FaPalette size={18} /> },
  { name: "Latest", icon: <FaNewspaper size={18} /> },
  { name: "Popular", icon: <FaFire size={18} /> },
  { name: "Trending", icon: <FaChartLine size={18} /> },
  { name: "Sports", icon: <FaFutbol size={18} /> },
  { name: "News", icon: <FaGlobe size={18} /> }
];

const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");

  return (
    <div className="category-nav">
      <div className="category-scroll no-scrollbar">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`category-btn ${activeCategory === category.name ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.name)}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav; 