import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const numProducts = useSelector((state) => state.products.length)
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home page</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
        </ul>
        <span>{numProducts}</span>
      </nav>
    </header>
  );
};
