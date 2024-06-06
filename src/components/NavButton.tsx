import "./NavButton.css";
interface Props {
  children: string;
}
const NavButton = ({ children }: Props) => {
  return (
    <a href="#" className="nav-button">
      {children}
    </a>
  );
};

export default NavButton;
