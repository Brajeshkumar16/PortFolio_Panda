import React, { useState } from "react";
import teacher from "../assets/teacher";
import Card from "./Card";
import data2 from "../data";
import { Link } from "react-router-dom";

export const Institute = () => {
  const [data, setData] = useState(data2);
  console.log(data2);
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "90%",
        margin: "100px auto",
      }}
    >
      {data.map((teach, index) => {

        // const urlFriendlyName = teach.Name.replace(/\s+/g, '-');
        const urlFriendlyName = teach.id;
        // console.log(urlFriendlyName)
        return(

          <div key={index} style={{ width: "320px" }}>
            <Link style={{textDecoration: 'none'}} to={`/institute/${urlFriendlyName}`}>
            
          <Card
            name={teach.Name}
            img={teach.Img}
            email={teach.Official_mail_id}
            email2={teach.Personal_mail_id}
            phone={teach.Mobile_Number}
            />
            </Link>
        </div>
            )
})}
    
    </div>
  );
};
