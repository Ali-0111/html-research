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
            text-center py-[5px] border
            [&:nth-child(2)]:w-[20%]
            [&:nth-child(2)]:break-all
            [&:nth-child(3)]:text-justify
            last:sm:w-[15%]
            last:max-sm:w-[20%]
            last:max-[480px]:w-[25%]
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
