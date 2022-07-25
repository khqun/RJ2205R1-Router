function InputForm({ values,
    errors,
    name,
    handleChange,
    type,
    label,
    classname
}) {
    return (
        <div>
            <p>{label}</p>
            <input onChange={handleChange} type={type || 'text'} name={name} value={values} className={classname} />
            <p className="error_message">{errors}</p>
        </div>
    )
}
export default InputForm

