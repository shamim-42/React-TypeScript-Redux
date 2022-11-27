import { Typography } from "@mui/material";
import React from "react";
import DrawerAppBar from "./components/layout";
import CharacterLayout from "./components/layout/character-layout";
import Charecters from "./features/rickAndMorty/Charecters";

function App() {
  return (
    <>
      <DrawerAppBar>
        <CharacterLayout />
      </DrawerAppBar>
    </>
  );
}

export default App;
