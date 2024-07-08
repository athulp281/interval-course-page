import React, { useRef, useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArticleCard from "./ArticleCard";

const ArticleScroll = ({ items }) => {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } =
                    scrollRef.current;
                setCanScrollLeft(scrollLeft > 0);
                setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
            }
        };

        const scrollElement = scrollRef.current;
        if (scrollElement) {
            scrollElement.addEventListener("scroll", handleScroll);
            handleScroll(); // Initial check
        }

        return () => {
            if (scrollElement) {
                scrollElement.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                left: scrollRef.current.scrollLeft - 400,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                left: scrollRef.current.scrollLeft + 400,
                behavior: "smooth",
            });
        }
    };

    return (
        <Box display="flex" alignItems="center">
            {mounted && canScrollLeft && (
                <IconButton onClick={scrollLeft} sx={{ color: "#7e4d8b" }}>
                    <ArrowBackIosIcon />
                </IconButton>
            )}
            <Box
                ref={scrollRef}
                sx={{
                    display: "flex",
                    overflowX: "auto",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    transition: "all 0.5s ease",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                    "& > *": {
                        transition: "transform 0.5s ease",
                    },
                }}
            >
                {Array.from(Array(12)).map((_, index) => (
                    <Box key={index} padding={2}>
                        <ArticleCard />
                    </Box>
                ))}
            </Box>
            {mounted && canScrollRight && (
                <IconButton onClick={scrollRight} sx={{ color: "#7e4d8b" }}>
                    <ArrowForwardIosIcon />
                </IconButton>
            )}
        </Box>
    );
};

export default ArticleScroll;
