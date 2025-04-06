import React,{useState} from 'react'

export default function TextForm(props) {

    // Creating the arrow function to convert all of the given text into upper case:
    const handleUpClick = ()=>{
        // console.log("event occur for converting the txt into upper case");
        // setText("You have clicked on handleUpClick")
        // Now we have to set the text which is currently present in the field of the text to upper case:
        let newtext= text.toUpperCase()
        setText(newtext)
    }
    // If we have set the value to the text area then we have to set the handler function:
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
    //jayre pan apade ek event vadu function call karie we are going to have the event obj also as the arg of the fucntino

    const [text , setText] = useState('Enter Text here')
    // That simple meanse when erver we update the text we are going to use the setText and the defult value of the varibale 
    // Text is Enter Text Here:
    // And now in the any part of the compponent if we update the text the updation is going to done globally:
  return (
    <>
    <div className="mb-3">
        <h3>{props.heading}</h3>
        <textarea
        className="form-control"
        id="myBox"
        value={text}
        onChange={handleOnChange}
        rows={15}
        />
        <br />
        <button className="btn btn-primary" onClick={handleUpClick}>Convert To Upper Case</button>
    </div>
    </>
  )
}
