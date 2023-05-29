import { useSelector } from 'react-redux';
import TableCells from './TableCells';

export default function TableRows() {
  const { dataSet, filteredBySearch } = useSelector((store) => (store));

  const data = filteredBySearch[0] ? filteredBySearch : dataSet;
  return (
    <>
      {
        data.map((tagDetails, index) => (
          <tr
            key={`row${index + 1}`}
            className="row"
          >
            <TableCells data={tagDetails} />
          </tr>
        ))
      }
    </>
  );
}
