import React from 'react'


const ButtonField = (props) => {
    return <button   type={props.type} onClick={props.callback} >{props.value}</button>;
}


export default ButtonField;