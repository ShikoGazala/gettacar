import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RegistrationPage, { currUser } from './RegistrationPage/RegistrationPage';
import ChatPage from './ChatPage/ChatPage';
import {mount,route} from 'navi';
import {Router} from 'react-navi';
import { redirect } from 'navi';

const routes = mount({
  '/': redirect('./register'),
  "/register": route({
    title: 'Register',
    view:  <RegistrationPage />
  }),
  "/chat": route({
    title: 'Chat',
    getView: ()=>{return currUser ? <ChatPage /> : <RegistrationPage />}
  })
})
ReactDOM.render(
  <React.StrictMode>
    <Router routes={routes} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
