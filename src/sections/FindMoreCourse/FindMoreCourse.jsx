"use client";

import {
    Box,
    Container,
    TextField,
    Typography,
    InputAdornment,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import WaveComponent from "@/components/WaveComponent";
import ScrollableComponent from "@/components/ScrollableComponent";
import SearchIcon from "@mui/icons-material/Search";

const FindMoreCourse = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const data = [
        { id: 1, name: "Test Course" },
        { id: 2, name: "Test Course" },
        { id: 3, name: "Test Course" },
        { id: 4, name: "Test Course" },
        { id: 5, name: "Test Course" },
    ];

    const theme = createTheme({
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        borderRadius: "100px",
                        backgroundColor: "white",
                    },
                    notchedOutline: {
                        border: "none",
                    },
                },
            },
        },
    });

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    pt: 20,
                    pb: 4,
                    overflow: "hidden",
                    "::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background:
                            "linear-gradient(to right, #822880, #20244d)",
                        clipPath:
                            'path("M0,100 Q150,50 300,100 T600,100 T900,100 T1200,100 T1500,100 T1800,100 V1500 H0 Z")',
                    },
                }}
            >
                <Container>
                    <Typography
                        sx={{
                            fontSize: 30,
                            fontWeight: "bolder",
                            textAlign: "left",
                            fontFamily: "Bitter, serif",
                            position: "relative",
                            pb: 1,
                            color: "white",
                        }}
                    >
                        Find more classes
                    </Typography>
                    <Box>
                        <ThemeProvider theme={theme}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Search for any course"
                                sx={{
                                    borderRadius: 10,
                                    backgroundColor: "white",
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </ThemeProvider>
                    </Box>
                    <Box pt={2} pb={2}>
                        <Typography
                            sx={{
                                fontSize: 20,
                                fontWeight: "bolder",
                                textAlign: "left",
                                fontFamily: "Bitter, serif",
                                position: "relative",
                                color: "white",
                            }}
                        >
                            Popular searches
                        </Typography>
                    </Box>
                    <Box position={"relative"}>
                        {mounted && <ScrollableComponent items={data} />}
                    </Box>
                </Container>
            </Box>
            <WaveComponent />
        </>
    );
};

export default FindMoreCourse;
