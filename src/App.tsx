import "./App.css";
import AnywhereIcon from "./components/AnywhereIcon";
import BodyText from "./components/BodyText";
import CollaborationIcon from "./components/CollaborationIcon";
import FeatureCard from "./components/FeatureCard";
import IntroText from "./components/IntroText";
import IntroPicture from "./components/IntroPicture";
import Logo from "./components/Logo";
import NavButton from "./components/NavButton";
import BodyPicture from "./components/BodyPicture";
import SecurityIcon from "./components/SecurityIcon";
import StoreIcon from "./components/StoreIcon";
import TestimonialCard from "./components/TestimonialCard";
import BigQuotes from "./components/BigQuotes";
import Location from "./components/Location";
import PhoneContact from "./components/PhoneContact";
import EmailContact from "./components/EmailContact";
import FooterLink from "./components/FooterLink";
import TwitterIcon from "./components/TwitterIcon";
import InstagramIcon from "./components/InstagramIcon";
import FacebookIcon from "./components/FacebookIcon";
import EmailSignUp from "./components/EmailSignUp";
import Profile1 from "../src/assets/images/profile-1.jpg";
import Profile2 from "../src/assets/images/profile-2.jpg";
import Profile3 from "../src/assets/images/profile-3.jpg";

const App = () => {
  return (
    <div className="app">
      <nav>
        <div className="nav-bar">
          <NavButton>Features</NavButton>
          <NavButton>Team</NavButton>
          <NavButton>Sign In</NavButton>
        </div>
      </nav>
      <main>
        <div className="header-logo">
          <Logo />
        </div>
        <div className="intro-picture">
          <IntroPicture />
        </div>
        <div className="intro-text-container">
          <div className="intro-text">
            <IntroText
              heading="All your files in one secure location, accessible anywhere."
              content="Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers."
              buttonText="Get Started"
            />
          </div>
        </div>
        <div className="features">
          <FeatureCard
            icon={<AnywhereIcon />}
            heading="Access your files, anywhere"
            content="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
            size="24vw"
          />
          <FeatureCard
            icon={<SecurityIcon />}
            heading="Security you can trust"
            content="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files"
            size="26.5vw"
          />
          <FeatureCard
            icon={<CollaborationIcon />}
            heading="Real-time collaboration"
            content="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
            size="26vw"
          />
          <FeatureCard
            icon={<StoreIcon />}
            heading="Store any type of file"
            content="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared"
            size="24vw"
          />
        </div>
        <div className="body">
          <div className="body-picture">
            <BodyPicture />
          </div>
          <div className="body-text">
            <BodyText
              heading="Stay productive, wherever you are"
              content={
                <div>
                  <p>
                    Never let location be an issue when accessing your files.
                    Fylo has you covered for all of your file storage needs.
                  </p>
                  <p>
                    Securely share files and folders with friends, family and
                    colleagues for live collaboration. No email attachments
                    requred.
                  </p>
                </div>
              }
              callToAction="See how Fylo works"
            />
          </div>
        </div>
        <div className="testimonial-section">
          <div className="testimonial">
            <div className="big-quotes">
              <BigQuotes />
            </div>
            <div className="testimonial-cards">
              <TestimonialCard
                message="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                name="Satish Patel"
                occupation="Founder & CEO, Huddle"
                pictureSrc={Profile1}
              />
              <TestimonialCard
                message="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                name="Bruce McKenzie"
                occupation="Founder & CEO, Huddle"
                pictureSrc={Profile2}
              />
              <TestimonialCard
                message="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                name="Iva Boyd"
                occupation="Founder & CEO, Huddle"
                pictureSrc={Profile3}
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-logo">
          <Logo />
        </div>
        <div className="footer-items">
          <Location>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Location>
          <div>
            <PhoneContact>+1-543-123-4567</PhoneContact>
            <EmailContact>example@fylo.com</EmailContact>
          </div>
          <div>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Jobs</FooterLink>
            <FooterLink>Press</FooterLink>
            <FooterLink>Blog</FooterLink>
          </div>
          <div>
            <FooterLink>Contact Us</FooterLink>
            <FooterLink>Terms</FooterLink>
            <FooterLink>Privacy</FooterLink>
          </div>
          <div className="icons">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
        <div className="email-sign-up">
          <EmailSignUp
            heading="Get early access today"
            message="It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you"
            buttonText="Get Started For Free"
          />
        </div>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/ArinzeGit" target="_blank">
            Arinze Owoh
          </a>
          .
        </div>
      </footer>
    </div>
  );
};

export default App;
