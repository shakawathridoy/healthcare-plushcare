import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
        <Carousel>
  <Carousel.Item className="">
    <img
      className="d-block w-100 h-600"
      src="https://plushcare.com/wp-content/uploads/2020/03/memberShip-mobile-banner.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="text-dark">Healthcare thatmakes you smile.</h3>
      <p className="text-dark">Virtual primary care and mental health treatment when you need it. Speak to a top doctor and get personalized, high-quality healthcare from your desktop or smartphone..</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src= "https://plushcare.com/wp-content/uploads/2020/02/GettyImages-1167737058-edit.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Simple and seamless care. When you need it.</h3>
      <p>Advanced technology that provides you with easy access to the best doctors that you trust.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://plushcare.com/wp-content/uploads/2020/02/fit-lady-crop2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>We take care of you, body and mind.</h3>
      <p >A healthy body starts with a healthy mind. Speak to one of our therapists or primary care physicians online to get emotional support.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
    );
};

export default Banner;