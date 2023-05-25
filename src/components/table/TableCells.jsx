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
            text-center border
            p-2
            [&:nth-child(2)]:break-all
            [&:nth-child(3)]:text-justify
            last:md:w-[10%]
            last:sm:w-[20%]
            last:max-sm:w-[25%]
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
