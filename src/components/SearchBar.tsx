import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    if (search) {
      navigate(`/search/${search}`);
      setSearch(" ");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        px: 2,
        py: 1,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: "5px", color: "red" }}
        onClick={(e) => e.preventDefault}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
