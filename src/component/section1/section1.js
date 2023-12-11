import Style from "./section1.module.css";
import { CiSearch } from "react-icons/ci";

function Section1() {
    return (
        <div className={Style.container}>
            <div className={Style.box1}>
                <h1>SQ R3</h1>
            </div>
            <div className={Style.box2}>
                <p>Home</p>
                <p>About</p>
                <p>Service</p>
                <p>Furniture</p>
                <button className={Style.botton}>Order Now</button>
                <CiSearch style={{fontSize: '30px'}} />
            </div>
        </div>
    )
}

export default Section1