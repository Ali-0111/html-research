import PropTypes from 'prop-types';

export default function SearchField({ value, func }) {
  return (
    <input
      className="w-[90%] indent-1 outline-none"
      type="text"
      placeholder="Search..."
      required
      name="searchText"
      value={value}
      onChange={func}
    />
  );
}

SearchField.propTypes = {
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
