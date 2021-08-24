import './Header.scss';
import { ReactComponent as Logo } from 'images/logo.svg';

const Header = () => {
  return (
    <div className='header'>
      <nav className='header__nav navbar  bg-primary'>
        {/* Mobile Navigation */}
        <div className='container-xxl d-md-none justify-content-end'>
          <div className='header__nav__links  d-flex gap-1 '>
            <span id='circle'></span>
            <span id='rectangle'></span>
            <span id='triangle'></span>
          </div>
        </div>
        {/* Tablet and desktop navigation */}
        <div className='container-xxl d-md-flex justify-content-around align-items-center p-1 d-none'>
          <div className='navbar-brand'>
            <Logo className='header__nav__logo' />
          </div>

          <div className='header__nav__search d-flex'>
            <i className='bi bi-search'></i>
            <input
              className='form-control bg-secondary'
              type='search'
              placeholder='Search for your favourite groups in ATG'
            />
          </div>

          <div className='header__nav__menu dropdown'>
            <button
              className='btn btn-secondary dropdown-toggle bg-primary'
              type='button'
              id='dropdownMenuButton1'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              Create account.
              <span className='fw-bolder text-blue'>It's free!</span>
            </button>
            <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
              <li>
                <span className='dropdown-item'>Login</span>
              </li>
              <li>
                <span className='dropdown-item'>Create an account</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
