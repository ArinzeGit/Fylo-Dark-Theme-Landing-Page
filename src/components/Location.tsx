import LocationIcon from "./LocationIcon";
import "./Footer.css";
interface Props {
  children: string;
}

const Location = ({ children }: Props) => {
  return (
    <div
      style={{
        width: "27vw",
        minWidth: "270px",
        position: "relative",
        paddingLeft: "2.77vw",
      }}
    >
      <div style={{ position: "absolute", top: "3px", left: "0" }}>
        <LocationIcon />
      </div>
      <a
        href="#"
        className="Location"
        style={{
          fontFamily: "OpenSans",
          fontWeight: "400",
          fontSize: "1rem",
          marginBottom: 0,
        }}
      >
        {children}
      </a>
    </div>
  );
};

export default Location;
