import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaUserCircle } from "react-icons/fa";
function Sample() {
    const [inp, setInp] = useState("")
    const [inpBtn, setInpBtn] = useState([]);
    function inpFunction(e) {
        setInp(e.target.value);
    }
    function inpBtnFunction() {
        setInpBtn([...inpBtn, inp])
        setInp(" ")
    }
    const [out, setOut] = useState("");
    const [outBtn, setOutBtn] = useState([]);
    function outFunction(e) {
        setOut(e.target.value);
    }
    function outBtnFunction() {
        setOutBtn([...outBtn, out])
        setOut(" ")
    }
    return (
        <div className='container1'>
            <Card style={{ width: '20rem', height: '100%', backgroundColor: '#48A6A7', color: 'white' }}>
                <Card.Body>
                    <div>
                        <div className='mycont'>
                            <div>
                            <h5 style={{marginTop:'4px'}}><b>Pallavi</b></h5>
                            </div>
                            <div style={{ marginTop: '3px', margin: '5px' }}>
                                <FaUserCircle />
                            </div>
                        </div>
                        <div>
                            {
                                inpBtn.map((val) => {
                                    return (
                                        <div className='Chat_history'>
                                            <ul type="none">
                                                <li>{val}</li>
                                            </ul>
                                        </div>

                                    )
                                })
                            }
                        </div>
                        <div>
                            {
                                outBtn.map((val) => {
                                    return (
                                        <div className='Chat_history1'>
                                            <ul type="none">
                                                <li>{val}</li>
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="chat_wrap">
                            <input type="text" placeholder='enter' onChange={inpFunction} value={inp} />
                            <Button variant="info" onClick={inpBtnFunction}>Send</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <div>
            <div>
                <h1 style={{textAlign:'center',color:'#4B164C',fontSize:'20px',fontWeight:'5',letterSpacing:'4px'}}>Live Chat Functionality</h1>
            </div>
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8M0AvPvPg0A?si=A8KidZqOESY7Z7KH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </div>
            
            <Card style={{ width: '20rem', height: '100%', backgroundColor: '#48A6A7', color: 'white' }}>
                <Card.Body>
                    <div>
                    <div className='mycont'>
                            <div>
                                <h5 style={{marginTop:'4px'}}><b>Sahitya</b></h5>
                            </div>
                            <div style={{ marginTop: '3px', margin: '5px' }}>
                                <FaUserCircle />
                            </div>
                        </div>
                        <div className="chat_wrap">
                            <input type="text" placeholder='enter' onChange={outFunction} value={out} />
                            <Button variant="info" onClick={outBtnFunction}>Send</Button>
                        </div>
                        <div>
                            {
                                inpBtn.map((val) => {
                                    return (
                                        <div className='Chat_history1'>
                                            <ul type="none">
                                                <li>{val}</li>
                                            </ul>
                                        </div>

                                    )
                                })
                            }
                        </div>
                        <div>
                            {
                                outBtn.map((val) => {
                                    return (
                                        <div className='Chat_history'>
                                            <ul type="none">
                                                <li>{val}</li>
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Card.Body>

            </Card>


        </div>
    )
}

export default Sample
