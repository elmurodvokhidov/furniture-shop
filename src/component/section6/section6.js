import Styles from "./section6.module.css"
import rasm1 from "./b7777fcac16ef2dd2b045c02c39de18e 1.png"
import rasm2 from "./2rasm.png"
import rasm3 from "./3rasm.png"
import rasm4 from "./4rasm.png"


function Section6() {
    return (
        <div className={Styles.Section6}>
            <div className={Styles.Boxes}>
                <Box rasm={rasm1} />
                <Box rasm={rasm2} />
                <Box rasm={rasm3} />
                <Box rasm={rasm4} />
            </div>
            <button className={Styles.btn}>View All</button>
        </div>
    )
}

export function Box({ rasm }) {
    return (
        <div className={Styles.card}>
            <div className={Styles.tepa}>
                <div className={Styles.img}></div>
                <img className={Styles.imgg} src={rasm} alt="feruz" />
            </div>
            <div className={Styles.orta}>
                <h3>Furniture Name</h3>
                <p>$ 250</p>
            </div>
            <p className={Styles.pp}>It is a long estiabs lished fact that a reader will be the service.</p>
            <button id={Styles.orderbtn}>Order Now</button>
        </div>
    )
}

export default Section6