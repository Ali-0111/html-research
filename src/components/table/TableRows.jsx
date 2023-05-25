import dataSet from '../../util/dataSet';
import TableCells from './TableCells';

export default function TableRows() {
  return (
    <>
      {
        dataSet.map((tagDetails, index) => (
          <tr
            key={`row${index + 1}`}
            className="row w-full"
          >
            <TableCells data={tagDetails} />
          </tr>
        ))
      }
    </>
  );
}
