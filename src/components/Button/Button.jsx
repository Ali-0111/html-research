import PropTypes from 'prop-types';

export default function Button({ code }) {
  const handleClick = (code) => {
    console.log(code);
  };

  return (
    <button
      type="button"
      className="border"
      onClick={() => handleClick(code)}
    >
      Live Demo
    </button>
  );
}

Button.propTypes = {
  code: PropTypes.string.isRequired,
};
