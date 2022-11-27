import React from "react";
import { useFetchCharectersQuery } from "../../features/rickAndMorty/charecterAPI";
import CharacterCard from "./character-card";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  changePage,
  getDarkMood,
} from "../../features/rickAndMorty/charecterSlice";
import PaginationItem from "@mui/material/PaginationItem";
import { CharecterType } from "../../features/rickAndMorty/types";
import useGetAllCharacters from "../../lib/hooks/useGetAllCharacter";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

const CharacterGrid = () => {
  const darkMoodStatus = useSelector(getDarkMood);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetAllCharacters();

  function handlePaginationChange(
    event: React.ChangeEvent<unknown>,
    page: number
  ) {
    dispatch(changePage(page));
  }

  if (isLoading) {
    return (
      <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
        <CircularProgress color="inherit" />
      </Stack>
    );
  }

  if (error) {
    return (
      <Stack sx={{ width: "100%", height: "100%" }} spacing={2}>
        <Alert severity="error">
            "There is nothing here."
        </Alert>
      </Stack>
    );
  }

  return (
    <>
      <div className="characterGrid">
        {data &&
          data.results.length > 0 &&
          data.results.map((item: CharecterType) => (
            <CharacterCard key={item.id} character={item} />
          ))}
      </div>
      <div className="paginationWrapper">
        {data && Boolean(data.info.pages) ? (
          <Pagination
            count={data.info.pages!}
            variant="outlined"
            onChange={handlePaginationChange}
            renderItem={(item) => (
              <PaginationItem
                sx={{ color: darkMoodStatus ? "#9e9e9e" : "default" }}
                {...item}
              />
            )}
          />
        ) : null}
      </div>
    </>
  );
};

export default CharacterGrid;
