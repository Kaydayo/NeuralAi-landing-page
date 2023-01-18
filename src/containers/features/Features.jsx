import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: 'Real-time Feedback',
    text:'Our AI technology provides instant feedback to users, allowing for immediate adjustments and improvements in their interactions with the system'
  },
  {
    title: 'Increased Efficiency',
    text:'Our AI system is designed to automate repetitive tasks, leading to increased productivity and efficiency for businesses'
  },
   {
    title: 'Enhanced User Experience',
    text:'Our AI-powered platform provides personalized and intuitive experiences, resulting in higher levels of user satisfaction and engagement'
  },
    {
    title: 'Advanced Analytics',
    text:'Our AI system offers advanced analytics capabilities, giving organizations valuable insights into their operations and performance'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Feature Is Now And You Just Need To Realize It. Step Into The Future Today And Make It Happen</h1>
        <p>Request Early Access tO Get STarted</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
            <Feature title={item.title} key={item.title+index} text={item.text}/>
          ))}
      </div>
   </div>
  )
}

export default Features