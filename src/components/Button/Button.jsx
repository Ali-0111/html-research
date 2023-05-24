import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateStateCode } from '../../Redux/codeSlice';

export default function Button({ content }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (code) => {
    dispatch(updateStateCode(code));
    navigate('/code');
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
