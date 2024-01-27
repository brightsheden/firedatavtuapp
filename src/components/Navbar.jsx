
import Link from 'next/link';
import { Navbar } from 'flowbite-react';

function Navbbar() {
  return (
    <div>
            <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
     
        <span className="self-center whitespace-nowrap text-1xl font-bold dark:text-white">FireData</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#about">
          About
        </Navbar.Link>
        <Navbar.Link href="#services">Services</Navbar.Link>
        <Navbar.Link href="#whyus">Why Us</Navbar.Link>
        <Navbar.Link href="#reviews">Reviews</Navbar.Link>
        <Navbar.Link href="#faq">Faq</Navbar.Link>
        <Navbar.Link href="#contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Navbbar

