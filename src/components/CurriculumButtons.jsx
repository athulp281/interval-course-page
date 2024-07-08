import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import React from "react";

const CurriculumButtons = () => {
    const data = [
        { id: 1, name: "Foundation" },
        {
            id: 2,
            name: "Classroom",
        },
        {
            id: 3,
            name: "Speak Pro",
        },
        {
            id: 4,
            name: "Little Genie",
        },
        {
            id: 5,
            name: "ECPC",
        },
    ];
    return (
        <Container>
            <Box sx={{ mt: 3 }}>
                <Stack direction={"row"} spacing={2}>
                    {data.map((item) => {
                        return (
                            <>
                                <Chip
                                    key={item.id}
                                    size="large"
                                    sx={{
                                        height: 45,
                                        borderRadius: 10,
                                        bgcolor: "#f0f0f0",
                                        overflow: "hidden",
                                        // minWidth: 100,
                                        ":hover": {
                                            border: 1,
                                            borderColor: "#7e4d8b",
                                        },
                                    }}
                                    label={
                                        <Typography
                                            sx={{
                                                fontWeight: "bolder",
                                                color: "black",
                                                fontFamily: "Bitter, serif",
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                    }
                                />
                            </>
                        );
                    })}
                </Stack>
            </Box>
        </Container>
    );
};

export default CurriculumButtons;
