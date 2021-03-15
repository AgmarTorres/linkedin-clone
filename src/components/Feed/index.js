import React from 'react';
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from '@material-ui/icons';

import InputOptions from './../InputOptions/index';
import './styles.css';
import Post from './../Post/index';

function Feed() {
  const [posts, setPosts] = React.useState([]);
  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <Create />
          <form>
            <input type='text' />
            <button onClick={sendPost} type='submit'>
              Send
            </button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOptions Icon={Image} color='#70B5F9' title='Photo' />
          <InputOptions Icon={Subscriptions} color='#E7A33E' title='Video' />
          <InputOptions Icon={EventNote} color='#C0CBCD' title='Event' />
          <InputOptions
            Icon={CalendarViewDay}
            color='#7FC15E'
            title='Write article'
          />
        </div>
      </div>
      {posts.map((post) => (
        <Post
          description={post.description}
          name={post.name}
          message={post.message}
        />
      ))}
    </div>
  );
}

export default Feed;
