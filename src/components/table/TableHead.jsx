import PropTypes, { string } from 'prop-types';

export default function TableHead({ columns }) {
  return (
    <thead>
      <tr>
        {columns.map((tableHead, i) => (
          <th
            key={`head${i + 1}`}
            className={`col${i + 1} py-2 border`}
          >
            {tableHead}
          </th>
        ))}
      </tr>
    </thead>
  );
}

TableHead.propTypes = {
  columns: PropTypes.arrayOf(string).isRequired,
};
