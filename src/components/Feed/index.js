import React from 'react';
import './styles.css';
import Post from './../Post/index';
import firebase from 'firebase';
import InputOptions from './../InputOptions/index';
import { selectUser } from './../../features/user/userSlice';
import { db } from '../../firebase';
import { useSelector } from 'react-redux';
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from '@material-ui/icons';

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = React.useState('');
  const [posts, setPosts] = React.useState([]);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
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
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
