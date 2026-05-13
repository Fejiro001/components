function Nav(props) {
  return (
    <nav className={props.className}>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#flavours">Flavours</a>
        </li>
        <li>
          <a href="#about">Our Story</a>
        </li>
        <li>
          <a href="#makers">Meet the Makers</a>
        </li>
        <li>
          <a href="#locations">Find Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
