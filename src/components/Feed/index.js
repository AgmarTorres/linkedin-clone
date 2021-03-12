import { Create, Image } from '@material-ui/icons';
import React from 'react';

import './styles.css';
import InputOptions from './../InputOptions/index';

function Feed() {
  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <Create />
          <form>
            <input type='text' />
            <button type='submit'>Send</button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOptions title='' Icon={Image} color='#70B5F9' title='Photo' />
        </div>
      </div>
    </div>
  );
}

export default Feed;
