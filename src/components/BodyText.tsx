import { ReactNode } from "react";
import "./BodyText.css";
import ArrowIcon from "./ArrowIcon";

interface Props {
  heading: string;
  content: ReactNode;
  callToAction: string;
}

const BodyText = ({ heading, content, callToAction }: Props) => {
  return (
    <div
      style={{
        width: "35rem",
      }}
    >
      <p
        style={{
          fontFamily: "Raleway",
          fontWeight: "700",
          fontSize: "2.5275rem",
          width: "28rem",
          lineHeight: "3.25rem",
        }}
      >
        {heading}
      </p>
      <div
        style={{
          fontFamily: "OpenSans",
          fontWeight: "400",
          fontSize: "1rem",
          marginBottom: "1.4rem",
        }}
      >
        {content}
      </div>
      <a href="#" className="CallToAction">
        {callToAction}&nbsp;&nbsp;&nbsp;o
        <span className="ArrowIcon">
          <ArrowIcon />
        </span>
      </a>
    </div>
  );
};

export default BodyText;
