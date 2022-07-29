const Icon = ({ name, ...props }) => {
  return (
    <img src={`assets/icons/${name}.svg`} alt={`${name} icon`} {...props}></img>
  );
};

export { Icon };
