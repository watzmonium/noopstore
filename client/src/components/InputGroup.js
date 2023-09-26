const InputGroup = ({ inputAttributes, value, setValue }) => {
  return (
    <div className="input-group">
      <label htmlFor={inputAttributes._id}>
        {inputAttributes["aria-label"]}
      </label>
      <input
        onChange={(e) => setValue(e.target.value)}
        {...inputAttributes}
        value={value}
      ></input>
    </div>
  );
};

export default InputGroup;
