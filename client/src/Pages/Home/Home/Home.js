import React, { useEffect } from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import CoursePackages from '../CoursePackages/CoursePackages';
import Appointment from '../../Appointment/Appointment';
import useSetTitle from '../../../hooks/useSetTitle';
import Contact from '../Contact/Contact';

const Home = () => {
  useSetTitle('Home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <CoursePackages></CoursePackages>
      <Gallery></Gallery>
      <Appointment></Appointment>
      <Contact></Contact>
    </div>
  );
};

export default Home;
