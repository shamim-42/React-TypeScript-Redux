import { useSelector } from "react-redux";
import {
  getCurrentPage,
  getFilterCharacterBy,
  getSearchKeyword,
} from "../../features/rickAndMorty/charecterSlice";
import { useMemo } from "react";
import { useFetchCharectersQuery } from "../../features/rickAndMorty/charecterAPI";
function useGetAllCharacters() {
  const activeFilter = useSelector(getFilterCharacterBy);
  const currentPage = useSelector(getCurrentPage);
  const searchTerm = useSelector(getSearchKeyword);

  const characterQuery = useMemo(() => {
    let query = `page=${currentPage}&status=${activeFilter}`;
    if (searchTerm && searchTerm.length > 2) query += `&name=${searchTerm}`;

    return query;
  }, [activeFilter, currentPage, searchTerm]);
  return useFetchCharectersQuery(characterQuery);
}

export default useGetAllCharacters;
