


import '../styles/Onboard.css';
import { useState } from 'react';
import { data } from '../assets/carouselData';
import { IoMdArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Onboard = () => {
  const [value, setCurrValue] = useState(0);
 const navigate = useNavigate();
 

  return (
    <div className='onboard-wrapper'>
      <div className='carousel'>
        <div className='carousel-header'>
          <h2>{data[value].title}</h2>
          <p>{data[value].subtitle}</p>
        </div>
        <div className='carousel-navigation'>
          {data.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === value ? 'active' : ''}`}
              onClick={() => setCurrValue(index)}
            ></span>
          ))}
        </div>

        {value < data.length - 1 ? (
          <div className='carousel-footer'>
            <span
              onClick={() => {
                navigate('/registration');
              }}
            >
              Skip
            </span>
            <div
              className='right'
              onClick={() =>
                setCurrValue((prevVal) => (prevVal + 1) % data.length)
              }
            >
              <span>Next</span>
              <IoMdArrowForward style={{ fontSize: 30, color: 'white' }} />
            </div>
          </div>
        ) : (
          <div className='loading-icon' onClick={() => navigate('/login')}>
            <IoMdArrowForward style={{ fontSize: 30, color: 'orange' }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboard;





