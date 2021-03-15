import React from 'react';
import InputOptions from './../InputOptions/index';
import Post from './../Post/index';
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from '@material-ui/icons';
import './styles.css';
import { db } from '../../firebase';
import firebase from 'firebase';

function Feed() {
  const [input, setInput] = React.useState('');
  const [posts, setPosts] = React.useState([]);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name: 'Agmar',
      description: ' This is a test',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  React.useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <Create />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text'
            />
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
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          description={description}
          name={name}
          message={message}
        />
      ))}
    </div>
  );
}

export default Feed;
