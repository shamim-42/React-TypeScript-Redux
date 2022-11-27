import React from "react";
import { useFetchCharectersQuery } from "../../features/rickAndMorty/charecterAPI";
import CharacterCard from "./character-card";

const CharacterGrid = () => {
  const { data, error, isLoading } = useFetchCharectersQuery("1");

  return (
    <div className="characterGrid">
      {data &&
        data.results.length > 0 &&
        data.results.map((item) => (
          <CharacterCard key={item.id} character={item} />
        ))}
    </div>
  );
};

export default CharacterGrid;
