
function Dropdown( {label, options, selected, onChange} ){
    return(
        <div className="form-group mx-2">
            <label>{label}</label>
            <select className="form-control" value={selected} onChange={onChange}>
                {options.map((currency) => (
                    <option key = {currency}
                        value={currency}>
                            {currency}
                    </option>
                    ))}
            </select>

        </div>
    )
}

export default Dropdown;