import redcube from '../assets/redcube.png';

import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <a href='#landing'>
        <img className='red' src={redcube}/>
      </a>
    </header>
  )
}

export default Header