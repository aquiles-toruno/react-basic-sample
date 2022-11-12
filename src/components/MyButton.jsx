import PropTypes from 'prop-types';

const MyButton = (props) => {
    return <button onClick={props.onClick}>{props.title}</button>
}

MyButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
}

export default MyButton;