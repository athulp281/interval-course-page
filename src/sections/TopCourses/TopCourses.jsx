"use client";

import CourseCard from "@/components/CourseCard";
import ScrollableComponent from "@/components/ScrollableComponent";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const TopCourses = () => {
    const [mounted, setMounted] = useState(false);
    const datas = [
        {
            id: 1,
            name: "Classroom",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            logo: "https://www.intervaledu.com/_next/image?url=https%3A%2F%2Fadmin.intervaledu.com%2Fmedia%2FImages%2FCourse%2Fclass.png&w=828&q=75",
            img: "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-103307436/103307436.jpg",
        },
        {
            id: 2,
            name: "Foundation",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            logo: "https://www.intervaledu.com/_next/image?url=https%3A%2F%2Fadmin.intervaledu.com%2Fmedia%2FImages%2FCourse%2Ffound.png&w=828&q=75",
            img: "https://static01.nyt.com/images/2013/06/10/nyregion/JP-TRACKING/JP-TRACKING-superJumbo.jpg",
        },
        {
            id: 3,
            name: "Little Genie",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            logo: "https://www.intervaledu.com/_next/image?url=https%3A%2F%2Fadmin.intervaledu.com%2Fmedia%2FImages%2FCourse%2Flittle.png&w=828&q=75",
            img: "https://c8.alamy.com/comp/2G6GFGE/small-children-school-children-smile-and-hold-their-hand-up-for-a-response-against-the-background-of-a-female-teacher-and-a-school-class-back-to-2G6GFGE.jpg",
        },
        {
            id: 4,
            name: "SpeakPro ",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            logo: "https://www.intervaledu.com/_next/image?url=https%3A%2F%2Fadmin.intervaledu.com%2Fmedia%2FImages%2FCourse%2FJOIN_2_1_1.png&w=828&q=75",
            img: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MjAwNzc5OTU5NDMyNjUyMTYy/10-fun-classroom-activities-to-help-students-practice-speaking-english.jpg",
        },
        // {
        //     id: 5,
        //     name: "SpeakPro English",
        //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        //     logo: "https://www.intervaledu.com/_next/image?url=https%3A%2F%2Fadmin.intervaledu.com%2Fmedia%2FImages%2FCourse%2FJOIN_3.webp&w=828&q=75",
        //     img: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MjAwNzc5OTU5NDMyNjUyMTYy/10-fun-classroom-activities-to-help-students-practice-speaking-english.jpg",
        // },
        // {
        //     id: 6,
        //     name: "ECPC",
        //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        //     logo: "https://www.intervaledu.com/_next/image?url=https%3A%2F%2Fadmin.intervaledu.com%2Fmedia%2FImages%2FCourse%2Fecpc.png&w=828&q=75",
        //     img: "https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg",
        // },
    ];

    useEffect(() => {
        setMounted(true);
    }, []);

    const data = [
        { id: 1, name: "Foundation" },
        { id: 2, name: "Classroom" },
        { id: 3, name: "Speak Pro" },
        { id: 4, name: "Little Genie" },
        { id: 5, name: "ECPC" },
    ];

    return (
        <Box>
            <Container>
                <Box sx={{ mt: 3 }}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: 30,
                                fontWeight: "bolder",
                                textAlign: "left",
                                fontFamily: "Bitter, serif",
                            }}
                        >
                            Top rated full curriculum courses
                        </Typography>
                    </Box>
                    <Box>{mounted && <ScrollableComponent items={data} />}</Box>
                    <Box mt={5}>
                        <Grid
                            container
                            spacing={{ xs: 2, md: 1 }}
                            columns={{ sx: 6, xs: 2, sm: 6, md: 12 }}
                        >
                            {mounted &&
                                datas.map((item) => (
                                    <Grid
                                        item
                                        xs={2}
                                        sm={2}
                                        md={3}
                                        key={item.id}
                                        padding={2}
                                    >
                                        <CourseCard data={item} />
                                    </Grid>
                                ))}
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default TopCourses;
