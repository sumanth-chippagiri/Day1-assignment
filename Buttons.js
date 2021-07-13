import React from 'react'
const Button=({buttontext})=>
{
    return (
        <div style={{textAlign:'center',display:'flex',flexDirection:'column'}}>  <button style={{marginTop:'1rem',width:'fitContent'}}> {buttontext}</button>
        </div>
    )
}
export default Button
