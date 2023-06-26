import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.wrapper__button}>
            {options.map((item, index) => {
                return (
                    <button
                        key={index}
                        onClick={onLeaveFeedback}
                        className={css.button}
                    >
                        {item}
                    </button>
                );
            })}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
