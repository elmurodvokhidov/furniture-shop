import React from 'react'
import maincards from './Maincard.module.css'


export function Maincards( {text,desc,rasm}) {
  return (
    <>
      <div className={maincards.Card_1}>
        <div className={maincards.main3_img}>
          <img src={rasm} alt='cards' className={maincards.rasm} > 
          </img>
        </div>

        <span className={maincards.card_text}>{text}</span>
        <p className={maincards.maincards_desc}>
         {desc}
        </p>
      </div>
    </>
  );
}
