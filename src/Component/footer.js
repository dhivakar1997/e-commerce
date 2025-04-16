import React from 'react';
import '../Component/Footer.css';

function Footer() {
  return (
    <footer className="footer bg-warning text-white pt-4 pb-3 mt-auto">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>We offer the best products at the most affordable prices. Your satisfaction is our priority.</p>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/products" className="footer-link">Products</a></li>
              <li><a href="/login" className="footer-link">Login</a></li>
              <li><a href="/signup" className="footer-link">Signup</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: support@fakestore.com</p>
            <p>Phone: +1 (234) 567-890</p>
          </div>
        </div>

        <div className="text-center mt-4 border-top pt-3">
          <small>&copy; {new Date().getFullYear()} FakeStore. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
