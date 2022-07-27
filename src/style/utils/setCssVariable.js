const setCssVariable = (key, value) => {
  document.documentElement.style.setProperty(key, value);
};

export { setCssVariable };
