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

    // Function to change the text to the lower case:
    const handleLowClick = ()=>{
        // console.log("Hitted on the button of the lower case:");
        let newText=text.toLowerCase();
        setText(newText)
    }

    //The function to cler the text:
    const handlecleartext=()=>{
        let newtext=""
        setText(newtext)
    }

    //Calculating the most fr char
    function mostFrequentChar(str) {
        const freq = {};
        let maxCount = 0;
        let maxChar = '';
      
        for (let char of str) {
          freq[char] = (freq[char] || 0) + 1;
          if (freq[char] > maxCount) {
            maxCount = freq[char];
            maxChar = char;
          }
        }
      
        return maxChar;
      }      

    // Function that is going to speack the hole string:
    const handleListningEvent=()=>{
        let msg = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(msg);
    }

    // Fucntion that is going to handle the copy:
    const handleCopy=()=>{
        let ttext=document.getElementById("myBox")
        ttext.select()
        navigator.clipboard.writeText(ttext.value)
    }

    const [text , setText] = useState('Enter Text here')
    // That simple meanse when erver we update the text we are going to use the setText and the defult value of the varibale 
    // Text is Enter Text Here:
    // And now in the any part of the compponent if we update the text the updation is going to done globally:
  return (
    <>
    <div className="container mb-3">
        <h3>{props.heading}</h3>
        <textarea
        className="form-control"
        id="myBox"
        value={text}
        onChange={handleOnChange}
        rows={15}
        />
        <br />
        <button className="btn btn-primary" onClick={handleUpClick} style={{marginRight : '10px'}}>Convert To Upper Case</button>
        <button className="btn btn-primary" onClick={handleLowClick} style={{marginRight : '10px'}}>Convert To Lower Case</button>
        <button className="btn btn-primary" onClick={handlecleartext} style={{marginRight : '10px'}}>Clear Text</button>
        <button className="btn btn-primary" onClick={handleListningEvent} style={{marginRight : '10px'}}>Listen Text</button>
        <button className="btn btn-primary" onClick={handleCopy}>Copy In One Click</button>
    </div>
    <div className='container my-3'>
        <h2>Your text summary</h2>
        <p>number of words:- {text.split(" ").length} and the  numbers of char:- {text.length}</p>
        <p>Time taken to read you text: {0.008 * text.split(" ").length} minitus</p>
        <p>The most frequent char in you entered text is:- {mostFrequentChar(text)}</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
