import { useAuth } from "../context/auth";
import { Link } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaRegHourglass } from "react-icons/fa6";
import {
  RiDraftLine,
  RiBrainLine,
  RiDossierLine,
  RiFolderShield2Line,
} from "react-icons/ri";
const HomePage = () => {
  const [auth] = useAuth();

  return (
    <div>
      {/* HomePage
      <pre>{JSON.stringify(auth, null, 4)}</pre>
      {auth.token ? <LogoutButton /> : <Link to="/user-login">Login</Link>}

      {auth?.user?.role === "user" ? (
        <button classNameName="bg-blue-500 text-white rounded py-2 px-4 mx-4">
          <Link to="/user-saves">Your Report</Link>
        </button>
      ) : (
        <></>
      )}

      {auth?.user?.role === "admin" ? (
        <button classNameName="bg-blue-500 text-white rounded py-2 px-4 mx-4">
          <Link to="/admin-saves">Admin</Link>
        </button>
      ) : (
        <></>
      )} */}

      <header>
        <nav className="section__container nav__container">
          <div className="nav__logo">
            Knee<span>MRI</span>
          </div>
          <ul className="nav__links">
            <li className="link">
              <a href="#home">Home</a>
            </li>
            <li className="link">
              <a href="#about">About Us</a>
            </li>
            <li className="link">
              <a href="#services">Services</a>
            </li>
            <li className="link">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
          {/* <button className="btn">Login</button> */}
          {auth.token ? <LogoutButton /> : <Link to="/user-login" className="btn">Login</Link>}

          {auth?.user?.role === "user" ? (
            <button className="btn">
              <Link to="/user-saves">Your Report</Link>
            </button>
          ) : (
            <></>
          )}

          {auth?.user?.role === "admin" ? (
            <button className="btn">
              <Link to="/admin-saves">Admin</Link>
            </button>
          ) : (
            <></>
          )}
        </nav>
        <div className="section__container header__container" id="home">
          <div className="header__content">
            <h1>
              Your Trusted Partner for Knee Health – Where Clarity Meets Care.
            </h1>
            <p>
              Elevate knee care with our advanced MRI report generator,
              unraveling the intricacies of issues at their core. Dedicated to
              supporting medical professionals, it's a beacon of precision and
              clarity in diagnostics.
            </p>
            {/* <div className="button__container">
              <button className="btn">Register</button>
            </div> */}
          </div>
        </div>
      </header>
      <section className="section__container service__container">
        <div className="service__header">
          <div className="service__header__content">
            <h2 className="section__header" id="services">
              Our Service
            </h2>
            <p>
              Beyond simply providing medical care, our commitment lies in
              delivering unparalleled service tailored to your unique needs.
            </p>
          </div>
          {/* <button className="service__btn">Ask A Service</button> */}
        </div>
        <div className="service__grid">
          <div className="service__card">
            <span>
              <IoCloudUploadOutline style={{ fontSize: "45px" }} />
            </span>
            <h4>Get Started</h4>
            <p>
              Begin your knee health assessment by easily uploading MRI scans to
              our user-friendly platform, ensuring convenience and security.
            </p>
          </div>
          <div className="service__card">
            <span>
              <FaRegHourglass />
            </span>

            <h4>Data Process</h4>
            <p>
              Experience the power of advanced MRI report generation as our
              cutting-edge technology meticulously processes scans, providing
              precise insights into knee complexities.
            </p>
          </div>
          <div className="service__card">
            <span>
              <RiDraftLine />
            </span>
            <h4>MRI Reports</h4>
            <p>
              Experience the power of advanced MRI report generation as our
              cutting-edge technology meticulously processes scans, providing
              precise insights into knee complexities.
            </p>
          </div>
        </div>
      </section>
      <section className="section__container about__container" id="about">
        <div className="about__content">
          <h2 className="section__header">About Us</h2>
          <p>
            Embark on a transformative journey with our team, pioneers in knee
            health diagnostics. Our groundbreaking MRI report generator provides
            unprecedented insights into knee issues, empowering healthcare
            professionals with precise data for personalized care. Committed to
            excellence, we stand at the intersection of technology and
            compassion, ensuring your knee health is our top priority.
          </p>
          <p>
            Welcome to a future where every pixel tells a story, and your
            well-being is in expert hands. Discover the difference with us,
            where clarity meets care, delivering precise insights into the
            intricacies of knee health. Our commitment to innovation drives us
            to provide unparalleled support to healthcare professionals,
            enabling them to offer the best possible care.
          </p>
          <p>
            With our revolutionary MRI report generator, we empower healthcare
            professionals to navigate knee health complexities with confidence.
            Our dedication to excellence ensures that each patient receives
            personalized care, guided by precise data. At the forefront of knee
            health diagnostics, we combine cutting-edge technology with
            compassion, making your well-being our utmost priority.
          </p>
        </div>
        <div className="about__image">
          <img src="../../assests/Images/Pic (1).jpg" alt="about" />
        </div>
      </section>

      <section className="section__container why__container">
        <div className="why__image">
          <img src="../../assests/Images/Pic (7).jpg" alt="why choose us" />
        </div>
        <div className="why__content">
          <h2 className="section__header">Why Choose Us</h2>
          <p>
            With our revolutionary knee MRI project, we focus on generating
            reports for MRI scans, providing aid to doctors by reducing their
            time and effort.
          </p>
          <div className="why__grid">
            <span>
              <RiBrainLine />
            </span>
            <div>
              <h4>Technology</h4>
              <p>Our model and technology improve patient care for doctors.</p>
            </div>
            <span>
              <RiDossierLine />
            </span>
            <div>
              <h4>Analyze</h4>
              <p>Experience precise knee MRI reports for personalized care.</p>
            </div>
            <span>
              <RiFolderShield2Line />
            </span>
            <div>
              <h4>Security</h4>
              <p>
                Patient information is safely stored in our database, ensuring
                confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="section__container footer__container">
          <div className="footer__col">
            <h3>
              Knee<span>MRI</span>
            </h3>
            <p>
              Experience groundbreaking knee health innovation with our MRI
              project. We provide precise insights into knee conditions,
              empowering personalized care.
            </p>
            <p>
              Join us in redefining knee health diagnostics. Together, we
              optimize knee health and enrich lives.
            </p>
          </div>

          <div className="footer__col">
            <h4>Contact Us</h4>
            <p>
              <i className="ri-map-pin-2-fill"></i> Kuthambakkam, Chennai
            </p>
            <p>
              <i className="ri-mail-fill"></i> kneemri@care.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
