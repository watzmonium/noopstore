const Input = ({inputAttributes, onInputChange}) => {
  return (
    <input onChange={onInputChange} {...inputAttributes}></input>
  )
};

export default Input;

