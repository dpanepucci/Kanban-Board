import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div className='nav'>
      <div style={{ fontSize: '60px', display: 'flex' }} className='nav-title'>
        <Link to='/'>Krazy Kanban Board</Link>
      </div>
      <ul>
        {!loginCheck ? (
          <>
            <li className='nav-item'>
              <button style={{ color: 'white', backgroundColor: '#b864c4' }} type='button'>
                <Link to='/login'>Login</Link>
              </button>
            </li>
            <li className='nav-item'>
              <button style={{ color: 'white', backgroundColor: '#b864c4', marginLeft:'10px' }} type='button' id='create-ticket-link'>
                <Link to='/'>New Ticket</Link>
              </button>
            </li>
          </>
        ) : (
          <li className='nav-item'>
            <button
              style={{ color: 'white', backgroundColor: '#b864c4',}}
              type='button'
              onClick={() => {
                auth.logout();
                setLoginCheck(false);
              }}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
