import PropTypes from 'prop-types';

export default function Button({ content }) {
  const handleClick = (code) => {
    console.log(code);
  };

  return (
    <button
      type="button"
      className="border"
      onClick={() => handleClick(content)}
    >
      Live Demo
    </button>
  );
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
};
