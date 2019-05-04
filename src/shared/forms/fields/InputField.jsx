import React, { Component } from 'react'

 const InputField=(props)=>{
      return <input type={props.type} onChange={props.callback()} value={props.value} />;
}
 

export default InputField;