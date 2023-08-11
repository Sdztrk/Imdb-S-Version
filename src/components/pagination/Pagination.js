import React from 'react';
import { Link } from 'react-router-dom';
import "./Pagination.scss"



const Pagination = ({ type,currentPage }) => {
  const totalPages = 5; // Number of pages for each category


  return (
    <div className='pageLinkContainer'>

      {Array.from({ length: totalPages }, (_, index) => (
        <Link style={{
          color: currentPage === index + 1 ? 'red' : 'blue',
          fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
        }}
         className='pageLinks' key={index} to={`/movies/${type}/${index + 1}`}>
          {index + 1}
        </Link>
      ))}

    </div>
  );
};

export default Pagination;