import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import CoursePackages from '../CoursePackages/CoursePackages';
import Appointment from '../Appointment/Appointment';

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <CoursePackages></CoursePackages>
      <Gallery></Gallery>
      <Appointment></Appointment>
    </div>
  );
};

export default Home;
