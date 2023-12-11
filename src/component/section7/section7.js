import section7 from "./section7.module.css";
function Section7() {
    return (
        <div className={section7.container}>
            <div className={section7.box1}>
                <h2>What say clients about us</h2>
                <div className={section7.chiziq}>
                    <p>_________</p>
                    <p>It is a long established fact that a reader will <br /> be distracted by the service.</p>
                </div>
            </div>

        </div>
    )
}
export function Card({rasim}) {
    return (
        <div className={section7.box2}>
            <div className={section7.bir}>
                <img src={rasim} alt="rasim" />
            </div>
            <div className={section7.ikki}>
                <h2>Mr. Jone Ambrose</h2>
                <p>20 - 07 - 21</p>
                <p>“Lorem Ipsum has been the industry by standard dummy text ever to since the 1500s, it’s  type and scrambled it to make a type specimen book. It’s has survived not only five.”</p>
                <div className={section7.i}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
            </div>
        </div>
    )
}
export default Section7