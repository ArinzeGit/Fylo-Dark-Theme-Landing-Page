import Button from "./Button";

interface Props {
  heading: string;
  content: string;
  buttonText: string;
}
const IntroText = ({ heading, content, buttonText }: Props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          fontFamily: "Raleway",
          fontWeight: "700",
          fontSize: "2.505rem",
          width: "48vw",
          minWidth: "575px",
          lineHeight: "1.5",
        }}
      >
        {heading}
      </h1>

      <p
        style={{
          fontFamily: "OpenSans",
          fontWeight: "400",
          fontSize: "1.25rem",
          width: "43vw",
          minWidth: "515px",
          margin: "2rem auto 0",
        }}
      >
        {content}
      </p>

      <div style={{ marginTop: "2.1rem" }}>
        <Button width="19.3vw" heightInRem={3.3}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default IntroText;
