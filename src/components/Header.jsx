import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function Header() {
  return (
    // ******** size for main-head can be 60-80  *******
    <header className="main-head flex items-center justify-between general-layout text-lg h-[60px] bg-gray-100">

      {/*             ********* 1-log section ******* */}

      <div className="logo w-[50%]">
        <NavLink to="/">
          <img className="logo" src={logo} alt="logo" />
        </NavLink>
      </div>

      {/*             ********* 2-links section ******* */}

      <nav className="w-[50%]">
        <ul className="flex items-center justify-evenly">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/code">Code</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
