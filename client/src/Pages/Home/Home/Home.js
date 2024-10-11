import { useEffect } from 'react';
import useSetTitle from '../../../hooks/useSetTitle';
import Appointment from '../../Appointment/Appointment';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import './Home.css';

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
      <Appointment></Appointment>
      <Contact></Contact>
    </div>
  );
};

export default Home;
