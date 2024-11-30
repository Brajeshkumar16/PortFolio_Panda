import React from 'react';
import './Memory.css';
import gnp2 from '../assets/gnp-2.jpg'; 
import gnp4 from '../assets/gnp-4.jpg';
import gnp5 from '../assets/gnp-5.jpg';
import gnp8 from '../assets/gnp-8.jpg';
import gnp7 from '../assets/gnp-7.jpg';
import gnp9 from '../assets/gnp-9.jpg';
import gnp3 from '../assets/gnp-3.jpg'; 
import gnp10 from '../assets/gnp10.jpg';
import gnp11 from '../assets/gnp11.jpg';
import gnp12 from '../assets/gnp12.jpg';
import gnp13 from '../assets/gnp13.jpg';
import gnp14 from '../assets/gnp14.jpg';
import gnp15 from '../assets/gnp15.jpg';
import gnp16 from '../assets/gnp16.jpg';
import gnp17 from '../assets/gnp17.jpg'; 
import gnp18 from '../assets/gnp18.jpg';
import gnp19 from '../assets/gnp19.jpg';
import gnp20 from '../assets/gnp20.jpg';
import gnp21 from '../assets/gnp21.jpg';
import gnp24 from '../assets/gnp24.jpg';
import gnp25 from '../assets/gnp25.jpg';
import gnp26 from '../assets/gnp26.jpg';
import gnp27 from '../assets/gnp27.jpg';
import gnp28 from '../assets/gnp28.jpg';



const Memory = () => {
  const memories = [
    { title: "Memory 2", image: gnp2 },
    { title: "Memory 4", image: gnp4 },
    { title: "Memory 5", image: gnp5 },
    { title: "Memory 8", image: gnp8 },
    { title: "Memory 7", image: gnp7 },
    { title: "Memory 9", image: gnp9 },
    { title: "Memory 3", image: gnp3 },
    { title: "Memory 3", image: gnp10 },
    { title: "Memory 3", image: gnp11 },
    { title: "Memory 3", image: gnp12 },
    { title: "Memory 3", image: gnp13 },
    { title: "Memory 7", image: gnp14 },
    { title: "Memory 9", image: gnp15 },
    { title: "Memory 3", image: gnp16 },
    { title: "Memory 7", image: gnp17 },
    { title: "Memory 9", image: gnp18 },
    { title: "Memory 3", image: gnp19 },
    { title: "Memory 6", image: gnp20 },
    { title: "Memory 3", image: gnp21 },
    { title: "Memory 3", image: gnp24 },
    { title: "Memory 7", image: gnp25 },
    { title: "Memory 3", image: gnp26 },
    { title: "Memory 7", image: gnp27 },
    { title: "Memory 7", image: gnp28 },
    
  ];

  return (
    <div className="memory-section">
      <h1 className="memory-title">Memories</h1>
      <div className="memory-grid">
        {memories.map((memory, index) => (
          <div key={index} className="memory-item">
            <img src={memory.image} alt={memory.title} className="memory-image" />
            <div className="memory-info">
              {/* <h2>{memory.title}</h2> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memory;
