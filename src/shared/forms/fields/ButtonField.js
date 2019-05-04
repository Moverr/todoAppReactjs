import React from 'react'


 const InputField=(props)=>{
      return <button type={props.type} onChange={props.callback} value={props.value} />;
}
 

export default InputField;