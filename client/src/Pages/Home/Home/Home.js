import React, { useEffect } from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import About from '../About/About';
import Appointment from '../../Appointment/Appointment';
import useSetTitle from '../../../hooks/useSetTitle';
import Contact from '../Contact/Contact';
// import Gallery from '../Gallery/Gallery';
// import CoursePackages from '../CoursePackages/CoursePackages';

const Home = () => {
  useSetTitle('Home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <Banner></Banner>
      <About></About>
      <Services></Services>
      {/* <CoursePackages></CoursePackages> */}
      {/* <Gallery></Gallery> */}
      <Appointment></Appointment>
      <Contact></Contact>
    </div>
  );
};

export default Home;
