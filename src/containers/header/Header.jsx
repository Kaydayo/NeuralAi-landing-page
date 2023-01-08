import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Lets Revolutionize the way we work with AI</h1>
        <p>Our advanced AI platform helps businesses increase efficiency and make better decisions. Learn how we can help your company succeed.</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='your email address' />
          <button type='button'> Get Started</button>

        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access in the last 24 hours</p>

        </div>
      </div>
       <div className='gpt3__header-image'>
          <img src={ai} alt="ai" />

        </div>
    </div>
  )
}

export default Header