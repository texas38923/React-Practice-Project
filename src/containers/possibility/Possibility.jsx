import React from 'react';
import './possibility.css';
import PossibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={PossibilityImage} alt='possibility' />
      </div>

      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>
          The possibilities are beyond our imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eum
          harum, natus quos nemo, obcaecati reprehenderit at fuga modi hic,
          exercitationem a optio minus beatae!
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
