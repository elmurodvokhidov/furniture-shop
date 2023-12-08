import Styles from '../section3.module.css';

function Card({header, image, footer}) {
    return (
        <div>
            <h4 className={Styles.matn}>{header}</h4>
            <div className={Styles.box}>
                <svg className={Styles.div1} xmlns="http://www.w3.org/2000/svg" width="275" height="144" viewBox="0 0 275 144" fill="none">
                    <path d="M203.118 1.38093e-06L0 0L71.8825 72L-9.79006e-07 144L203.118 144L275 72L203.118 1.38093e-06Z" fill="#A790C6" />
                </svg>
                <img src={image} alt="..." />
            </div>
            <h4 className={Styles.pmatn}>{footer}</h4>
        </div>
    )
}

export default Card