import { useState } from "react";
// import {BsFillPlayCircleFill, BsFillPauseCircleFill} from 'react-icons/bs';
import search from "../assets/icons/search.svg";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


const Main = () => {
     // Handle Search
     const [ word, setWord ] = useState("");
     const [ icon, setIcon ] = useState(true);
     const handleInput = (e)=> {
          e.preventDefault();
          setWord(e.target.value);
          setIcon(false);
     }
     // Handle Search

     //Fetch Submitted Data
     // const [data, setData] = useState(null);
     // const [error, setError] = useState(null)
     const handleSubmit = (e) => {
          e.preventDefault();
          setWord("");
          fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
          .then( (res) => {
               return res.json();
          }
          )
          .then((actualData)=> {
               // setData(actualData);
               console.log(word);
               console.log(actualData);
          })

     }
     //Fetch Submitted Data

     return(
          
          <div className="wrapper">
               <Navigation />
               <h1>{ word }</h1>
               <form onSubmit={handleSubmit} className="form-group">
                    <input
                         onChange={handleInput}
                         value={word}
                         type="search"
                         className="form-control"
                         placeholder="Search for keyboard"
                    />
                    <button type="submit">
                         { icon && <img src={search} alt="search-icon" /> }
                    </button>
               </form>
               <div className="content">
                    <div className="card-header">
                        <div>
                              <h1>keyboard</h1>
                              <h2>/ˈkiːbɔːd/</h2>
                        </div>
                         <audio controls >
                              {/* <source src={item.phonetics[2].audio} type="audio/*" />     */}
                         </audio> 
                    </div>
                    <div className="card-body">
                         <div className="noun">
                              <p>noun</p><hr />
                         </div>
                         <div className="meaning">
                              <p>meaning</p>
                         </div>
                         <ul className="meaning-list">
                              <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
                              <li>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
                              <li>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li> 
                         </ul>     
                         <div className="synonyms">
                              <p>synonyms</p>
                              <p>electronic keyboard</p>
                         </div>
                         <div className="verb">
                              <p>verb</p><hr />
                         </div>
                         <div className="Meaning">
                              <ul><li>To type on computer keyboard</li></ul>
                              <p>"Keyboarding is the part of this job I hate the most."</p>
                         </div>
                         <hr />
                    </div>
               </div>
               <Footer />
          </div>
     );
}

export default Main;