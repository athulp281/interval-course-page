"use client";
import Wave from "@/components/Wave";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <>
            <Box sx={{ transform: "rotate(180deg)" }}>
                <Wave />
            </Box>

            <Box sx={{ backgroundColor: "#f0f4ff", pb: 3 }}>
                <Container sx={{ display: "flex", justifyContent: "center" }}>
                    <Stack direction={"row"} spacing={13} pt={3}>
                        <Box mt={8}>
                            <Typography
                                sx={{
                                    fontSize: 20,
                                    fontWeight: "bolder",
                                    textAlign: "left",
                                    fontFamily: "Bitter, serif",
                                }}
                            >
                                About
                            </Typography>
                            <Box>
                                <Stack direction={"column"} spacing={2}>
                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            textAlign: "left",
                                            fontFamily: "Bitter, serif",
                                        }}
                                    >
                                        Company
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            textAlign: "left",
                                            fontFamily: "Bitter, serif",
                                        }}
                                    >
                                        DEIB Statement
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            textAlign: "left",
                                            fontFamily: "Bitter, serif",
                                        }}
                                    >
                                        Careers
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            textAlign: "left",
                                            fontFamily: "Bitter, serif",
                                        }}
                                    >
                                        Blog
                                    </Typography>
                                </Stack>
                            </Box>
                        </Box>
                        {/* ---------------------------------------------- */}
                        <Box mt={8}>
                            <Typography
                                sx={{
                                    fontSize: 20,
                                    fontWeight: "bolder",
                                    textAlign: "left",
                                    fontFamily: "Bitter, serif",
                                }}
                            >
                                Learn 
                            </Typography>
                            <Box>
                                <Stack direction={"column"} spacing={2}>
                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            textAlign: "left",
                                            fontFamily: "Bitter, serif",
                                        }}
                                    >
                                        Browse Classes
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            textAlign: "left",
                                            fontFamily: "Bitter, serif",
                                        }}
                                    >
                                        Tutoring
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            textAlign: "left",
                                            fontFamily: "Bitter, serif",
                                        }}
                                    >
                                        See All Classes
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            textAlign: "left",
                                            fontFamily: "Bitter, serif",
                                        }}
                                    >
                                        Explore Categories
                                    </Typography>
                                </Stack>
                            </Box>
                        </Box>
                        {/* ----------------------------------------- */}
                        <Box mt={8}>
                            <Typography
                                sx={{
                                    fontSize: 20,
                                    fontWeight: "bolder",
                                    textAlign: "left",
                                    fontFamily: "Bitter, serif",
                                }}
                            >
                                Teach 
                            </Typography>
                            <Box>
                                <Stack direction={"column"} spacing={2}>
                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            textAlign: "left",
                                            fontFamily: "Bitter, serif",
                                        }}
                                    >
                                        Independent Teachers
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            textAlign: "left",
                                            fontFamily: "Bitter, serif",
                                        }}
                                    >
                                        Organizations
                                    </Typography>
                                </Stack>
                            </Box>
                        </Box>
                        {/* -------------------------------- */}
                        <Box mt={8}>
                            <Typography
                                sx={{
                                    fontSize: 20,
                                    fontWeight: "bolder",
                                    textAlign: "left",
                                    fontFamily: "Bitter, serif",
                                }}
                            >
                                Support 
                            </Typography>
                            <Box>
                                <Stack direction={"column"} spacing={2}>
                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            textAlign: "left",
                                            fontFamily: "Bitter, serif",
                                        }}
                                    >
                                        Help
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            textAlign: "left",
                                            fontFamily: "Bitter, serif",
                                        }}
                                    >
                                        Safety
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            textAlign: "left",
                                            fontFamily: "Bitter, serif",
                                        }}
                                    >
                                        CA Privacy
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            textAlign: "left",
                                            fontFamily: "Bitter, serif",
                                        }}
                                    >
                                        Learner Privacy
                                    </Typography>
                                </Stack>
                            </Box>
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Box
                sx={{
                    background: "linear-gradient(to right, #822880, #20244d)",
                    padding: 2,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Typography
                    sx={{
                        fontSize: 15,
                        textAlign: "left",
                        fontFamily: "Bitter, serif",
                        color: "white",
                    }}
                >
                    © 2024 Interval Learning Platform
                </Typography>
            </Box>
        </>
    );
};

export default Footer;
