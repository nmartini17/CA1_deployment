import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <li>
        <NavLink exact activeClassName="selected" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/ex1">
          Kiki highlight selected
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/ex2">
          Counter Exercise
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/ex3">
          Exercise 3
        </NavLink>
      </li>
    </div>
  );
}

export default Header;
