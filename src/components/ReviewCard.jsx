import { Avatar, Box, Rating, Stack, Typography } from "@mui/material";
import React from "react";

const ReviewCard = () => {
    return (
        <div>
            <Box>
                <Box
                    sx={{
                        width: 400,
                        backgroundColor: "#f6f6f8",
                        // height: 200,
                        borderRadius: 4,
                    }}
                >
                    <Box padding={2}>
                        <Rating
                            size="small"
                            name="read-only"
                            value={5}
                            readOnly
                        />
                    </Box>
                    <Box>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                fontWeight: "bolder",
                                fontFamily: "Bitter, serif",
                                pl: 3,
                                color: "#7e4d8b",
                            }}
                        >
                            Test title
                        </Typography>
                    </Box>
                    <Box padding={2}>
                        <Typography
                            variant="body2"
                            sx={{ fontFamily: "Nunito Sans, sans-serif" }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quos blanditiis tenetur unde suscipit, quam
                            beatae
                        </Typography>
                    </Box>
                </Box>
                <Stack direction="row" spacing={2} mt={2}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://api.office-people.de/wp-content/uploads/2021/09/fur-bewerber.png"
                    />
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: "Nunito Sans, sans-serif",
                            fontWeight: "bolder",
                            pt: 1.2,
                        }}
                    >
                        Test user review
                    </Typography>
                </Stack>
            </Box>
        </div>
    );
};

export default ReviewCard;
