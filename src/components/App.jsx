import { Component } from "react";
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { EmptyMessage } from './EmptyMessage/EmptyMessage'
import {Wrapper} from './Wrapper.styled'


export class App extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  
  handlerClick = (options) => {
    this.setState(prevState => ({
         [options]: prevState[options] + 1
    }))

  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return (good + neutral + bad);
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
     return  Math.round((good / totalFeedback) * 100);

   
  }

  render() {
    const { good, neutral, bad } = this.state
    const totalFeedbackClick = good + neutral + bad > 0;
    return (
 <Wrapper>
        <Section title='Please leave feedback'/>
        <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={this.handlerClick} />
        
        <Section title='Statistics'/>
          {totalFeedbackClick ? (
            <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
            )            
          : <EmptyMessage message='There is no feedback'/>

        }
      </Wrapper>
    );
  }
};
