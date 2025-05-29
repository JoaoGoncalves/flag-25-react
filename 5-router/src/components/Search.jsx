import { useSearchParams } from "react-router-dom";


export default function Search() {

    let [params] = useSearchParams();


  return (
    <>
    <h1>Search</h1>
    <h2> {params.get('nome')} - {params.get('apelido')}</h2>
    </>
  );
}
