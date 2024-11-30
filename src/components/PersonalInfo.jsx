import React from "react";
import { useParams } from "react-router-dom";

import "./PersonalInfo.css";

export const PersonalInfo = ({ data }) => {
  const { id } = useParams();
  const person = data?.find((p) => p.id.toString() === id);

  if (!person) {
    return <div>Person not found</div>;
  }

  const {
    Name,
    Present_Position,
    Present_Office_Address,
    Mobile_Number,
    Official_mail_id,
    Personal_mail_id,
    Year_of_phd,
    PhD_Thesis_Title,
    Number_of_PhD_Student_Awarded,
    Number_of_PhD_Student_Continue,
    Area_of_Specialization,
    Present_Position_Details,
    Present_Official_Address,
    Img,
    Biography,
  } = person;

  return (
    <div className="per-container">
      <div className="per-top">
        <div className="top-left">
          <div className="per-name">{Name || "Name not available"}</div>
          <div className="per-position">{Present_Position || "Position not specified"}</div>
          <div className="per-address">{Present_Office_Address || "Address not available"}</div>
          <div className="per-mobile">{Mobile_Number || "Mobile number not available"}</div>
          <div className="per-mail1">{Official_mail_id || "No official email"}</div>
          <div className="per-mail2">{Personal_mail_id || "No personal email"}</div>
          <div className="per-year">Year of PhD: {Year_of_phd || "Not specified"}</div>
          <br />
          <div className="per-phd">
            <span style={{ fontWeight: "400" }}>PhD Thesis Title:</span>
            <br /> <i>{PhD_Thesis_Title || "Not available"}</i>
          </div>
          <div className="per-award">
            <strong>Number of PhD Students Awarded:</strong>{" "}
            {Number_of_PhD_Student_Awarded || 0}
          </div>
          <div className="per-continue">
            <strong>Number of PhD Students Continuing:</strong>{" "}
            {Number_of_PhD_Student_Continue || 0}
          </div>
          <div className="per-specialization">
            <strong>Area of Specialization:</strong> {Area_of_Specialization || "Not specified"}
          </div>
          <div className="per-position-details">
            <strong>Present Position Details:</strong> {Present_Position_Details || "Not specified"}
          </div>
          <div className="per-official-address">
            <strong>Present Official Address:</strong> {Present_Official_Address || "Not available"}
          </div>
           {/* Biography Section */}
           <h2 className="per-biography-heading">Biography</h2>
          <p className="per-biography">
            {Biography || "Biography not available"}
          </p>
        </div>
        <div className="top-right">
          <img
            className="per-img"
            src={Img || "default-image-path.jpg"}
            alt={Name || "Profile picture"}
          />
        </div>
      </div>
    </div>
  );
};
