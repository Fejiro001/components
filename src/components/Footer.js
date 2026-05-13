import logo from "../media/images/logo.png";

function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo footer-logo">
              <img className="logo-image" src={logo} alt="Company logo" />
              <h2>One Scoop Co.</h2>
            </div>
            <p>One Scoop Co. is a modern ice cream parlour bringing handcrafted joy to every bowl and cone since 2000.</p>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>(204) 123-4567</p>
            <p>hello@onescoopco.com</p>
            <p>123 Sweet Street, Winnipeg, MB</p>
          </div>
          <div className="footer-hours">
            <h3>Hours</h3>
            <p>Mon - Fri: 11am - 9pm</p>
            <p>Sat - FrSun: 10am - 10pm</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 One Scoop Co. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
