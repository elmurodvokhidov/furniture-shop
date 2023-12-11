import Styles from './section8.module.css'
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";

function Section8() {
    return (
        <div className={Styles.footer}>


            <div className={Styles.kart1}>
                <h1>SQ R3</h1>
                <div className={Styles.phone}>
                    <FiPhone style={{fontSize:'20px', color:'white'}}/>
                    <p>+8801760-007083</p>
                </div>
                <div className={Styles.phone}>
                    <MdOutlineMail style={{color:'white'}}/>
                    <p>uiuxmdomith@gmail.com</p>
                </div>
                <div className={Styles.social}>
                <FaFacebookF style={{color:'white'}}/>
                <FaInstagram style={{color:'white'}}/>
                <CiTwitter style={{color:'white'}}/>
                <FaLinkedinIn style={{color:'white'}}/>
                </div>
            </div>

            <div className={Styles.kart2}>
                <FooterCard text={'Usefull Links'} text1={'Home'} text2={'About Us'} text3={'Service'} text4={'Furniture'} />
            </div>
            <div className={Styles.kart3}>
                <FooterCard1 matn={'FAQ'} matn1={'Lorem Ipsum Dolar'} matn2={'Lorem Ipsum Dolar'} matn3={'Lorem Ipsum Dolar'} matn4={'Lorem Ipsum Dolar'} />

            </div>

            <div className={Styles.kart4}>
                <h1>Newsletter</h1>
                <div className={Styles.input}>

                <input type="email" name="" id="" placeholder='Enter your mail'/> <button type='s'>Send</button>
                </div>

                <button>Download App</button>
            </div>

        </div>
    )
}
export function FooterCard({ text, text1, text2, text3, text4 }) {
    return (
        <div className={Styles.kart2}>
            <h1>{text}</h1>
            <p>{text1}</p>
            <p>{text2}</p>
            <p>{text3}</p>
            <p>{text4}</p>
        </div>
    )
}
export function FooterCard1({ matn, matn1, matn2, matn3, matn4 }) {
    return (<div className={Styles.kart3}>
        <h1>{matn}</h1>
        <p>{matn1}</p>
        <p>{matn2}</p>
        <p>{matn3}</p>
        <p>{matn4}</p>
    </div>
    )
}
export default Section8