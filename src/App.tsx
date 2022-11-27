import React from "react";
import DrawerAppBar from "./components/layout";
import CharacterLayout from "./components/layout/character-layout";

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
