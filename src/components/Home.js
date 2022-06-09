import React, {useState, useEffect} from 'react'
import homepagepic from "../assets/homepagepicture.jpeg";

const Home = () => {
 
  const masthead={
    backgroundImage:`url(${homepagepic})`,
    height: "50vh",
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    };

const titleBanner = {
backgroundColor: "#c6f6c6",
height: "50vh",
marginTop:'-70px',
fontSize:'50px',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
};

  return (
    <div>
      <div style={masthead}>
    </div>
    <div style={{
      backgroundColor: "#ebebeb"
      }}>
      <h2 style= {{
        textAlign: "center",
        fontStyle: "italic"
      }}>Ingi's Microgreens</h2>
      <h4 style= {{
        textAlign: "center",
        fontStyle: "italic"
      }}>Growers of non-GMO microgreens, shoots, and wheatgrass. Organic, sustainable, and nutritous produce born and raised in Frankemuth, Michigan.</h4>
    </div>
    </div>
    
  )
}

export default Home;