import React, { useEffect } from 'react'
import Header from '../Components/Header'
import "./Home.css"

export default function Home() {


  return (
    <>
    <Header />
    <div className="">
        <div>
            <h1 className='main_head text-center'>Meri Mati Mera Desh</h1>
            <p className='sub_head text-center'>Shaheedon ko Naman Desh ko Arpan</p>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
            <img className='img-fluid' src='./asset/images/map.png' alt='braveheart'  />
        </div>

        <div className='d-flex justify-content-center align-items-center'>
            <p className='sub_title py-2'>Read the following steps to Participate in the Event</p>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <img className='step img-fluid' src='./asset/images/steps/step1.png' alt='' />
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <img className='step img-fluid' src='./asset/images/steps/step2.png' alt='' />
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <img className='step img-fluid' src='./asset/images/steps/step3.png' alt='' />
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <img className='step img-fluid' src='./asset/images/steps/step4.png' alt='' />
                </div>
            </div>
        </div>

        <div className='d-flex justify-content-center align-items-center'>
            <p className='sub_title py-2'>Click I pledge to participate in the event</p>
        </div>

        <div className='d-flex justify-content-center align-items-center'>
        <button className='pledge_btn' onClick={()=>{console.log("I Pledge")}}>I PLEDGE</button>
        </div>
    </div>
    </>
  )
}
