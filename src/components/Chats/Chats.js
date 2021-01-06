import React from 'react';
import Chat from './Chat';
import './Chats.css';

function Chats() {
    return (
        <div className="chats">
            <Chat 
             name="Agnes"
             message="Yo whats up"
             timestamp="40 seconds ago"
             profilePic="https://scontent.flos3-2.fna.fbcdn.net/v/t1.0-9/121653521_405840733912662_851293843220777304_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFL1OdI3wO3BJ18NJVrEUPnkwxJgj0BGG-TDEmCPQEYb0qRdlV9auIcD9Bdmxh-KYWY_Ao5hGlfIAq4QjBNu1lb&_nc_ohc=vT6iLGdoDL4AX9VW1l5&_nc_ht=scontent.flos3-2.fna&oh=c3397b3dbc5d1d2e0c7d1049d036b51f&oe=6018C138"
            />

             <Chat 
             name="Wuryen"
             message="Yo whats up"
             timestamp="40 seconds ago"
             profilePic="https://scontent.flos3-2.fna.fbcdn.net/v/t1.0-9/62216757_1661567120654948_5809347956838498304_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFjyFmF32NzhWCIaw77UwWCvM0RZyMyON68zRFnIzI43pI07zt13pz_McsslhMNNoxSWlummzeiDgb6wzBYKCUJ&_nc_ohc=LFeWEyep5o8AX9F91q-&_nc_ht=scontent.flos3-2.fna&oh=e7ddb6373441d581cc02f712ed75fa9c&oe=601B424B"
            />

             <Chat 
             name="Mena"
             message="Yo whats up"
             timestamp="40 seconds ago"
             profilePic="https://scontent.flos3-2.fna.fbcdn.net/v/t1.0-9/84391797_2469789703132919_2947342069028356096_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEdIHi5C0XwpxufMXHPOW-Q6f1ErnzHXa_p_USufMddrx0UcqHUaMFXLVG6wF91kQthOsPoK98-JG55NCt19h0s&_nc_ohc=lH18z9kP1_oAX8ZeF5_&_nc_oc=AQlW11I2QveF1Er4fhNSr7d0nzxGmBNMhefN51QlMlbM3a1uoy8RzgvUuxu5CUT2sTw&_nc_ht=scontent.flos3-2.fna&oh=b33ba7e071ca3c3ec21ab647d1602025&oe=601A767E"
            />
        </div>
    )
}

export default Chats
