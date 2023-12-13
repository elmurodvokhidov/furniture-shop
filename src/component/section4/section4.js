import React from 'react'
import Style from "./section4.module.css"
import img from "./img/img.png"
import img1 from "./img/alibaba.png"
import img2 from "./img/amazon.png"
import img3 from "./img/group.png"

function Section4() {
    return (
        <div className={Style.section}>
            <div className={Style.number}>
                <div className={Style.number1}>
                    <h1>120 k</h1>
                    <h4>Furniture Sale</h4>
                </div>
                <div className={Style.number1}>
                    <h1>98 k</h1>
                    <h4>Review(4.5)</h4>
                </div>
                <div className={Style.number1}>
                    <h1>125</h1>
                    <h4>Furniture Categories</h4>
                </div>
            </div>
            <div className={Style.text}>
                <h1>Learn about us</h1>
                <h4>_____It’s short title here</h4>
            </div>
            <div className={Style.section2}>
                <img src={img} alt="img" />
                <div className={Style.text1}>
                    <h5>Lorem Ipsum has been the industry's standard dummy text ever to since the <br />
                        1500s, type and scrambled it to make a type specimen book. It has survived <br />
                        not only five centuries, but also the leap into electronic typesetting. type and <br />
                        scrambled it to make a type specimen book. It has survived not only five <br />
                        centuries, but also the leap into electronic typesetting
                    </h5>
                    <button>More about us</button>
                    <div className={Style.link}>
                        <img src={img2} alt="img" />
                        <img src={img1} alt="img" />
                        <img src={img3} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4