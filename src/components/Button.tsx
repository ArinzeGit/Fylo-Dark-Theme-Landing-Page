import "./Button.css";

interface Props {
  children: string;
  width: string;
  heightInRem: number;
  fontSize?: string;
}

const Button = ({ children, width, heightInRem, fontSize = "1rem" }: Props) => {
  const height = `${heightInRem}rem`;
  const borderRadius = `${heightInRem / 2}rem`;

  return (
    <button
      className="button"
      type="submit"
      style={{ width, height, borderRadius, fontSize }} //shorthand for style={{ width:width, height:height, borderRadius:borderRadius, fontSize:fontSize }}
    >
      {children}
    </button>
  );
};

export default Button;
