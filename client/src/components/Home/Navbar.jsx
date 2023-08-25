import React from "react";
import { navData } from "../../constants/data";
import { Box, styled, Typography } from "@mui/material";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "55px 130px 0 130px",
  justifyContent: "space-between",
  // overflow: "overlay",
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    margin: 0,
  },
}));

const Container = styled(Box)`
  padding: 16px 18px;
  text-align: center;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const Navbar = () => {
  return (
    <Box style={{ backgroundColor: "#fff" }}>
      <Component>
        {navData.map((data) => (
          <Container>
            <img src={data.url} alt={data.text} style={{ width: 64 }} />
            <Text>{data.text}</Text>
          </Container>
        ))}
      </Component>
    </Box>
  );
};

export default Navbar;
