import React from "react";
import {
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Box,
    Stack,
    Typography,
} from "@mui/material";

const LearnerAgeRadioButtons = () => {
    return (
        <Box sx={{ alignContent: "inherit", mt: 2 }}>
            <FormControl component="fieldset">
                <Stack direction={"row"}>
                    <FormLabel component="legend">
                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily: "Serif",
                                color: "black",
                                paddingRight: 2,
                                fontWeight: "bolder",
                            }}
                        >
                            Learner's age
                        </Typography>
                    </FormLabel>
                    <RadioGroup row aria-label="learner-age" name="learner-age">
                        <FormControlLabel
                            value="3-5"
                            control={<Radio />}
                            label={
                                <Typography style={{ fontWeight: "bold" }}>
                                    3-5
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            value="6-9"
                            control={<Radio />}
                            label={
                                <Typography style={{ fontWeight: "bold" }}>
                                    9-6
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            height={100}
                            value="10-13"
                            control={<Radio />}
                            label={
                                <Typography style={{ fontWeight: "bold" }}>
                                    10-13
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            value="14-18"
                            control={<Radio sx={{ height: 40, width: 40 }} />}
                            label={
                                <Typography style={{ fontWeight: "bold" }}>
                                    14-18
                                </Typography>
                            }
                        />
                    </RadioGroup>
                </Stack>
            </FormControl>
        </Box>
    );
};

export default LearnerAgeRadioButtons;
