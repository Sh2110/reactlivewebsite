import React from 'react';
import web from "../src/images/About.jpg";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Common from './Common';
const About = () => {
  return (<>
<Common 
name="Welcome to About page"
imgsrc={web} 
visit="/contact" 
btname="Contact Now"/>
    </>
  );
};
export default About;
