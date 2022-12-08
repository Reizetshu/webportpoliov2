import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillGitlab } from 'react-icons/ai';

import '../styles/Contact.css';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onNameHandler = e => {
    setName(e.target.value);
  };
  const onEmailHandler = e => {
    setEmail(e.target.value);
  };
  const onSubjectHandler = e => {
    setSubject(e.target.value);
  };
  const onMessageHandler = e => {
    setMessage(e.target.value);
  };
  const onSubmitHandler = e => {
    e.preventDefault();
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }
  return (
    <section className='contact'>
      <h4 className='contact-tag'>
        &lt;
        <span className='contact-span'>
          ContactMe
        </span>
        &gt;
      </h4>
      <div className='contact-division'>
        <form className='contact-form'>
          <p>@: mbhernando27@gmail.com</p>
          <div className='contact-1'>
            <input
              className='contact-name'
              type='text'
              placeholder='Name'
              onChange={onNameHandler}
              value={name} />
            <input
              className='contact-email'
              type='email'
              placeholder='Email'
              onChange={onEmailHandler}
              value={email} />
          </div>
          <input
            className='contact-2'
            type='text'
            placeholder='Subject'
            onChange={onSubjectHandler}
            value={subject} />
          <textarea
            className='contact-3'
            placeholder='Message'
            onChange={onMessageHandler}
            value={message}>
          </textarea>
          <div className='contact-button-container'>
            <button
              className='contact-button'
              type='submit'
              onClick={onSubmitHandler}>
              Send
            </button>
          </div>
        </form>
        <div className='contact-info'>
          <h4>Social Media</h4>

          <a
          href='https://github.com/Reizetshu' 
          target='_black'>
            <AiFillGithub size={50} />
            GitHub
          </a>
          <a 
          href='https://gitlab.com/mbhernando27' 
          target='_black'>
            <AiFillGitlab size={50} />
            GitLab
          </a>
          <a 
          href='www.linkedin.com/in/mbhernando27' 
          target='_black'>
            <AiFillLinkedin size={50} />
            LinkedIn
          </a>
        </div>
      </div>
      <h4 className='contact-tag'>
        &lt;/
        <span className='contact-span'>
          ContactMe
        </span>
        &gt;
      </h4>
    </section>
  )
}

export default Contact;