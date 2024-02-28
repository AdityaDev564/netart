// import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoGlobe } from "react-icons/io5";
import { ImPhone } from "react-icons/im"

import './App.css'

function App() {
  

  return (
    <div className="main-body">
      <nav>
        <img src="../public/assets/logo.png" alt="logo" />
      </nav>
      <main>
        <div className='prize-image'>
          <img src="../public/assets/1.png" alt="prize" />
        </div>
        <div className='main-component'>
          <h3>C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
          <div className='main-content'>
            <div>
          <ul>
            
          <li>
            C.R.I&apos;s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
          </li>
          <li>
            C.R.I is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control device.
          </li>
          </ul>
          </div>
          <div className='prize-handing'>
            <img src="../public/assets/2.png" alt="prize" />
          </div>
          </div>
          <p>
            Government of India has awarded the <span className="bold-text"> &quot;National Energy Conservation Award 2018&quot;</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </main>
      <div className='achievement'>
        
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
      </div>
        
        <div className='list-content'>
          <div className='second-component'>
            <img src="../public/assets/3.png" alt="images" />
            <p className='second-text'>
              Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
            </p>
          </div>
            <div className='horizontal-line'>
              <hr />
            </div>
            

          <div className='segment-content'>
            
            <h3>
              C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
            </h3>
            <p>
              CHEMICALS & PROCESS <span className='vertical-line'> | </span>POWER <span className='vertical-line'> | </span> WATER & WASTE WATER <span className='vertical-line'> | </span> OILS & GAS <span className='vertical-line'> | </span> PHARMA <span className='vertical-line'> | </span> SUGARS & DISTILLERIES <span className='vertical-line'> | </span> PAPER & PULP <span className='vertical-line'> | </span> MARINE & DEFENCE <span className='vertical-line'> | </span> METAL & MINING <span className='vertical-line'> | </span> FOOD & BEVERAGE <span className='vertical-line'> | </span> PETROCHEMICAL & REFINERIES <span className='vertical-line'> | </span> SOLAR <span className='vertical-line'> | </span> BUILDING <span className='vertical-line'> | </span> HVAC <span className='vertical-line'> | </span> FIRE FIGHTING <span className='vertical-line'> | </span> AGRICULTURE & RESIDENTIAL
            </p>
          </div>
          
        </div>
        <footer>
          <div className="footer-element">
            {/* <FaPhoneAlt className="footer-icon"/>
             */}
              <ImPhone className="footer-icon phone-icon"/>
          <p>Toll Free 1800 200 1234</p>
          </div>
          <div className="footer-element">
            <FaFacebook className="footer-icon"/>
            <p>www.facebook.com/cripumps</p>
          </div>
          <div className="footer-element">
          <IoGlobe className="footer-icon"/>
          <p>www.crigroups.com</p>
          </div>
          
        </footer>
      
    </div>
  )
}

export default App
