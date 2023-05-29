import PropTypes from 'prop-types';

export default function CodeRunner({ code }) {
  const htmlString = code;
  return (
    <div className="border-2 w-[50%] h-[100%] px-3">
      <h1 className="text-center text-blue-800">
        See Your Code Result Here:
      </h1>
      <div className="my-3" dangerouslySetInnerHTML={{ __html: htmlString }} />
    </div>
  );
}

CodeRunner.propTypes = {
  code: PropTypes.string.isRequired,
};
