"use client";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const TitleComponent = () => {
    return (
        <div>
            <Box>
                <Box>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: 40,
                            fontWeight: "bolder",
                            textAlign: "left",
                            fontFamily: "Bitter, serif",
                        }}
                    >
                        Online full curriculum courses for kids & teens
                    </Typography>
                </Box>
                <Box sx={{ textAlign: "left", mt: 3 }}>
                    <Stack direction={"column"} spacing={1}>
                        <Box>
                            <Typography
                                component="span"
                                fontSize={16}
                                sx={{ fontFamily: "Bitter, serif" }}
                            >
                                🎒
                                <Box
                                    component="span"
                                    fontSize={16}
                                    fontWeight={"bolder"}
                                    sx={{ display: "inline-flex", mr: 0.5 }}
                                >
                                    Comprehensive full-year
                                </Box>
                                curriculums
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                component="span"
                                fontSize={16}
                                sx={{ fontFamily: "Bitter, serif" }}
                            >
                                📚 Subjects for{" "}
                                <Box
                                    component="span"
                                    fontSize={16}
                                    fontWeight={"bolder"}
                                    sx={{ display: "inline-flex", mr: 0.5 }}
                                >
                                    all grade levels
                                </Box>
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                component="span"
                                fontSize={16}
                                sx={{ fontFamily: "Bitter, serif" }}
                            >
                                🏠{" "}
                                <Box
                                    component="span"
                                    fontSize={16}
                                    fontWeight={"bolder"}
                                    sx={{ display: "inline-flex", mr: 0.5 }}
                                >
                                    Homeschool-friendly
                                </Box>{" "}
                                and flexible scheduling
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </div>
    );
};

export default TitleComponent;
