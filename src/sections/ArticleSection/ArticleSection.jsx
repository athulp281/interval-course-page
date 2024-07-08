"use client";
import ArticleScroll from "@/components/ArticleScroll";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const ArticleSection = () => {
    return (
        <Container>
            <Typography
                sx={{
                    fontSize: 30,
                    fontWeight: "bolder",
                    textAlign: "left",
                    fontFamily: "Bitter, serif",
                }}
            >
                Recommended articles
            </Typography>
            <Box>
                <ArticleScroll />
            </Box>
        </Container>
    );
};

export default ArticleSection;
