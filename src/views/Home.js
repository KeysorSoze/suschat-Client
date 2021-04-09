import React from "react";
import "../styles/Home.css";
import {Link} from "react-router-dom";

const Home = () => {

    let publicIp = '0.0.0.0'

    return (
        <div className="Home_Body">
            <div className="Zone">
                <h2>
                    Your Ip
                </h2>
                <h3>{publicIp}</h3>
            </div>

            <div className='VPN'>
                <h2>Need a VPN to hide your IP?</h2>
                <p>While using our chat we recommend masking your IP address.
                     The Ip address is the only way to link you to your chats through this service.
                      Otherwise people online can find where you are!</p>
                <button id="Vpn"><Link to="/vpn">Learn More</Link></button>
            </div>

            <div>
                <h2>
                    Enter Room Id
                </h2>
                <input type="text" id="roomId" name="roomId"></input>
                <button>Join</button>   
                <p className="VPN">By clicking join you agree to the <Link to="/tos">Terms of Service</Link></p>
            </div>
        </div>
    )

}

export default Home;