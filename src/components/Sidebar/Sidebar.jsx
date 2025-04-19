import React from 'react';
import './Sidebar.css';
import { AiFillHome } from 'react-icons/ai';
import { IoGameController } from 'react-icons/io5';
import { FaCar } from 'react-icons/fa';
import { MdSportsSoccer } from 'react-icons/md';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { FaMusic } from 'react-icons/fa';
import { FaBlog } from 'react-icons/fa';
import { BsNewspaper } from 'react-icons/bs';
import simon from '../../assets/img/simon.png';
import megan from '../../assets/img/megan.png';
import rizz from '../../assets/img/rizz.jpeg'; 
import cameron from '../../assets/img/cameron.png';

export const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <div className="shortcut-links">
        <div className="side-link">
          <AiFillHome size={22} />
          {isOpen && <p>Home</p>}
        </div>

        <div className="side-link">
          <IoGameController size={22} />
          {isOpen && <p>Gaming</p>}
        </div>

        <div className="side-link">
          <FaCar size={22} />
          {isOpen && <p>Automobiles</p>}
        </div>

        <div className="side-link">
          <MdSportsSoccer size={22} />
          {isOpen && <p>Sports</p>}
        </div>

        <div className="side-link">
          <MdOutlineLocalMovies size={22} />
          {isOpen && <p>Entertainment</p>}
        </div>

        <div className="side-link">
          <FaLaptopCode size={22} />
          {isOpen && <p>Technology</p>}
        </div>

        <div className="side-link">
          <FaMusic size={22} />
          {isOpen && <p>Music</p>}
        </div>

        <div className="side-link">
          <FaBlog size={22} />
          {isOpen && <p>Blogs</p>}
        </div>

        <div className="side-link">
          <BsNewspaper size={22} />
          {isOpen && <p>News</p>}
        </div>
      </div>
      
      {isOpen && (
        <>
          <hr />
          <h3 className="subscriptions-title">Subscriptions</h3>
          <div className="subscribed-channels">
            <div className="channel-link">
              <img src={simon} alt="Simon Channel" />
              {isOpen && <p>Simon Wilson</p>}
            </div>
            <div className="channel-link">
              <img src={megan} alt="Megan Channel" />
              {isOpen && <p>Megan</p>}
            </div>
            <div className="channel-link">
              <img src={rizz} alt="Rizz Channel" />
              {isOpen && <p>Rizz</p>}
            </div>
            <div className="channel-link">
              <img src={cameron} alt="Cameron Channel" />
              {isOpen && <p>Cameron</p>}
            </div>
          </div>
        </>
      )}
      
      {!isOpen && <hr />}
    </div>
  );
};

export default Sidebar;