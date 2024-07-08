"use client";
import GlobalChip from "@/components/GlobalChip";
import QuickGuide from "@/components/QuickGuide";
import ReviewScroll from "@/components/ReviewScroll";
import ScrollableComponent from "@/components/ScrollableComponent";
import { Box, Container } from "@mui/material";
import React from "react";

const QuickGuidSection = () => {
    return (
        <div>
            <Container>
                <QuickGuide />
            </Container>
        </div>
    );
};

export default QuickGuidSection;
