import { StatisticsTitle } from './Statistics.styled';


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
      <div>
        <StatisticsTitle>Good:{good}</StatisticsTitle>
        <StatisticsTitle>Neutral:{neutral}</StatisticsTitle>
        <StatisticsTitle>Bad:{bad}</StatisticsTitle>
        <StatisticsTitle>Total:{total}</StatisticsTitle>
        <StatisticsTitle>Positive feedback: {positivePercentage} %</StatisticsTitle>
      </div>
    );
};