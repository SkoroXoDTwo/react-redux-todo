import './Header.scss'

function Header() {
  return(
    <header className="header">
      <h1 className="header__logo">todo</h1>
      <button className="header__theme-toggle"></button>
    </header>
  );
}

export default Header;
