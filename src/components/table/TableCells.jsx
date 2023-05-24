import PropTypes from 'prop-types';
import cellContent from './cellContentCreator';

function TableCells({ data }) {
  const keys = Object.keys(data);
  return (
    <>
      {
        keys.map((key, index) => (
          <td
            key={`td${index + 1}`}
            className="text-center border"
          >
            {cellContent(key, data[key])}
          </td>
        ))
      }
    </>
  );
}

const dataShape = {
  tagName: PropTypes.string.isRequired,
  attributes: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

TableCells.propTypes = {
  data: PropTypes.shape(dataShape).isRequired,
};

export default TableCells;
