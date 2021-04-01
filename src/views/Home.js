import React from "react";
import "../styles/Home.css";

const Home = () => {

    let publicIp = '0.0.0.0'

    return (
        <div className="Home_Body">
            <div className="Zone">
                <h2>
                    Your Ip
                </h2>
                <p>{publicIp}</p>
            </div>

            <div className='VPN'>
                <h2>Need a VPN to hide your IP?</h2>
                <p>While using our chat we recommend masking your IP address.
                     The Ip address is the only way to link you to your chats through this service.
                      Otherwise people online can find where you are!</p>
                <button>Learn More</button>   
            </div>

            <div>
                <h2>
                    Enter Room Id
                </h2>
                <input type="text" id="roomId" name="roomId"></input>
                <button>Join</button>   
                <p className="VPN">By clicking join you agree to the terms of service.</p>
            </div>
        </div>
    )

}

export default Home;