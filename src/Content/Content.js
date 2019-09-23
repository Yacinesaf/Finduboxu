import React from 'react';
import './Content.css'

const content = (props) => {
    return (
    <div className='body'>
        <div id="body-content">
            <div>
                    <p id="slogan1">App That</p>
                    <p id="slogan2">Suits You Better</p>
            </div>
            <div>
                    <img id="phone" src={require("./phone.png")} alt=""></img>
            </div>
        </div>
        <div id="some-text">
            <div>
                Bloc does not support downgrading from any of our programs. If you have.
            </div>
            <div>
                you will need to withdraw and enroll again.
            </div>
        </div>
        <div className="buttons">
            <div className="ios-button">
                <div>
                    <img id="apple" src={require("./apple.png")} alt=""></img>
                </div>
                <div>
                    <div id="available-iphone">
                        Available
                    </div>
                    <div id="appstore">
                        On App Store
                    </div> 
                </div>
            </div>
            <div className="android-button">
                <div>
                    <img id="android" src={require("./android.png")} alt=""></img>
                </div>
                <div>
                    <div id="available-android">
                        Available
                    </div>
                    <div id="playstore">
                        On Play Store
                    </div> 
                </div>
            </div>
        </div>
        <div className="container">
            <div id="container-height">
                <div className="k100-container">
                    <div>
                        <div id="k100">{props.num1}</div>
                        <div>{props.text1}</div>
                    </div>
                </div>
                <div className="k10-container">
                    <div>
                        <div id="k10">{props.num2}</div>
                        <div>{props.text2}</div>
                    </div>
                </div>
                <div className="k50-container">
                    <div>
                        <div id="k50">{props.num3}</div>
                        <div>{props.text3}</div>
                    </div>
                </div>
                <div className="percent-container">
                    <div>
                        <div id="percent">{props.num4}</div>
                        <div>{props.text4}</div>
                    </div>
                </div>
                <div className="k15-container">
                    <div>
                        <div id="k15">{props.num5}</div>
                        <div>{props.text5}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
}


export default content;