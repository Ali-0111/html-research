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
            className="
              first:w-[10%] last:w-[20%]
              [&:nth-child(2)]:w-[20%]
              [&:nth-child(2)]:break-all
              [&:nth-child(3)]:w-[50%]
              [&:nth-child(3)]:text-justify
              text-center py-[5px] border
            "
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
