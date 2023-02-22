import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Box>
        <Image src="/umbreon-logo.png" alt="logo" width={200} height={100} />
        <h1>DevonDex</h1>
        <p>site en construction</p>
      </Box>
    </header>
  );
};
export default Header;
