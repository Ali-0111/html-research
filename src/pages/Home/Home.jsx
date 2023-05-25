import SearchBar from '../../components/searchBar';
import Table from '../../components/table/Table';

export default function Home() {
  return (
    <section className="general-layout max-h-full flex flex-col justify-center items-center bg-gray-100 pt-[1.2rem]">

      <SearchBar />
      <Table />
    </section>
  );
}
