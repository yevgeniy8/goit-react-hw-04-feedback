import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

import css from './App.module.css';

export class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    };

    handleChangeFeedback = event => {
        this.setState(prevState => {
            return {
                [event.target.textContent]:
                    prevState[event.target.textContent] + 1,
            };
        });
    };

    render() {
        return (
            <div className={css.wrapper}>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={this.handleChangeFeedback}
                    />
                </Section>

                <Section title="Statistics">
                    {this.countTotalFeedback() ? (
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                    ) : (
                        <Notification message="There is no feedback"></Notification>
                    )}
                </Section>
            </div>
        );
    }
}
