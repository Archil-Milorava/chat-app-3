const Input = ({value, type, placeholder, className, onChange}) => {
  return (
    <input
    value={value}
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
};

export default Input;
