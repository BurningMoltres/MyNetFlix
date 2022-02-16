import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
export default function Feature({type}) {
  return (
    <div className='featureCss'>
      {type && (
        <div className="categoryCss">
          <span>{type==="movie" ? "Movies":"Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

    <img src="https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
     alt="Netflix Poster"/>

    <div className='infoCss'>
        <img src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="mariImage"/>
    
        <span className='descriptionCss'> 
          
        Deserunt adipisicing et ut anim duis velit tempor exercitation ex consectetur veniam ullamco. Eu voluptate aliqua reprehenderit sunt sit. Duis culpa eiusmod dolor officia Lorem laboris eu sit ex Lorem eiusmod irure.
      Est eu consequat occaecat elit et irure nostrud sint. Est ullamco amet ex proident.
       Excepteur est laborum in ex fugiat adipisicing eu occaecat anim deserunt.
        
        </span>

      <div className="buttonCss"> 
        <button className="play"><PlayArrowIcon/> <span>Play</span> </button>
        
       
        <button className="more"><InfoOutlinedIcon/><span>Info</span> </button>
          
          
      </div>


    </div>

    </div>
  )
  
}
