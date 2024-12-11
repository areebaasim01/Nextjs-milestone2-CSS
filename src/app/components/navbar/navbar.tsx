import Link from 'next/link';
import "./navbar.css"

export default function Navbar() {
  return (
    <nav id="navbar">
      <div className="logo">
        <h2>AREEBA ANSARI</h2>
      </div>
      <ul className="menu">
        <li className="menu-item"> <Link href="/">Home</Link></li>
        <li className="menu-item"> <Link href="/about">About</Link></li>
        <li className="menu-item"> <Link href="/skills">Skills</Link> </li>
        <li className="menu-item"> <Link href="/contact">Contact</Link> </li>
      </ul>
    </nav>
  );
}
