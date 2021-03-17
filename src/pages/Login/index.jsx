import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../../features/user/userSlice';
import { auth } from '../../firebase';
import './style.css';

function Login() {
  const [name, setName] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  React.useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };

  const register = () => {
    if (!name) {
      return alert('Please entre a full name!');
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: url,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: url,
              })
            );
          });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className='login'>
      <img
        src='https://www.tmf-group.com/-/media/images/logos/case-study-logos/linkedin.png'
        alt=''
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Full name(required if registering'
          type='text'
        />
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder='Profile pic URL(optional)'
          type='text'
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          type='email'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          type='password'
        />
        <button type='submit' onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{' '}
        <span className='login__register' onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
}

export default Login;
