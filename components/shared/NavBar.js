import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

const NavBar = () => (
  <div className='navbar-wrapper'>
    <Navbar expand='lg' className='navbar-dark fj-mw9'>
      <Navbar.Brand className='mr-3 font-weight-bold' href='#'>
        Jocsan Mairena
      </Navbar.Brand>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav'>
          <li className='nav-item mr-3'>
            <a className='nav-link' href='#'>
              Portfolio
            </a>
          </li>
          <li className='nav-item mr-3'>
            <a className='nav-link' href='#'>
              Courses
            </a>
          </li>
          <li className='nav-item mr-3'>
            <a className='nav-link' href='#'>
              Cv
            </a>
          </li>
          <li className='nav-item mr-3'>
            <a className='nav-link' href='#'>
              Ask me
            </a>
          </li>
        </ul>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item mr-3'>
            <a className='nav-link' href='#'>
              Sign Up
            </a>
          </li>
          <li className='nav-item mr-3'>
            <a className='nav-link btn btn-success bg-green-2 bright' href='#'>
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </Navbar>
  </div>
)

export default NavBar
