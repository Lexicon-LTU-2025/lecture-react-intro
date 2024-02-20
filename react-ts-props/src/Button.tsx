import "./Button.css";

interface IButtonProps {
  title: string;
  outline?: true;
  variant?: string;
}

// function Button(props: IButtonProps): JSX.Element {
function Button({ title, outline, variant }: IButtonProps): JSX.Element {
  const classes = ["btn"];

  if (variant === "danger") {
    classes.push("danger");
  }

  if (outline) {
    classes.push("outline");
  }

  return <button className={classes.join(" ")}>{title}</button>;
}

export default Button;
