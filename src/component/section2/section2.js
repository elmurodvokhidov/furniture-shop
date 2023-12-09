import Style from './section2.module.css'
function Section2() {
  return (
    <div className={Style.asos} >
      <div className={Style.box}>
        <h1 className={Style.tetx}>Enjoy your life in our <br />
          luxurious furniture</h1>
        <h4 className={Style.text2}>If you are looking for a furniture then you have <br />
          come to the right place.
        </h4>
        <button className={Style.button}>Order Now</button>


      </div>

    </div>
  )
}

export default Section2