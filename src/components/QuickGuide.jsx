import { Box, Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";

const QuickGuide = () => {
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
        <div>
            <Box marginBottom={10}>
                <Box
                    sx={{
                        width: "100%",
                        bgcolor: "#f0f2ff",
                        borderRadius: 5,
                        backgroundSize: "fit",
                        backgroundRepeat: "no-repeat",
                        backgroundImage:
                            'url("https://static.outschool.com/master/main/public/images/curated-below-the-fold-frame.427a696ed858bc3abd7800ab0b4ab72c.png")',
                    }}
                >
                    <Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                // pt: 5,
                                p: 4,
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: "bolder",
                                    fontFamily: "Bitter, serif",
                                    fontSize: 35,
                                }}
                            >
                                Homeschool curriculum: A quick guide | Free
                                eBook
                            </Typography>
                        </Box>

                        <Box sx={{ fontWeight: "bolder", pl: 5 }}>
                            <Typography sx={{ fontWeight: 550 }}>
                                How to compare, test, and evaluate your
                                homeschool curriculum
                            </Typography>
                            <Stack direction={"row"}>
                                <Box>
                                    <ul>
                                        <Stack direction={"column"} spacing={1}>
                                            <li>
                                                <Typography variant="body1">
                                                    Curriculum consultant and
                                                    homeschooling-pro parents
                                                    share hot tips
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography variant="body1">
                                                    Learn how to compare options
                                                    and test before you buy
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography variant="body1">
                                                    And how to make sure your
                                                    curriculum is effective for
                                                    your needs
                                                </Typography>
                                            </li>
                                        </Stack>
                                    </ul>
                                </Box>
                                <Box
                                    sx={{
                                        paddingLeft: 20,
                                        position: "absolute",
                                        right: 290,
                                    }}
                                >
                                    <Image
                                        height={250}
                                        width={250}
                                        alt="img"
                                        src={
                                            "http://localhost:3001/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap.833a8a9f.gif&w=1080&q=75"
                                        }
                                    />
                                </Box>
                            </Stack>
                            {/* ----------------------------------------------------------- */}
                            <Box paddingBottom={5} paddingTop={4}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    Get the eBook
                                </Typography>
                                <Box>
                                    <ThemeProvider theme={theme}>
                                        <Stack direction={"row"} spacing={2}>
                                            <TextField
                                                variant="outlined"
                                                label="enter your email"
                                                sx={{
                                                    borderRadius: 10,
                                                    backgroundColor: "white",
                                                    width: 500,
                                                }}
                                            />
                                            <Button
                                                sx={{
                                                    backgroundColor: "#7e4d8b",
                                                    color: "white",
                                                    borderRadius: 7,
                                                    width: 100,
                                                    boxShadow: 10,
                                                }}
                                                size="small"
                                            >
                                                SignUp
                                            </Button>
                                        </Stack>
                                    </ThemeProvider>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default QuickGuide;
