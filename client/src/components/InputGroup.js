import Input from './Input';

const InputGroup = ({inputAttributes, onInputChange}) => {
  const {label, attributes} = inputAttributes;

  return (
    <div className="input-group">
      <label htmlFor={label}>{attributes['aria-label']}</label>
      <Input inputAttributes={attributes} onInputChange={onInputChange} />
    </div>
  );
};

export default InputGroup;