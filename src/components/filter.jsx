const Filter = ( { value, setValue, placeholder, onChange } ) => {
  
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return <input placeholder={placeholder} value={value} onChange={ (e) => handleChange(e) } />

}

export default Filter
