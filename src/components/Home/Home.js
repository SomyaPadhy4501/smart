import React from 'react'
import a from "../Home/fox.jpg"
import './Home.css'
import b from "../Home/text.png"
import c from "../Home/pimg.jpg"
import d from "../Home/help.png"

const Home = () => {
  return (
    <>
    <div className='fox'><img src={a} alt="fox" /></div>
    <div className='txt'><img src={b} alt="text" /></div>
    <div className='ab'>An open and anonymous complaint portal</div>
    <div className='pm'><img src={c} alt="person img" /> <div className='gs'>“Your every report counts. Be Vigilant.<br />   Be Humane“</div></div>
    <button className='cmp'>Register complaint</button>
    <div className='hlp'><img src={d} alt="help img" /></div>

    </>
  )
}

export default Home