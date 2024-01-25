import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="space-x-5 text-center">
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/add-books`}>Add Books</NavLink>
        <NavLink to={`/show-books`}>Show Books</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
