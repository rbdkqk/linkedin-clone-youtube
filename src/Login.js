import React, { useState } from 'react';
import { auth } from './firebase';
import './Login.css';
import { register } from './serviceWorker';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

export default function Login() {
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) =>
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        )
      )
      .catch((err) => alert(err));
  };

  const register = () => {
    if (!name) return alert('Please enter a full name!');

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((err) => alert(err.messsage));
  };

  return (
    <div className='login'>
      <img
        src='https://www.tmf-group.com/-/media/images/logos/case-study-logos/linkedin.png?h=32%25&w=100%25&la=en&hash=D0E8DD162007F2CF94A6CA31F244DE55E6DBBF8E'
        alt=''
      />

      <form action=''>
        <input
          type='text'
          placeholder='Full name (required if registering)'
          password={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Profile pic URL (optional)'
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loginToApp}>Sign in</button>
      </form>

      <p>
        Not a member?{' '}
        <span className='login__register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}
