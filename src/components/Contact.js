import { AiFillGithub, AiFillLinkedin, AiFillGitlab } from 'react-icons/ai';

import '../styles/Contact.css';

const Contact = () => {
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
              placeholder='Name' />
            <input
              className='contact-email'
              type='email'
              placeholder='Email' />
          </div>
          <input
            className='contact-2'
            type='text'
            placeholder='Subject' />
          <textarea
            className='contact-3'
            placeholder='Message'>
          </textarea>
          <div className='contact-button-container'>
            <button
              className='contact-button'
              type='submit'>
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