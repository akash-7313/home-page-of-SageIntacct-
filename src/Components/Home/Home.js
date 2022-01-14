import React from 'react';
import Banner from '../Banner/Banner';
import Customers from '../Customers/Customers';
import DigitalWorld from '../DigitalWorld/DigitalWorld';
import Partners from '../Partners/Partners';
import Popular from '../Popular/Popular';
import SolutionNav from '../Solutions/SolutionNav/SolutionNav';

const Home = () => {
    return (
      <div className="overflow-hidden">
        <Banner></Banner>
        <DigitalWorld></DigitalWorld>
        <SolutionNav></SolutionNav>
        <Customers></Customers>
        <Partners></Partners>
        <Popular></Popular>
      </div>
    );
};

export default Home;