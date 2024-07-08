"use client";

import FeaturedCoursCard from "@/components/FeaturedCoursCard";
import ScrollableComponent from "@/components/ScrollableComponent";
import WaveComponent from "@/components/WaveComponent";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const FeaturedCourse = () => {
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
                    <Box pb={4}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: 30,
                                fontWeight: "bolder",
                                fontFamily: "Bitter, serif",
                                color: "white",
                                position: "absolute",
                            }}
                        >
                            Our Featured Courses
                        </Typography>
                    </Box>
                    <Box sx={{ position: "relative" }}>
                        {mounted && <ScrollableComponent items={data} />}
                    </Box>
                    <Box paddingTop={4}>
                        <Grid
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                        >
                            {mounted &&
                                Array.from(Array(8)).map((_, index) => (
                                    <Grid item xs={2} sm={4} md={3} key={index}>
                                        <FeaturedCoursCard />
                                    </Grid>
                                ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <WaveComponent />
        </>
    );
};

export default FeaturedCourse;
