"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function CourseCard({ data }) {
    const [hover, setHover] = React.useState(false);

    return (
        <>
            <Box
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                sx={{ position: "relative", display: "inline-block" }}
            >
                <Card
                    sx={{
                        maxWidth: "100%",
                        borderRadius: 3,
                        position: "relative",
                        transform: hover ? "scale(1.05)" : "scale(1)",
                        transition: "transform 0.3s ease-in-out",
                    }}
                >
                    <CardMedia
                        sx={{
                            height: 140,
                            border: 5,
                            borderColor: "white",
                            borderRadius: 5,
                        }}
                        image={`${data.img}`}
                        title="green iguana"
                    />

                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                                fontFamily: "Noto Sans KR, sans-serif",
                                letterSpacing: -1,
                                mb: 3,
                                color: "#7e4d8b",
                                fontWeight: 500,
                            }}
                        >
                            <Stack
                                direction={"row"}
                                sx={{ position: "relative" }}
                            >
                                <Box>{data.name}</Box>
                                {hover ? (
                                    <motion.div
                                        initial={{ x: "100%" }}
                                        animate={{ x: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 100,
                                        }}
                                        style={{
                                            position: "absolute",
                                            right: 10,
                                            top: 0,
                                        }}
                                    >
                                        <Box>
                                            <Image
                                                height={50}
                                                width={50}
                                                alt="logo"
                                                src={
                                                    "http://localhost:3001/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap.833a8a9f.gif&w=1080&q=75"
                                                }
                                            />
                                        </Box>
                                    </motion.div>
                                ) : null}
                            </Stack>
                        </Typography>
                        <Box>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    fontFamily: "Noto Sans KR, sans-serif",
                                    fontWeight: "bolder",
                                }}
                            >
                                {data.desc}
                            </Typography>
                        </Box>
                    </CardContent>

                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button
                            fullWidth
                            size="small"
                            sx={{
                                backgroundColor: hover ? "#7e4d8b" : null,
                                border: 2,
                                borderColor: "#7e4d8b",
                                color: hover ? "white" : "#7e4d8b",
                                borderRadius: 4,
                                fontFamily: "Bitter, serif",
                                ":hover": {
                                    color: "#7e4d8b",
                                },
                                maxWidth: 400,
                            }}
                        >
                            <OpenInNewIcon />
                            Learn More
                        </Button>
                    </CardActions>
                </Card>

                <Box
                    component="img"
                    src={`${data.logo}`}
                    alt="logo"
                    sx={{
                        position: "absolute",
                        top: -20,
                        right: -30,
                        width: 150,
                        height: data.name === "SpeakPro English" ? 150 : 55,
                    }}
                />
            </Box>
        </>
    );
}
