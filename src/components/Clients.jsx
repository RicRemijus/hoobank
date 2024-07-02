import React from 'react';
import style from '../style';
import {clients} from '../constants';

const Clients = () => {
  return (
    <section className={`${style.flexCenter} my-4`}>
      <div className={` ${style.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => ( 
           <div key={client.id} className={`flex-1 sm:min-w-[192px] min-w-[120px] ${style.flexCenter} `}>
             <img src={client.logo} alt="" className="sm:w-[192px] w-[100px] object-contain" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients;