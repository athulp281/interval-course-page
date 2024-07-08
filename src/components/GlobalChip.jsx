import { Box, Chip, Typography } from "@mui/material";
import React from "react";

const GlobalChip = ({ item }) => {
    return (
        <Box padding={1.3}>
            <Chip
                key={item.id}
                size="medium"
                sx={{
                    height: 45,
                    borderRadius: 10,
                    bgcolor: "#f0f0f0",
                    overflow: "hidden",
                    minWidth: 100,
                    ":hover": {
                        border: 1,
                        borderColor: "#7e4d8b",
                    },
                }}
                label={
                    <Typography
                        sx={{
                            fontWeight: "bolder",
                            color: "black",
                            fontFamily: "Bitter, serif",
                        }}
                    >
                        {item.name}
                    </Typography>
                }
            />
        </Box>
    );
};

export default GlobalChip;
