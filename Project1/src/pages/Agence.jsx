import React from "react";
import { useRef } from "react";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Agence = () => {
    gsap.registerPlugin(ScrollTrigger)
    const imageDivRef = useRef(null)
    const imageRef = useRef(null)

    const imageArray = [
        'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
        'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
        'https://k72.ca/images/teamMembers/ChantalG_640X960.jpg?w=640&h=960&s=0d5256f9a322fa37df33ebc989039be1',
        'https://k72.ca/images/teamMembers/Michele_640X980.jpg?w=640&h=960&s=145fe77d0a66376d9904f39939ad8891',
        'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
        'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
        'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
        'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',

    ]


    useGSAP(function(){
        gsap.to(imageDivRef.current,{
            scrollTrigger:{
                trigger:imageDivRef.current,
                start:'top 28.5%',
                end:'top -110%',
                pin:true,
                onUpdate:function(element){
                    let imageIndex;
                    if(element.progress<1){
                     imageIndex = Math.floor(element.progress * imageArray.length)
                    }
                    else{
                        imageIndex = imageArray.length-1
                    }
                    imageRef.current.src = imageArray[imageIndex]        
                }
            }
        })
    })

  return (
    <div>
      <div className="section1">
        <div ref={imageDivRef} className="absolute overflow-hidden h-90 rounded-3xl w-65 top-70 left-[30vw]  ">
          <img
            ref={imageRef}
            className="h-full object-cover w-full"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt=""
          />
        </div>
        <div className=" relative font-[font1]">
          <div className="mt-[57vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              SEVEN7Y <br />
              TWO
            </h1>
          </div>
          <div className="pl-[50%] mt-13">
            <p className="text-6xl">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;We’re inquisitive and open-minded, and we make sure
              creativity crowds out ego from every corner. A brand is a living
              thing, with values, a personality and a story. If we ignore that,
              we can achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>
      </div>

      <div className="section2 h-screen">

      </div>
    </div>
  );
};

export default Agence;
