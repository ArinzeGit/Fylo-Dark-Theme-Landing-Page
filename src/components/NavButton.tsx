import "./NavButton.css";
interface Props {
  children: string;
}
const NavButton = ({ children }: Props) => {
  return (
    <span>
      <a href="#" className="nav-button">
        {children}
      </a>
    </span>
  );
};

export default NavButton;
