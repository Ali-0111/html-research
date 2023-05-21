import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    // ******** size for main-head can be 60-80  *******
    <header className="main-head flex items-center justify-between general-layout text-lg h-[60px] bg-gray-100">

      {/*             ********* 1-log section ******* */}

      <div className="logo w-[50%]">
        <NavLink to="/">logo/pic is here</NavLink>
      </div>

      {/*             ********* 2-links section ******* */}

      <nav className="w-[50%]">
        <ul className="flex items-center justify-evenly">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/page-2">page-2</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
