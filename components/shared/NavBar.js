import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

const NavBar = () => (
  <div className='navbar-wrapper'>
    <Navbar expand='lg' className='navbar-dark fj-mw9'>
      <Navbar.Brand className='mr-3 font-weight-bold' href='#'>
        Jocsan Mairena
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='mr-auto'>
          <Nav.Link href='#' className='mr-3'>
            Portfolios
          </Nav.Link>
          <Nav.Link href='#' className='mr-3'>
            Courses
          </Nav.Link>
          <Nav.Link href='#' className='mr-3'>
            CV
          </Nav.Link>
          <Nav.Link href='#' className='mr-3'>
            Ask Me
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href='#' className='mr-3'>
            Sign Up
          </Nav.Link>
          <Nav.Link href='#' className='mr-3 btn btn-success bg-green-2 bright'>
            Sign In
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default NavBar
