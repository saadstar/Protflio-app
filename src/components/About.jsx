import React from "react";
import { about } from "./Data/AllData";

export function About() {
    const display = about.map(item => {
        return(
        <>
                  <div className='content flex'>
                    <div className='contentLeft'>
                      <div className='details flex'>
                        <h2 className='h2Top'>Name :</h2>
                        <h2>{item.name}</h2>
                      </div>
                      <div className='details flex'>
                        <h2 className='h2Top'>Email :</h2>
                        <h2>{item.email}</h2>
                      </div>
                      <div className='details flex'>
                        <h2 className='h2Top'>Phone :</h2>
                        <h2>{item.phone}</h2>
                      </div>
                      <div className='details flex'>
                        <h2 className='h2Top'>Fax :</h2>
                        <h2>{item.fax}</h2>
                      </div>
                      <div className='details flex'>
                        <h2 className='h2Top'>Date of birth :</h2>
                        <h2>{item.dob}</h2>
                      </div>
                      <div className='details flex'>
                        <h2 className='h2Top'>Nationality :</h2>
                        <h2>{item.nation}</h2>
                      </div>
                      <button className='primary-btn'>
                        DOWNLOAD RESUME <i className='fa fa-long-arrow-alt-right'></i>
                      </button>
                    </div>
                    <div className='contentRight'>
                      <div className='heading'>
                        <h1>{item.heading}</h1>
                      </div>
                      <div className='para'>
                        <span>Hello</span>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </>)
    })
    return (
      <section className='about'>
        <div className='container'>
          <div className='itemContent'>
            {   <>
      <div className='sideHeading'>
        <h1>
          <i class='fas fa-minus'></i>
          about me
        </h1>
      </div>
    </>  }
            {display}
          </div>
        </div>
      </section>
    )
}