import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Lorem, ipsum dolor',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta explicabo facere enim magnam aperiam expedita quod dolores quis sequi perspiciatis dolorem quibusdam, rem non quidem?',
  },
  {
    title: 'Lorem, ipsum dolor',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta explicabo facere enim magnam aperiam expedita quod dolores quis sequi perspiciatis dolorem quibusdam, rem non quidem?',
  },
  {
    title: 'Lorem, ipsum dolor',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta explicabo facere enim magnam aperiam expedita quod dolores quis sequi perspiciatis dolorem quibusdam, rem non quidem?',
  },
  {
    title: 'Lorem, ipsum dolor',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta explicabo facere enim magnam aperiam expedita quod dolores quis sequi perspiciatis dolorem quibusdam, rem non quidem?',
  },
];

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          dolorum aperiam voluptatibus?
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className='gpt3__features-container'>
        {featuresData.map((item, ind) => (
          <Feature title={item.title} text={item.text} key={item.title + ind} />
        ))}
      </div>
    </div>
  );
};

export default Features;
