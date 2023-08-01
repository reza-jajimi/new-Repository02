import { Box, Typography } from "@mui/material";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'products page',
  }

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Typography align="center" variant="h4">
        header
      </Typography>
      <Box>{children}</Box>
      <Typography align="center" variant="h4">
        footer
      </Typography>
    </Box>
  );
};

export default layout;
