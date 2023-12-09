
import section3 from './section3.module.css';


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
                <div className={section3.Card_1}>
                  <div className={section3.main3_img}></div>

                  <span className={section3.card_text}>Free Delevary</span>
                  <p className={section3.card_desc}>
                    It is a long established fact that a reader will be the
                    service.
                  </p>
                </div>
                <div className={section3.Card_1}>
                  <div className={section3.main3_img1}></div>

                  <span className={section3.card_text}>100% Guarnatee</span>
                  <p className={section3.card_desc}>
                    It is a long established fact that a reader will be the
                    service.
                  </p>
                </div>
                <div className={section3.Card_1}>
                  <div className={section3.main3_img2}></div>

                  <span className={section3.card_text}>Best Quality</span>
                  <p className={section3.card_desc}>
                    It is a long established fact that a reader will be the
                    service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Section3