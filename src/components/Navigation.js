import { useState } from "react";
import brand from "../assets/icons/dictionary.svg";
import moon from "../assets/icons/moon.svg";

const Navigation = () => {

     const [btn, setBtn] = useState(false);

     const handleClick = () => {
          setBtn(btn => !btn)
     }

     let toggleClass = btn ? "active" : null;
     return(
          <div className="navbar">
               <nav>
                    <img src={brand} alt="navbard-brand" />
                    <div className="nav-options">
                         <select>
                              <option>Serif</option>
                              <option>Non-Serif</option>
                         </select>
                         <div onClick={handleClick} className={`toggle ${toggleClass}`}>
                              <i className="indicator"></i>
                         </div>
                         <img src={moon} alt="moon-icon" />
                    </div>
               </nav>
          </div>
     );
}

export default Navigation;