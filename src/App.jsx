import { useEffect, useState } from 'react'
import './App.css'
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {Power2 } from 'gsap';
import { Timeline } from 'gsap/gsap-core';
// scrolling animation import 
import AOS from 'aos';
import 'aos/dist/aos.css';

gsap.registerPlugin(ScrollTrigger);

function App() {

  // var tl=gsap.timeline({repeat:0});
  // tl.from("#page1 h3",{visibility:"hidden"})
  // tl.from("#page1 button",{visibility:"hidden"})
  // tl.from("#page1",{opacity:"hidden"});
  // tl.from("#page1 img",{xPercent:140});
  // tl.from("#page1 .text h1",{xPercent:-135,delay:0})
  // tl.to("#page1 img",{xPercent:0,duration:1.5, ease:Power2.easeInOut})
  // tl.to("#page1 .text h1",{xPercent:0, duration:1,delay:0.1})
  // tl.to("#page1 h3",{visibility:"visible", duration:1,ease:Power2.ease})
  // tl.to("#page1 button",{visibility:"visible", duration:1,ease:Power2.ease})


  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <>
      <div id="homepage">
        <nav>
            <img src="./brand_logo.png" alt="logo" />
          <ul>
            <li><a href="https://www.nike.com/in/w/new-3n82y">New & Featured</a></li>
            <li><a href="https://www.nike.com/in/men">Men</a></li>
            <li><a href="https://www.nike.com/in/women">Women</a></li>
            <li><a href="https://www.nike.com/in/kids">Kids</a></li>
          </ul>
          <button>Login</button>
        </nav>
        <div id="page1" >
          <div className="text" data-aos="fade-right" data-aos-duration="1200" >
              <h1>YOUR FEET <br />DESERVES <br />THE BEST</h1>
              <h3 >YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</h3>
              <div className="button">
                <button ><a href="https://www.nike.com/in/w/nike-infinity-run-shoes-9g2tvzy7ok">SHOP NOW</a></button>
                <button>CATEGORY</button>
              </div>
          </div>
          <div className="img">
            <img data-aos="fade-left" data-aos-duration="1200" src="./shoe_image.png" alt="shoe" />
          </div>
        </div>
        <div id="page2">
          <img src="./jordan.webp" alt="jordan" />
          <div className="display">
            <h1>Jordan LiFe StyLe </h1>
          </div>
        </div>
        <div id="page3">
          <div className="show">
            <div data-aos="zoom-in" data-aos-duration="1200">
              <Spline  scene="https://prod.spline.design/x0iWypMVk2o1NEJu/scene.splinecode" />
            </div>
            <div className="text" data-aos="fade-left" data-aos-duration="1200">
              <h2 >The Latest</h2>
              <h1 >NEW 360@ VIEW</h1>
              <h6>CHOOSE THE BEST FIT FOR YOU</h6>
              <button>EXPLORE</button>
            </div>
          </div>
        </div>
        <div id="page4">
          <h4>Featured</h4>
          <div className="display">
            <div  data-aos="fade-in" data-aos-duration="3000" className="retro_edit">
              <img height={580} src="./retro_edit.webp" alt="retrokids" />
              <div className='inner'>
                <h2>SHOP RETRO EDIT</h2>
                <button><a href="https://www.nike.com/in/w/head-to-toe-looks-3oae9">SHOP THE LOOK</a></button>
              </div>
            </div>
            <div data-aos="fade-in" data-aos-duration="3000" className="retro_sneakers">
              <img height={580}  src="./retro_sneaker.webp" alt="retroSneaker" />
              <div className='inner'>
                <h2>ON_TREND RETRO SNEAKER</h2>
                <button><a href="https://www.nike.com/in/w/retro-running-8kemk">SHOP SNEAKER</a></button>
              </div>
            </div>
          </div>
        </div>
        <div id="page5">
          <h2>THE ESSENTIALs</h2>
          <div className="display">
            <div data-aos="fade-in" data-aos-duration="3000" className="block1">
              <img src="./mens.webp" alt="mens_clothing" />
              <button><a href="https://www.nike.com/in/w/mens-nik1">Men's</a></button>
            </div>
            <div data-aos="fade-in" data-aos-duration="3000" className="block2">
              <img src="./women.webp" alt="women_clothing" />
              <button><a href="https://www.nike.com/in/w/womens-5e1x6">Women</a></button>
            </div>
            <div data-aos="fade-in" data-aos-duration="3000" className="block3">
              <img src="./kids.webp" alt="kids_clothing" />
              <button><a href="https://www.nike.com/in/w/kids-v4dh">Kids</a></button>
            </div>
          </div>
        </div>
        <footer  data-aos="fade-in" data-aos-duration="3000" >
          <div className="links">
            <div className="bold">
              <ul>
                <li><a href="#">FIND A STORE</a></li>
                <li><a href="#">BECOME A MEMBER</a></li>
                <li><a href="#">Send Us Feedback</a></li>
                <li><a href="#">STUDENT DISCOUNT</a></li>
              </ul>
            </div>
            <div className="getHelp">
              <ul>
                <li>GET HELP</li>
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Delivery</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Payment Options</a></li>
              </ul>
            </div>
            <div className="about_nike">
              <ul>
                <li>ABOUT NIKE</li>
                <li><a href="#" >News</a></li>
                <li><a href="#" >Carrers</a></li>
                <li><a href="#" >Investors</a></li>
                <li><a href="#" >Sustainability</a></li>
              </ul>
            </div>
          </div>
          <div className="app_links">

          </div>
          <div className="subfooter">
            <h5>India</h5>
            <span>@ 2023 Nike, Inc. All Rights Reserved</span>
          </div>
        </footer>
      </div>
      
    </>
  )
}

export default App
