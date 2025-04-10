// import React, { useState } from 'react'

export default function About(props) {

    // Creating the state varibale to cange the mode dynamically:
    // const [myStyle , setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // Also using the text of the butto as the state
    // const [btntext , setbtntext] = useState("Enable dark mode")


    // Cerating the function that able to change the obj of mystyle
    // let toggleStyle = ()=>{
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })   
    //         setbtntext("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '2px solid white'
    //         })
    //         setbtntext("Enable Light Mode")
    //     }
    // }

  return (
    <div className="container my-3" 
            style={{
                color: props.mode === 'light' ? '#212529' : 'white',
                backgroundColor: props.mode === 'light' ? 'white' : '#212529',
                border: `3px solid ${props.mode === 'light' ? 'gray': 'white'}`
            }}
    >
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample" 
                style={{
                    color: props.mode === 'light' ? '#212529' : 'white',
                    backgroundColor: props.mode === 'light' ? 'white' : '#212529',
                    border: `1px solid ${props.mode === 'light' ? 'gray': 'white'}`
                }}
            >
            <div className="accordion-item" 
                    style={{
                        color: props.mode === 'light' ? '#212529' : 'white',
                        backgroundColor: props.mode === 'light' ? 'white' : '#212529',
                        border: `1px solid ${props.mode === 'light' ? 'gray': 'white'}`
                    }}

            >
                <h2 className="accordion-header">
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{
                        color: props.mode === 'light' ? '#212529' : 'white',
                        backgroundColor: props.mode === 'light' ? 'white' : '#212529'
                    }}
                >
                    Accordion Item #1
                </button>
                </h2>
                <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
                style={{
                    color: props.mode === 'light' ? '#212529' : 'white',
                    backgroundColor: props.mode === 'light' ? 'white' : '#212529',
                    border: `1px solid ${props.mode === 'light' ? 'gray': 'white'}`
                }}
                >
                <div className="accordion-body" 
                        style={{
                            color: props.mode === 'light' ? '#212529' : 'white',
                            backgroundColor: props.mode === 'light' ? 'white' : '#212529',
                            border: `1px solid ${props.mode === 'light' ? 'gray': 'white'}`
                        }}
                    >
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance,
                    as well as the showing and hiding via CSS transitions. You can modify
                    any of this with custom CSS or overriding our default variables. It's
                    also worth noting that just about any HTML can go within the{" "}
                    <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item"
                    style={{
                        color: props.mode === 'light' ? '#212529' : 'white',
                        backgroundColor: props.mode === 'light' ? 'white' : '#212529',
                        border: `1px solid ${props.mode === 'light' ? 'gray': 'white'}`
                    }}
            >
                <h2 className="accordion-header">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style={{
                        color: props.mode === 'light' ? '#212529' : 'white',
                        backgroundColor: props.mode === 'light' ? 'white' : '#212529',
                        border: `1px solid ${props.mode === 'light' ? 'gray': 'white'}`
                    }}
                >
                    Accordion Item #2
                </button>
                </h2>
                <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
                style={{
                    color: props.mode === 'light' ? '#212529' : 'white',
                    backgroundColor: props.mode === 'light' ? 'white' : '#212529',
                    border: `1px solid ${props.mode === 'light' ? 'gray': 'white'}`
                }}
                >
                <div className="accordion-body" 
                        style={{
                            color: props.mode === 'light' ? '#212529' : 'white',
                            backgroundColor: props.mode === 'light' ? 'white' : '#212529',
                            border: `1px solid ${props.mode === 'light' ? 'gray': 'white'}`
                        }}
                    >
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that
                    we use to style each element. These classes control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You
                    can modify any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML can go within
                    the <code>.accordion-body</code>, though the transition does limit
                    overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item"
                    style={{
                        color: props.mode === 'light' ? '#212529' : 'white',
                        backgroundColor: props.mode === 'light' ? 'white' : '#212529',
                        border: `1px solid ${props.mode === 'light' ? 'gray': 'white'}`
                    }}
            >
                <h2 className="accordion-header">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{
                        color: props.mode === 'light' ? '#212529' : 'white',
                        backgroundColor: props.mode === 'light' ? 'white' : '#212529'
                    }}
                >
                    Accordion Item #3
                </button>
                </h2>
                <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
                style={{
                    color: props.mode === 'light' ? '#212529' : 'white',
                    backgroundColor: props.mode === 'light' ? 'white' : '#212529',
                    border: `1px solid ${props.mode === 'light' ? 'gray': 'white'}`
                }}
                >
                <div className="accordion-body"
                        style={{
                            color: props.mode === 'light' ? '#212529' : 'white',
                            backgroundColor: props.mode === 'light' ? 'white' : '#212529',
                            border: `1px solid ${props.mode === 'light' ? 'gray': 'white'}`
                        }}
                >
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that
                    we use to style each element. These classes control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You
                    can modify any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML can go within
                    the <code>.accordion-body</code>, though the transition does limit
                    overflow.
                </div>
                </div>
            </div>
        </div>
        <br />
    </div>
  )
}
