/* eslint-disable react/prop-types */
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ value, text }) => {
  const starIcons = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 0.5;
    return (
      <span key={index}>
        {value >= index + 1 ? (
          <FaStar />
        ) : value >= starValue ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });
  return (
    <div className='rating'>
      <>{starIcons}</>
      <span className='rating-text'>{text && text}</span>
    </div>
  );
};

export default Rating;
