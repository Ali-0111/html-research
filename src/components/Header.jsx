import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="main-head flex items-center justify-between border-2 max-w-[90%] mx-auto p-1 text-lg">

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
