import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header>
      <Box>
        <Image src="/umbreon-logo.png" alt="logo" width={200} height={100} />
        <h1>DevonDex</h1>
      </Box>
      <SearchBar />
    </header>
  );
};

export default Header;
