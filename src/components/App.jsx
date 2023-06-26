import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

import css from './App.module.css';
import { useState } from 'react';

export const App = () => {
    const [neutral, setNeutral] = useState(0);
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        return Math.round((good / countTotalFeedback()) * 100);
    };

    const handleChangeFeedback = event => {
        switch (event.target.textContent) {
            case 'good':
                setGood(prevState => {
                    return prevState + 1;
                });
                break;

            case 'neutral':
                setNeutral(prevState => {
                    return prevState + 1;
                });
                break;

            case 'bad':
                setBad(prevState => {
                    return prevState + 1;
                });
                break;

            default:
                break;
        }
    };

    return (
        <div className={css.wrapper}>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={['good', 'neutral', 'bad']}
                    onLeaveFeedback={handleChangeFeedback}
                />
            </Section>

            <Section title="Statistics">
                {countTotalFeedback() ? (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />
                ) : (
                    <Notification message="There is no feedback"></Notification>
                )}
            </Section>
        </div>
    );
};
