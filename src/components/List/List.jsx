import React, { useRef } from 'react'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../ListItem/ListItem';
import { useState } from 'react';
export default function List() {
  const listRef=useRef();
  const[slideNumber,setSlideNumber]=useState(0);
  const[isMoved,setIsMoved]=useState(false);

  const handleClick=(direction)=>{
    setIsMoved(true);

    //taking care of slide number as in list item so on slide i can stop if index is 0 or last list item
    
    //the distance needs to be taken care when  present slider is moving toward left
    //as in when we do the translate towards left
    //after research we have getBoundingClientRect()


    let distance=listRef.current.getBoundingClientRect().x - 50;

    if(direction==="left" && slideNumber>0 )
    {
      setSlideNumber(slideNumber -1);
      listRef.current.style.transform=`translateX(${230+distance}px)`
    }

    if(direction==="right" && slideNumber<5)
    {
      setSlideNumber(slideNumber+1);
      listRef.current.style.transform=`translateX(${-230 + distance}px)`
    }


  }


  return (
    <div className='listCss'>
      <span className='listTitleCss'>Continue to Watch</span>
      <div class="wrapperCss">
        <ArrowBackIosNewOutlinedIcon className="sliderArrow left" onClick={()=>handleClick("left")} style={{display:!isMoved && "none"}}/>
        <div className="movieContainerCss" ref={listRef}>
          <ListItem index={0}/>
          <ListItem index={1}/>
          <ListItem index={2}/>
          <ListItem index={3}/>
          <ListItem index={4}/>
          <ListItem index={5}/>
          <ListItem index={6}/>
          <ListItem index={7}/>
          <ListItem index={8}/>
          <ListItem index={9}/>
          <ListItem index={10}/>
          <ListItem index={11}/>

        </div>
        <ArrowForwardIosOutlinedIcon className="sliderArrow right" onClick={()=>handleClick("right")} />



            
      
      </div>
    
    </div>
 )
}
