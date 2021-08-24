import { useState } from 'react';
import './GroupBanner.scss';
import Banner from 'images/laptop.jpg'

const GroupBanner = () => {
  const [groupPromt, setGroupPromt] = useState('Join Group');

  const toggleFollow = (text) => {
    text === 'Join Group'
      ? setGroupPromt('Leave Group')
      : setGroupPromt('Join Group');
  };

  return (
    <div className='banner'>
      <section className='banner__group text-primary'>
        <div className='banner__group--overlay'></div>
        <img
          className='img-fluid'
          src={Banner}
          alt='Computer Engineering'
        />

        <i className='bi bi-arrow-left-short d-md-none'></i>

        <button
          className='btn btn-outline-primary d-md-none'
          onClick={() => toggleFollow(groupPromt)}
        >
          {groupPromt}
        </button>

        <div className='banner__group__data'>
          <h4 className='fw-bolder m-0'>Computer Engineering</h4>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </section>
    </div>
  );
};

export default GroupBanner;
