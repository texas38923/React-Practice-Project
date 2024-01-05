import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding ' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Lets Build Something Amazing with GPT-3.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est
          accusantium ab beatae assumenda eveniet aperiam. Suscipit nostrum
          vitae perspiciatis quas reprehenderit pariatur voluptatem voluptatum.
        </p>

        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address...' />
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>1,650+ people requested access in the last one hour...</p>
        </div>
      </div>

      <div className='gpt3__header-image'>
        <img src={ai} alt='ai' />
      </div>
    </div>
  );
};

export default Header;
