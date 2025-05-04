
function InputField({ label, value, onChange }) {
  return (
    <div className="form-group mx-2">
      <label>{label}</label>
      <input
        type="number"
        className="form-control"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default InputField;