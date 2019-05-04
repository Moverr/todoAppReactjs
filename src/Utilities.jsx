import React, { Component } from 'react'

 const SearchButton=(props)=>{
      return <input type={props.type} onChange={props.callback()} value={props.value} />;
}
 

export default SearchButton;