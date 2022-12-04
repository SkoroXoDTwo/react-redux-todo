import './Header.scss'
import { setTheme } from "../../store/themes/themesActions";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  return(
    <header className="header">
      <h1 className="header__logo">todo</h1>
      <button className="header__theme-toggle" onClick={() => dispatch(setTheme())}></button>
    </header>
  );
}

export default Header;
