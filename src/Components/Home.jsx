import React from 'react'
import { FaDesktop,FaUser,FaRecycle} from "react-icons/fa";
import {BsTrophyFill,BsFillBagDashFill,BsFillCarFrontFill,BsTwitter} from "react-icons/bs";



const Home = () => {
  return (
    <>
    <div className='home'>
        <div className="main">
        <h1>Your Awesome Business Theme</h1>
         <div className='pDiv'>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nostrum quidem reiciendis,</p>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quam.</p>
         </div>
        
        <button>READ MORE</button>
        </div>
    </div>
    <div className="home2">
        <h1>Our Features</h1>
        <div className="cards">
        <div className="responsive">
            <div className='divChild'>
            <FaDesktop/>
            </div>
            <h3>
                Fully Responsive
            </h3>
            <p>Lorem, ipsum dolor sit amet consectetur </p> 
            <p>adipisicing elit. Aspernatur accusamus</p>
            <p>adipisicing elit. Aspernatur</p>
            <a href="#">Read More</a> 
        </div>
        <div className="author">
            <div className='divChild'>
        <FaUser/>
         
            </div>
            <h3>Trusted Author</h3>
            <p>Lorem, ipsum dolor sit amet consectetur </p> 
            <p>adipisicing elit. Aspernatur accusamus</p>
            <p>adipisicing elit. Aspernatur</p> 
            <a href="">Read More</a>
        </div>
        <div className="elements">
            <div className='divChild'>
                <FaRecycle/>
            </div>
            <h3>Reusable Element</h3>
            <p>Lorem, ipsum dolor sit amet consectetur </p> 
            <p>adipisicing elit. Aspernatur accusamus</p>
            <p>adipisicing elit. Aspernatur</p> 
            <a href="">Read More</a>
        </div>
        </div>
        
    </div>
    <div className="home3">
        <div className='card1'>
            <BsTrophyFill/>
            <p className='num'>22</p>
            <p>Awards Winning</p>
        </div>
        <div className='card2'>
            <BsFillBagDashFill/>
            <p className='num'>145</p>
            <p>Finished Projrcts</p>
        </div>
        <div className='card3'>
            <BsFillCarFrontFill/>
            <p className='num'>349</p>
            <p>Product Sold</p>
        </div>
        <div className='card4'>
            <BsTwitter/>
            <p className='num'>2446</p>
            <p>Twitter fans</p>
        </div>
    </div>
    </>
  )
}

export default Home