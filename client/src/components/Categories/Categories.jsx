import React from 'react';
import './Categories.css';
import maternity from '../Assets/maternity.png';
import senior_citizens from '../Assets/senior_citizens.png';
import adults from '../Assets/adults.png';
import kids from '../Assets/kids.png';
import circleIcon from '../Assets/circular_icon.png'; 

const Categories = () => {
  return (
      <div className='categories_bkg'>
        <h1 className='our_categories'>Our Categories</h1>
        <hr className='our_categories_underline'/>
        <div className='category-container'>
            <div className='categories'>
                <div className='category-box'>
                    <img src={maternity} alt='Maternity' />
                    <p>Maternity</p>
                </div>
                <div className='category-box'>
                    <img src={senior_citizens} alt='Senior Citizens' />
                    <p>Senior Citizens</p>
                  </div>
                  <div className='circle-icon'>
                <img src={circleIcon} alt='Icon' />
                </div>
                <div className='category-box'>
                    <img src={adults} alt='Adults' />
                    <p>Adults (18-60)</p>
                </div>
                <div className='category-box'>
                    <img src={kids} alt='Minors' />
                    <p>Minors (Below 18)</p>
                </div>
            </div>
        </div>
      </div>
  );
}

export default Categories;
