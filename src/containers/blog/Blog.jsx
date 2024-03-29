import React from 'react';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import { Article } from '../../components';
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A Lot is Happening, We're blogging about it.
        </h1>
      </div>

      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article
            imgUrl={blog01}
            date='Jan 05, 2024'
            title='Lorem ipsum dolor sit amet.'
          />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article
            imgUrl={blog02}
            date='Jan 05, 2024'
            title='Lorem ipsum dolor sit amet.'
          />
          <Article
            imgUrl={blog03}
            date='Jan 05, 2024'
            title='Lorem ipsum dolor sit amet.'
          />
          <Article
            imgUrl={blog04}
            date='Jan 05, 2024'
            title='Lorem ipsum dolor sit amet.'
          />
          <Article
            imgUrl={blog05}
            date='Jan 05, 2024'
            title='Lorem ipsum dolor sit amet.'
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
