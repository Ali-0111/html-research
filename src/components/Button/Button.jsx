import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updateStateCode } from '../../Redux/codeSlice';

const buttonSetup = {
  demo: {
    label: 'Test',
    action: (dispatch, navigate, code) => {
      dispatch(updateStateCode(code));
      navigate('/code');
    },
  },
  backHome: {
    label: 'Back',
    action: (_, navigate) => {
      navigate('/');
    },
  },
  copy: {
    label: 'Get Codes',
    action: () => {
      console.log('I copied code');
    },
  },
  next: {
    label: 'Online Compiler >>',
    action: () => {
      console.log('I open compiler');
    },
  },
};

export default function Button({ name, code }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const buttonSelected = buttonSetup[name];
  const { action } = buttonSelected;

  const handleClick = () => {
    action(dispatch, navigate, code);
  };

  return (
    <button
      type="button"
      className="border border-slate-300 py-[0.5px] px-4 hover:bg-slate-600/40 hover:scale-[1.1] hover:text-white"
      onClick={handleClick}
    >
      {buttonSelected.label}
    </button>
  );
}

Button.defaultProps = {
  code: '',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string,
};
