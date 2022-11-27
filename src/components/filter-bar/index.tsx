import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import {
  filterCharacterBy,
  FilterCharecterBy,
  getDarkMood,
  getFilterCharacterBy,
} from "../../features/rickAndMorty/charecterSlice";
import { Title } from "../layout/character-layout";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ClearFiltersButton({ color }: { color: string }) {
  const dispatch = useDispatch();
  const activeFilter = useSelector(getFilterCharacterBy);


  function clearFilters() {
    // Clear all filters
    dispatch(filterCharacterBy(FilterCharecterBy.ALIVE));

  }

  return (
    <Button variant="text" onClick={clearFilters} sx={{ color }} disabled={activeFilter === FilterCharecterBy.ALIVE}>
      Clear Filters
    </Button>
  );
}

function FilterButton({ color, status }: { color: string; status: string }) {
  const activeFilter = useSelector(getFilterCharacterBy);
  const dispatch = useDispatch();

  function onFilter() {
    dispatch(filterCharacterBy(status));
  }

  if (activeFilter === status) {
    return (
      <Button variant={"contained"} onClick={onFilter} sx={{ color: "#FFF" }}>
        {status}
      </Button>
    );
  }

  return (
    <Button variant={"outlined"} onClick={onFilter} sx={{ color }}>
      {status}
    </Button>
  );
}

const SidebarFilter: React.FC = () => {
  const darkMoodStatus = useSelector(getDarkMood);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #9e9e9e",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: ".875rem",
          boxSizing: "border-box",
        }}
      >
        <Title
          variant="h6"
          align="left"
          title="Filters"
          color={darkMoodStatus ? "#9e9e9e" : "primary"}
        />
        <ClearFiltersButton color={darkMoodStatus ? "#9e9e9e" : "primary"} />
      </div>
      <Accordion sx={{ backgroundColor: "transparent" }}>
        <AccordionSummary
          sx={{ backgroundColor: "transparent" }}
          expandIcon={
            <ExpandMoreIcon
              sx={{ color: darkMoodStatus ? "#9e9e9e" : "default" }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color={darkMoodStatus ? "#9e9e9e" : "default"}>
            Status
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "transparent",
            display: "flex",
            gap: ".25rem",
          }}
        >
          <FilterButton
            status="alive"
            color={darkMoodStatus ? "#9e9e9e" : "primary"}
          />
          <FilterButton
            status="dead"
            color={darkMoodStatus ? "#9e9e9e" : "primary"}
          />
          <FilterButton
            status="unknown"
            color={darkMoodStatus ? "#9e9e9e" : "primary"}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "transparent" }}>
        <AccordionSummary
          sx={{ backgroundColor: "transparent" }}
          expandIcon={
            <ExpandMoreIcon
              sx={{ color: darkMoodStatus ? "#9e9e9e" : "default" }}
            />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography color={darkMoodStatus ? "#9e9e9e" : "default"}>
            Species
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "transparent" }}>
          <Typography color={darkMoodStatus ? "#9e9e9e" : "default"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "transparent" }}>
        <AccordionSummary
          sx={{ backgroundColor: "transparent" }}
          expandIcon={
            <ExpandMoreIcon
              sx={{ color: darkMoodStatus ? "#9e9e9e" : "default" }}
            />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography color={darkMoodStatus ? "#9e9e9e" : "default"}>
            Gender
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "transparent" }}>
          <Typography color={darkMoodStatus ? "#9e9e9e" : "default"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default SidebarFilter;
