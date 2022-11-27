import React, { InputHTMLAttributes } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { changeSearchKeyword } from "../../features/rickAndMorty/charecterSlice";
export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  color: string;
}
const SearchBar: React.FC<SearchBarProps> = ({ label, placeholder, color }) => {
  const dispatch = useDispatch();
  const rootInputStyles = {
    fieldset: {
      border: `1px solid ${color} !important`,
    },
    "&:hover fieldset": {
      border: `1px solid ${color} !important`,
    },
    "&:focus-within fieldset, &:focus-visible fieldset": {
      border: `1px solid ${color}!important`,
    },
  };

  const handleSearchChange = (event: any) => {
    dispatch(changeSearchKeyword(event.target.value));
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 720,
      }}
    >
      <TextField
        fullWidth
        placeholder={placeholder}
        id={label}
        sx={rootInputStyles}
        onChange={handleSearchChange}
        InputProps={{
          sx: { color: color },
        }}
      />
    </Box>
  );
};

export default SearchBar;
