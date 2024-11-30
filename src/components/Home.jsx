import React from "react";
import profile from "../assets/profile.png";
import "./Home.css";
import Slideshow from "./Slideshow";

export const Home = () => {
  return (
    <>
      <Slideshow />
      <div className="container">
        <div className="homeleft">
          <div className="schooltitle">Prof. Ganapati Panda (G. Panda)</div>
          <br />
          <div className="schooldesc">
            Professor Ganapati Panda, currently serving as a Professor and
            Research Advisor at C V Raman Global University-Odisha, Bhubaneswar,
            India, has had a distinguished career spanning 48 years in teaching
            and research across prestigious technical institutions in India.
            With a robust academic background, including a Ph.D. in Digital
            Signal Processing from IIT Kharagpur and post-doctoral research at
            the University of Edinburgh, UK, Professor Panda has been a stalwart
            in the fields of Signal Processing, Communication, Artificial
            Intelligence, and Machine Learning. His tenure includes significant
            leadership roles such as Deputy Director and Dean (Academic Affairs)
            at the Indian Institute of Technology, Bhubaneswar, and Director at
            the National Institute of Technology, Jamshedpur.
          </div>
        </div>
        <div className="homeright">
          <img src={profile} alt="Profile" />
        </div>
      </div>

      {/* Box Layout */}
      <div className="box-container">
        {/* Box 1 */}
        <div className="box">
          <h2>Academic Governance</h2>
          <p>
            Member of the Board of Governors at IIT Bhubaneswar and NIT
            Rourkela.
          </p>
        </div>

        {/* Box 2 */}
        <div className="box">
          <h2>Scholarly Impact</h2>
          <p>Over 450 research papers in reputed journals and conferences.</p>
          <p>
            13,247 citations, an h-index of 57, and an i10-index of 225 (as of
            12th Dec 2023).
          </p>
        </div>

        {/* Box 3 */}
        <div className="box">
          <h2>Awards and Honors</h2>
          <ul>
            <li>Samanta Chandra Sekhar Award</li>
            <li>Biju Patnaik Award</li>
            <li>INAE-Outstanding Teacher Award</li>
            <li>Fellow of National Academy of Engineering, India</li>
            <li>Fellow of National Academy of Science, India</li>
          </ul>
        </div>

        {/* Box 4 */}
        <div className="box">
          <h2>Research Interests</h2>
          <ul>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Digital Signal Processing</li>
            <li>Digital Communication</li>
            <li>Intelligent Instrumentation</li>
          </ul>
        </div>

        {/* Box 5 */}
        <div className="box">
          <h2>Global Recognition</h2>
          <p>
            Listed as one of the Top 2% Scientists in the world by Stanford
            University for contributions to AI and Machine Learning.
          </p>
          <p>
            Recognized as one of the World’s Best Computer Science Scientists in
            India by Microsoft Academic Graph.
          </p>
        </div>

        {/* Box 6 */}
        <div className="box">
          <h2>Ph.D. Supervision</h2>
          <p>
            Supervised 45 Ph.D. scholars with ten more currently under his
            guidance.
          </p>
        </div>
      </div>
    </>
  );
};
