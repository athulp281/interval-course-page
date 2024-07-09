"use client";
import React, { useState, useEffect } from "react";
import { Box, Container, Stack } from "@mui/material";
import { styled } from "@mui/system";
import TitleComponent from "./TitleComponent";
import BasicBreadcrumbs from "./GlobalBreadcrumbs";
import LearnerAgeRadioButtons from "./LearnerAgeRadioButtons ";
import BannerImages from "./BannerImages";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../utils/theme/theme";
import Wave from "./Wave";
import BasicRating from "./Rating";

const Root = styled("div")({
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#f0f4ff",
    padding: "20px 0",
});

const StyledContainer = styled(Container)({
    zIndex: 1,
    position: "relative",
});

const Head = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Root>
                    <StyledContainer>
                        <Stack direction={"row"} spacing={2}>
                            <Box pt={7}>
                                {mounted && (
                                    <>
                                        <Box mb={1}>
                                            <BasicBreadcrumbs />
                                        </Box>
                                        <TitleComponent />
                                        <BasicRating />
                                        <LearnerAgeRadioButtons />
                                    </>
                                )}
                            </Box>
                            <Box>{mounted && <BannerImages />}</Box>
                        </Stack>
                    </StyledContainer>
                </Root>
            </ThemeProvider>

            <Wave />
        </>
    );
};

export default Head;
