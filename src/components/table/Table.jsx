import TableHead from './TableHead';
import TableBody from './TableBody';

export default function Table() {
  return (
    <table className="w-full mt-3 py-2 bg-slate-50">

      <TableHead
        columns={
          ['TagName', 'Attributes', 'Description', 'Usage']
        }
      />
      <TableBody />
    </table>
  );
}
