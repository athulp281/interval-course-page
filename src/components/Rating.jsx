import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function BasicRating() {
    return (
        <Stack direction={"row"} spacing={1} sx={{ mt: 3 }}>
            <Box>
                <Typography variant="h6">Excellent</Typography>
            </Box>
            <Rating
                sx={{ color: "#7e4d8b" }}
                name="size-large"
                defaultValue={4.5}
                size="large"
                precision={0.5}
            />
        </Stack>
    );
}
