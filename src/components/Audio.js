import React, { useState, useRef, useEffect } from "react";
import {BsFillPlayCircleFill, BsFillPauseCircleFill} from 'react-icons/bs';
import audio from "../assets/audio-svgrepo-com.svg";

export default function Player() {

     const [data, setData] = useState(null);
     useEffect(() => {
          fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
            .then((response) => response.json())
            .then((actualData) => {
               setData(actualData);
               console.log(actualData);
            })
            .catch((err) => {
              console.log(err.message);
            });
        }, []);

     // Handle Audio Player
     const audioElem = useRef();
     const [isPlaying, SetIsPlayeing] = useState(false);
     const handleAudio = () => {
          // SetIsPlayeing(true);
          SetIsPlayeing(!isPlaying);
     }
     useEffect(() => {
          if (isPlaying) {
            audioElem.current.play();
          }
          else {
            audioElem.current.pause();
          }
        }, [isPlaying])
     // Handle Audio Player
     return(
        <div className="audio-player">
          {data && data.map((item) => (
          <div key={item.id}>
               <img  src={audio} alt="audio-icon" />
               {isPlaying ? <BsFillPauseCircleFill className='btn_action pp' onClick={handleAudio}/> : <BsFillPlayCircleFill className='btn_action pp' onClick={handleAudio}/>}
               <audio src={item.phonetics[0].audio} audio={audioElem}  />

               {/* { isPlaying && 
               <audio audioRef={audioRef} controls>
                    <source src={item.phonetics[0].audio} type="audio/mp3"/>
               </audio>
               } */}
                 {/* <div className="audio-player">
                         {isPlaying ? 
                              <BsFillPauseCircleFill
                                   className='img' onClick={handleAudio}/> :
                              <BsFillPlayCircleFill 
                                   className='img' onClick={handleAudio}
                              />
                         }
                         { isPlaying && 
                         <audio audioRef={audioRef} controls>
                              <source src={item.phonetics[0].audio} type="audio/mp3"/>
                         </audio>
                         }
                    </div> */}
          </div>
          ))}
        </div>
     )
}