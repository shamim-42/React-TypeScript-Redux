import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { getDarkMood } from "../../features/rickAndMorty/charecterSlice";
import SearchBar from "../search-bar/search-bar";
import SidebarFilter from "../filter-bar";
import CharacterGrid from "../characters";
interface TitleProps {
  title: string;
  color: string;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit"
    | undefined;
  align: "right" | "left" | "inherit" | "center" | "justify" | undefined;
}

export const Title: React.FC<TitleProps> = ({
  title,
  color,
  variant,
  align,
}) => {
  return (
    <Typography variant={variant} gutterBottom align={align} sx={{ color }}>
      {title}
    </Typography>
  );
};

export default function CharacterLayout() {
  const darkMoodStatus = useSelector(getDarkMood);

  return (
    <Box sx={{ flexGrow: 1, height: "100%", }}>
      <Grid container>
        <Grid item xs={12}>
          <Title
            variant="h3"
            align="center"
            title="Characters"
            color={darkMoodStatus ? "#9e9e9e" : "primary"}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid
          item
          xs={8}
          md={8}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <SearchBar
            label="character-search"
            placeholder="Search characters"
            color={darkMoodStatus ? "#9e9e9e" : "primary"}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: "1.25rem" }}>
        <Grid item xs={12} md={3}>
          <SidebarFilter />
        </Grid>
        <Grid item xs={12} md={9}>
           <CharacterGrid />
        </Grid>
      </Grid>
    </Box>
  );
}
