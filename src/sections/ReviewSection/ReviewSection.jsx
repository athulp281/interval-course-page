"use client";
import ReviewScroll from "@/components/ReviewScroll";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const ReviewSection = () => {
    return (
        <Container>
            <Box>
                <Typography
                    sx={{
                        fontSize: 30,
                        fontWeight: "bolder",
                        textAlign: "left",
                        fontFamily: "Bitter, serif",
                    }}
                >
                    Reviews for top Full Curriculum classes
                </Typography>
            </Box>
            <Box>
                <ReviewScroll />
            </Box>
        </Container>
    );
};

export default ReviewSection;
