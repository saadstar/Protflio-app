import React from 'react';
import { creative } from './Data/AllData';




export const Creative = () => {
    const displayItem = creative.map((item) => {
        return (
          <>
            <div className="itemContent ">
              <div className="">
                <h1>{item.heading}</h1>
                <p>{item.desc}</p>
                <img src={item.cover} alt="" height="30%" width="70%" />
              </div>
            </div>
          </>
        );
    })
  return (
    <section className="home">
          <div className="container">
              <h1 className='m-10'>Creative</h1>
        {displayItem}
      </div>
    </section>
  );
}
