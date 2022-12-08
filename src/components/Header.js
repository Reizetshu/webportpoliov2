import redcube from '../assets/redcube.png';

import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <a href='#landing'>
        <img className='red' src={redcube} alt='redcube'/>
      </a>
      <p>MBHernando</p>
    </header>
  )
}

export default Header;