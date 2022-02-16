import React, { Fragment,useState } from 'react'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
export default function ListItem({index}) {
    const[isHovered,setIsHovered]=useState(false);
    //const trailer=`https://vimeo.com/662364349`;
    //const trailer="'https://cors-anywhere.herokuapp.com/https://www.pexels.com/video/bowl-of-popcorn-besides-a-light-text-box-with-a-coming-soon-sign-3843430/"
  return (
    <div className="listItemCss" 
    style={{left:isHovered && index * 225 - 50 +index * 2.5}}
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}
    >
        <img src="https://staticg.sportskeeda.com/editor/2022/01/e7559-16419014949717-1920.jpg" />

        {isHovered && (

            
            <Fragment>
            
            <iframe width="878" height="496" src="https://www.youtube.com/embed/WHXq62VCaCM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="itemInfoCss">
                <div className="icons">
                    <PlayArrowIcon className="icon"/>
                    <AddIcon className="icon"/>
                    <ThumbUpOutlinedIcon className="icon"/>
                    <ThumbDownOutlinedIcon className="icon"/>
    
                </div>
    
                <div className='itemInfoTop'>
                        <span>1 hour 14min</span>
                        <span className="limitCss">+16</span>
                        <span>1999</span>
                
                </div>
    
                <div className="desc">
                Deserunt sit laborum incididunt nulla eiusmod pariatur reprehenderit et aliqua est deserunt. Lorem sit aute minim in laboris aliqua esse consequat ad anim deserunt non ea. Adipisicing nulla consectetur sit ea esse sint. Esse elit dolore nisi voluptate cupidatat in commodo excepteur occaecat cupidatat incididunt dolore deserunt fugiat. 
                
                </div>
    
                <div className='genre'>Action
                </div>
    
            
            </div>
            </Fragment>

        )}

    
    </div>
  );
}
