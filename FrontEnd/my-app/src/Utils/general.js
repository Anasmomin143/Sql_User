const inputChanger = (event, updateValue )=>{
 const newValue = event.target.value
    updateValue(newValue);

}

export {inputChanger};