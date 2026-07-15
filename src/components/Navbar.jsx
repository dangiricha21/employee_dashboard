import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/employees">Employees</NavLink>

      <NavLink to="/employees/new">Add Employee</NavLink>

      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default Navbar;