import React from 'react'
import "./style.css"
import Button from "./Buttons.js"
import Div from "./Divs.js"
const Apple=()=> {

    return ( 
        <>
        <h1 style={{textAlign:'center'}}> Welcome to React Course</h1>
        <Button buttontext="React"/>
        <Button buttontext="Library"/>
        <Button buttontext="Amazing"/> 
        <Div divtext="React is easy to learn.Learn the right way."/>
        <Div divtext="Let us learn it with Lets Upgrade"/>
        </>
    )
}
export default Apple 
