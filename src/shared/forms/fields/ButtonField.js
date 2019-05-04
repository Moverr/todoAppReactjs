import React from 'react'


const InputField = (props) => {
    return <button value={props.value} type={props.type} onClick={props.callback} />;
}


export default InputField;