import "./Footer.css";
interface Props {
  children: string;
}

const FooterLink = ({ children }: Props) => {
  return (
    <div style={{ marginBottom: "0.85rem" }}>
      <a
        className="FooterLink"
        href="#"
        style={{
          fontFamily: "OpenSans",
          fontWeight: "400",
          fontSize: "1rem",
        }}
      >
        {children}
      </a>
    </div>
  );
};

export default FooterLink;
