function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR</span> Rental
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <a href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp; +91 93602 17634
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                yogeshofficial2415@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; yogeshofficial2415@gmail.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="#"
                >
                  Design by Yogesh
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">Coimbatore</a>
              </li>
              <li>
                <a href="#home">Chennai</a>
              </li>
              <li>
                <a href="#home">Tiruppur</a>
              </li>
              <li>
                <a href="#home">Mumbai</a>
              </li>
              <li>
                <a href="#home">bangalore</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 9:30AM - 10:00PM</li>
              <li>Sat: 9:00AM - 11:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
