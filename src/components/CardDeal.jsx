import React from 'react';
import { card } from '../assets';
import style, { layout } from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
     <div className={layout.sectionInfo}>
      <h2 className={style.heading2}>Find a better card deal <br /> in a few easy steps.</h2>
      <p className={`${style.paragraph} max-w-470px mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore obcaecati, nulla nam quod corrupti eos!</p>
      <Button style='mt-20' />
     </div>
     <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]' />
     </div>
    </section>
  )
}

export default CardDeal;