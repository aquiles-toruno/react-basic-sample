import PropTypes from 'prop-types';

const MyLabel = (props) => {
    return <p>{props.text}</p>
}

MyLabel.propTypes = {
    text: PropTypes.string.isRequired
}

export default MyLabel;