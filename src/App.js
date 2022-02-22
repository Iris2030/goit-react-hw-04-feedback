
import { useState } from "react";
import "./App.css";
import Section from "./Components/Section/Section";
import Notification from "./Components/Notification/Notification";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Statistics from "./Components/Statistics/Statistics";
import s from "./Components/Section/Section.module.css";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);



  const calculetTotalFeedback = () => {
    return bad + good + neutral
  };

   const countPositiveFeedbackPercentage = () =>{
      return Math.round((good / calculetTotalFeedback()) * 100)
    }

  function onLeaveFeedback(options) {
    switch (options) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;

      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;

      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  }

  const total = calculetTotalFeedback();

  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {!total && <Notification message={"There is no feedback"} />}
        {total >= 1 && (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={calculetTotalFeedback()}
          feadback={countPositiveFeedbackPercentage()}
        />
        )} 
      </Section>
    </div>
  );
}
