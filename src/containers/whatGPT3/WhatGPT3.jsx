import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature
          title='What is gpt3'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime nisi facilis eius officiis quis ad expedita aliquid eaque autem.'
        />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          Possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>

      <div className='gpt3__whatgpt3-container'>
        <Feature
          title='Chatbots'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit blanditiis voluptate incidunt recusandae accusantium nulla!'
        />
        <Feature
          title='Knowledgebase'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit blanditiis voluptate incidunt recusandae accusantium nulla!'
        />
        <Feature
          title='Education'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit blanditiis voluptate incidunt recusandae accusantium nulla!'
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
