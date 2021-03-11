import React, { useEffect, useRef, useState } from 'react';
import { io,Socket } from 'socket.io-client';
import './ChatPage.css';
import { Container, Content, Card, MyMessage, OtherMessage } from './styles';
import * as uuid from 'uuid';
import { currUser } from '../RegistrationPage/RegistrationPage';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const socket = io('http://localhost:3000');
interface Message {
    id: string;
    name: string;
    text: string;
    time: string;
  }
  
  interface Payload {
    name: string;
    text: string;
    time: string;
  }

const ChatPage  = () => {

  const name = currUser;
  const [messages, setMessages] = useState<Message[]>([]);
  const formik = useFormik({
    initialValues :{text:''},
    validationSchema: Yup.object({
        text: Yup.string()
       .min(5,'Must be at least 5 characters')
       .max(120, 'Must be 120 characters or less')
       .required()
       .matches(/^[a-zA-Z ]+$/,'Only English')    
    }),
    onSubmit:(values)=> {sendMessage(values)}
})

  useEffect(() => {
    function receivedMessage(message: Payload) {
      const newMessage: Message = {
        id: uuid.v4(),
        time:message.time,
        name: message.name,
        text: message.text,
      };
      setMessages([...messages, newMessage]);
    }

    socket.on('msgToClient', (message: Payload) => {
      receivedMessage(message);
    });
  }, [messages, name, formik.values.text]);

  useEffect(() => {    
    return function cleanup() {
        socket.disconnect();
    }
}, []);

  function sendMessage(values: {text: string}) {
   
      const message: Payload = {
        name,
        text: values.text,
        time : new Date().toLocaleTimeString()
      };
      socket.emit('msgToServer', message);
      formik.values.text = '';  
  }

    return (
        <Container>
             <h1>Chat Page</h1>
        <Content>
        <h3>Username: {name}</h3>
          <Card>
            <ul>
              {messages.map(message => {
                if (message.name === name) {
                  return (
                    <MyMessage key={message.id}>
                      <h4>
                        {message.time} - {message.name}
                      </h4>
  
                      <p>{message.text}</p>
                    </MyMessage>
                  );
                }
  
                return (
                  <OtherMessage key={message.id}>
                    <h4>
                    {message.time} - {message.name}
                    </h4>
  
                    <p>{message.text}</p>
                  </OtherMessage>
                );
              })}
            </ul>
          </Card>
          <form onSubmit={formik.handleSubmit}>
          <input
            id="text" name="text"
            value={formik.values.text} onChange={formik.handleChange}
            placeholder="Enter message..."
          />
           <div className="error">{formik.errors.text}</div>
           <button type="submit"> Send </button>
          </form>
        </Content>
      </Container>
        )
}

export default ChatPage;