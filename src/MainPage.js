import React from "react";
import Card from "./Card";
import m1 from "./imgs/M1.jpg"
import m2 from "./imgs/M2.jpg"
import m3 from "./imgs/M3.jpg"
import m4 from "./imgs/M4.jpg"
import m5 from "./imgs/M5.jpeg"
import m6 from "./imgs/M6.jpeg"
import m7 from "./imgs/M7.jpeg"
import m8 from "./imgs/M8.jpg"
import m9 from "./imgs/M9.jpg"
import m10 from "./imgs/M10.jpg"

function MainPage(){
    return (
        <>
            <h1 className="heading">Card Galley</h1>
            <div className="cardComp">
                <Card img={m1} title="1" />
                <Card img={m2} title="2" />
                <Card img={m3} title="3" />
                <Card img={m4} title="4" />
                <Card img={m5} title="5" />
                <Card img={m6} title="6" />
                <Card img={m7} title="7" />
                <Card img={m8} title="8" />
                <Card img={m9} title="9" />
                <Card img={m10} title="10" />
            </div>
        </>
    )
}
export default MainPage