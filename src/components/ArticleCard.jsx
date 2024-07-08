import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, Box, CardActionArea } from "@mui/material";

export default function ArticleCard() {
    return (
        <Box sx={{ width: 345 }}>
            <CardActionArea>
                <CardMedia
                    sx={{ borderRadius: 5 }}
                    component="img"
                    height="180"
                    image="https://media.post.rvohealth.io/wp-content/uploads/sites/4/2022/01/high-angle-view-female-girl-students-studying-classroom-school-1200x628-facebook-1200x628.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Box sx={{ display: "flex" }}>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://www.realmenrealstyle.com/wp-content/uploads/2023/08/How-To-Fold-A-Pocket-Square-9-Different-Ways.jpg"
                            sx={{ width: 24, height: 24 }}
                        />
                        <Typography
                            sx={{
                                paddingLeft: 2,
                                fontFamily: "Nunito Sans, sans-serif",
                                fontWeight: "bolder",
                                fontSize: 15,
                                color: "#7e4d8b",
                            }}
                        >
                            Article user
                        </Typography>
                    </Box>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            fontFamily: "Nunito Sans, sans-serif",
                            fontWeight: "bolder",
                            fontSize: 17,
                            mt: 2,
                            "&:hover": {
                                textDecoration: "underline",
                                textDecorationColor: "#7e4d8b",
                            },
                        }}
                    >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Box>
    );
}
