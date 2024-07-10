import React from "react";
import "../utils/css/card.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Card = () => {
    return (
        <Box>
            <main className="main">
                <section className="card-section">
                    <Box className="card">
                        <Box className="flip-card">
                            <Box className="flip-card__container">
                                <Box className="card-front">
                                    <Box className="card-front__tp card-front__tp--city">
                                        {/* add icon here  */}
                                        <Box
                                            height={"100%"}
                                            width={"100%"}
                                            borderRadius={5}
                                            sx={{
                                                backgroundSize: "cover",
                                                backgroundImage:
                                                    'url("https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-103307436/103307436.jpg")',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    height: "100%",
                                                    width: "100%",
                                                    borderRadius: 5,
                                                    backgroundColor:
                                                        "rgba(0, 0, 0, 0.5)",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                    }}
                                                >
                                                    <Image
                                                        height={60}
                                                        width={200}
                                                        src={
                                                            "https://www.intervaledu.com/_next/image?url=https%3A%2F%2Fadmin.intervaledu.com%2Fmedia%2FImages%2FCourse%2Fclass.png&w=828&q=75"
                                                        }
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Box className="card-front__bt">
                                        <p className="card-front__text-view card-front__text-view--city">
                                            Learn More
                                        </p>
                                    </Box>
                                </Box>
                                <Box className="card-back">
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            mt: 10,
                                        }}
                                    >
                                        <Image
                                            height={150}
                                            width={150}
                                            src={
                                                "http://localhost:3001/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTHANKS.eb2a96f8.gif&w=384&q=75"
                                            }
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box className="inside-page">
                            <Box className="inside-page__container">
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontSize: 25,
                                        fontWeight: "bolder",
                                        color: "#0088cf",

                                        fontFamily: "Bitter, serif",
                                    }}
                                >
                                    Online Classroom Program
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        fontSize: 17,
                                        mt: 3,
                                        color: "grey.500",
                                        fontFamily: "Bitter, serif",
                                    }}
                                >
                                    individualised one-one-one tuition for
                                    grades 1-12 focusing on a single subject per
                                    session
                                </Typography>

                                <a
                                    href="#"
                                    className="inside-page__btn inside-page__btn--city"
                                >
                                    Explore More
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </section>
            </main>
        </Box>
    );
};

export default Card;
