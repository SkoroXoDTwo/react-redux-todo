import './Header.scss'
import { setTheme, selectTheme } from "../../features/Theme/theme-slice";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const activeTheme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <h1 className="header__logo">todo</h1>
      <button
        className="header__theme-toggle"
        onClick={() => dispatch(setTheme(activeTheme === "light" ? "dark" : "light"))}
      />
    </header>
  );
}

export default Header;
