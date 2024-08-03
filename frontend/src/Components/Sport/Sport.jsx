import React, { useContext } from 'react';
import Slider from 'react-slick';
import './Sport.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarContext } from '../../context/CarContext';
import CarItem from '../CarItem/CarItem';

const Sport = ({ category }) => {
  const { sportcar } = useContext(CarContext);
  console.log('Car List:', sportcar); // Log để kiểm tra dữ liệu carList

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Hiển thị 3 mục mỗi lần
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='car-display' id='car-display'>
      <h1>POPULAR SPORT CAR</h1>
      <Slider {...settings} className="car-display-list">
        {sportcar.map((item, index) => {
          if (category === "Sport") {
            return (
              <CarItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </Slider>
    </div>
  );
};

export default Sport;







