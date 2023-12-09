import section3 from "./section3.module.css";
import { Maincards } from "./assets/Maincard";


function Section3() {
  return (
    <>
      <div className={section3.container}>
        <div>
          <div className={section3.main3_page}>
            <h2 className={section3.main3_text}>We provide that service</h2>
            <div className={section3.main_top_fleex}>
              <div className={section3.main3_line}></div>
              <span className={section3.main3_flex_desc}>
                It is a long established fact that a reader will be distracted
                by the service.
              </span>
            </div>
            <div className={section3.Card_box}>
              <Maincards
                text={"Free Delevary"}
                desc={
                  "It is a long established fact that a reader will be the service."
                }
                rasm={require("./assets/card1.png")}
              />
              <Maincards
                text={"100% Guarnatee"}
                desc={
                  "It is a long established fact that a reader will be the service."
                }
                rasm={require("./assets/card2.png")}
              />
               
            <Maincards
              text={"Best Quality"}
              desc={
                "It is a long established fact that a reader will be the service."
              }
              rasm={require("./assets/card3.png")}
            />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section3;
