 import Style from './section5.module.css'
 import {Box} from '../section6/section6'
 import rasm1 from './image/48469 1.png'
 import rasm2 from './image/94b2ef2db6c6bd1869fb1bf10740d317 1.png'
 import rasm3 from './image/83980771 1.png'
 import rasm4 from './image/unnamed 1.png'
 function Section5() {
    return (
            <div>
            <div className={Style.box}><h1>Our Furniture</h1>
             <p>It is a long established fact that a reader <br /> will be distracted by the service.</p>
            </div>
            <div className={Style.box1}>
            <div className={Style.box2}><input type="normal"placeholder='Search a furniture           🔍' />
            </div>
            <div className={Style.box3}>
                <ul>
                    <li><a href=''>All</a></li>
                    <li><a href=''>Chair</a></li>
                    <li><a href=''>Table</a></li>
                    <li><a href=''>Bed</a></li>
                    <li><a href=''>Sofa</a></li>
                    <li><a href=''>Wardrobe</a></li>
                    <li><a href=''>Almirah</a></li>
                    <li><a href=''>Dimple</a></li>
                    <li><a href=''>Rack</a></li>
                    <li><a href=''>stand</a></li>
                </ul>
            </div>
        </div>
      <div className={Style.div}>
      <Box rasm={rasm1}/>
        <Box rasm={rasm2}/>
        <Box rasm={rasm3}/>
        <Box rasm={rasm4}/>
      </div>
        </div>
    
    )
}

export default Section5