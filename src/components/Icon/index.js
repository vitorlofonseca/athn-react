const Icon = ({ name, ...props }) => {
  return (
    <img src={`assets/icons/${name}.svg`} alt="Email icon" {...props}></img>
  );
};

export { Icon };
