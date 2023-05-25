import PropTypes from 'prop-types';

export default function SubmitButton({ picture, alt }) {
  return (
    <button
      className="w-[10%] flex justify-end"
      type="submit"
    >
      <img src={picture} alt={alt} />
    </button>
  );
}

SubmitButton.propTypes = {
  picture: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
