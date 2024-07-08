"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Rating, Stack } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Image from "next/image";

export default function FeaturedCoursCard() {
    const [hover, setHover] = React.useState(false);
    return (
        <Card
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{
                borderRadius: 5,
                backgroundColor: hover ? "#1289c1" : "white",
                transform: hover ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.3s ease-in-out",
            }}
        >
            <CardMedia
                sx={{
                    height: 140,
                    border: 5,
                    borderRadius: 5,
                    borderColor: "white",
                }}
                image="https://www.edinburghcollege.ac.uk/media/c5ghakxe/pexels-tirachard-kumtanom-733856.jpg?center=0.40242891032492345,0.50277250251192762&mode=crop&quality=80&width=780&height=400&rnd=132717830764430000"
                title="green iguana"
            >
                {/* <Box>
                    <Image
                        alt="img"
                        height={100}
                        width={100}
                        borderRadius={10}
                        src={
                            "https://www.intervaledu.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTHANKS.eb2a96f8.gif&w=750&q=75%22"
                        }
                    />
                </Box> */}
            </CardMedia>
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                        fontFamily: "Noto Sans KR, sans-serif",
                        mb: 1,
                        color: hover ? "white" : "#7e4d8b",
                        fontWeight: 500,
                    }}
                >
                    Test Course
                </Typography>
                <Box>
                    <Rating size="small" name="read-only" value={5} readOnly />
                </Box>

                <Typography
                    variant="body2"
                    color={hover ? "white" : "text.secondary"}
                >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species,
                </Typography>
                <Box mt={1} sx={{ display: "flex" }}>
                    <CurrencyRupeeIcon
                        sx={{ color: hover ? "white" : "#1289c1", mt: 0.5 }}
                    />
                    <Typography
                        // variant="h6"
                        sx={{
                            color: hover ? "white" : "#1289c1",
                            fontSize: 22,
                            fontFamily: "Bitter, serif",
                            fontWeight: 600,
                            fontStyle: "normal",
                        }}
                    >
                        5438/-
                    </Typography>
                </Box>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                    fullWidth
                    sx={{
                        background: hover
                            ? "white"
                            : "linear-gradient(to right, #7e4d8b, #1289c1)",
                        color: hover ? "#7e4d8b" : "white",
                        borderRadius: 4,
                        maxWidth: 220,
                        ":hover": {
                            background: "white",
                        },
                    }}
                >
                    <ShoppingCartIcon />
                    Buy Now
                </Button>
            </CardActions>
        </Card>
    );
}
