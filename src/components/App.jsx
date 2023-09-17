// import { Component, useState } from "react";
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { EmptyMessage } from './EmptyMessage/EmptyMessage'
import { Wrapper } from './Wrapper.styled'
import {useState} from 'react'


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral','bad'] 


  const  handlerClick = option => {
  switch (option) {
    case "good":
      setGood(good + 1)
      break;
    case "bad":
      setBad(bad + 1)
      break;
    case "neutral":
      setNeutral(neutral+1)
      break;
          default: {
        console.log('There is no such option');
      }
  }

  }

 const countTotalFeedback =() => {
    return (good + neutral + bad);
  }

  const  countPositiveFeedbackPercentage =() => {
    const totalFeedback = good + neutral + bad;
     return  Math.round((good / totalFeedback) * 100);

   
  }

  const totalFeedbackClick = good + neutral + bad > 0;


  return (
 <Wrapper>
        <Section title='Please leave feedback'/>
        <FeedbackOptions options={options} onLeaveFeedback={handlerClick} />
        
        <Section title='Statistics'/>
          {totalFeedbackClick ? (
            <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
            )            
          : <EmptyMessage message='There is no feedback'/>

        }
      </Wrapper>
    );
  
};
