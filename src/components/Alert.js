import React from 'react'

export default function Alert(props) {

    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
<<<<<<< HEAD
    <div style={{height: '50px'}}>
      
=======
    <div>
>>>>>>> ed21b575a78bd49bc7ae7159dc3a724648ac9e7b
      {props.alert &&(
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        
        
        </div>
      )}
    </div>
  )
}
