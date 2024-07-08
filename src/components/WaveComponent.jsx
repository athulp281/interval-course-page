import { Box } from "@mui/material";
import React from "react";

const WaveComponent = () => {
    return (
        <Box
            sx={{
                position: "relative",
                pt: 18,
                // pb: 4,
                overflow: "hidden",
                "::before": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "150px", // Adjust the height of the curve projection
                    background: "linear-gradient(to right, #822880, #20244d)",
                    transform: "rotateX(180deg)",
                    clipPath:
                        'path("M0,100 Q150,50 300,100 T600,100 T900,100 T1200,100 T1500,100 T1800,100 V1500 H0 Z")', // Adjust the path to create your desired curve
                },
            }}
        ></Box>
    );
};

export default WaveComponent;
