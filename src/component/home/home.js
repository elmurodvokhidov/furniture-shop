import Style from "./home.module.css"
import Section1 from "../section1/section1"
import Section2 from "../section2/section2"
import Section3 from "../section3/section3"
import Section4 from "../section4/section4"
import Section5 from "../section5/section5"
import Section6 from "../section6/section6"
import Section7, { Card } from "../section7/section7"
import Section8 from "../section8/section8"
import rasim1 from "../section7/img/rasim1.png";
import rasim2 from "../section7/img/rasim2.png";


function Home() {
    return (
        <>
            <Section1 />
            <Section2 />
            <Section4 />
            <Section3 />
            <Section5 />
            <Section6 />
            <Section7 />
            <div className={Style.card}>
                <Card rasim={rasim1} />
                <Card rasim={rasim2} />
            </div>
            <Section8 />
        </>
    )
}

export default Home