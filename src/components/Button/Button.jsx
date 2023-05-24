import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function Button({ content }) {
  const navigate = useNavigate();
  const handleClick = (code) => {
    console.log(code);
    navigate('/page-2');
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
