function Button(props) {
  return (
    <button className={props.isPrimary ? "primary" : "secondary"}>
      {props.isPrimary ? "Explore Flavours" : "Our Story"}
    </button>
  );
}

export default Button;
