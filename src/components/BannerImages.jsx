import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/images/bg.png";

const AnimatedBox = motion(Box);

const BannerImages = () => {
    return (
        <div>
            <Box position="relative">
                <Box
                    sx={{
                        height: 500,
                        width: 550,
                        backgroundSize: "cover",
                        backgroundImage: `url(/images/bg.png)`,
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            pt: 15,
                        }}
                    >
                        <Image
                            style={{ borderRadius: 19 }}
                            alt="banner"
                            src={
                                "https://images.ctfassets.net/ucy64xj66ql7/20NQrKFx7x4uF6BTSntxZ4/1d059f74521085d64def4d603a50dddb/full_curriculum_middle_school.png?w=503&h=335&q=85&fm=webp"
                            }
                            height={250}
                            width={400}
                        />
                    </Box>
                </Box>
                <AnimatedBox
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    sx={{
                        position: "absolute",
                        bottom: "10px",
                        left: 0,
                    }}
                >
                    <Image
                        style={{ borderRadius: "50%" }}
                        alt="banner"
                        src={
                            "https://www.intervaledu.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBINOCULAR.942a8413.gif&w=828&q=75"
                        }
                        height={80}
                        width={80}
                    />
                </AnimatedBox>
                <Box
                    sx={{
                        position: "absolute",
                        bottom: "30px",
                        right: 0,
                    }}
                >
                    <Image
                        // style={{ borderRadius: "50%" }}
                        src={
                            "https://static.outschool.com/master/main/public/images/curated-hero-section-squiggle.2ad5d6313d99fbc568a45aff157575cf.svg"
                        }
                        alt="banner"
                        height={60}
                        width={60}
                    />
                </Box>
            </Box>
        </div>
    );
};

export default BannerImages;

// "https://static.outschool.com/master/main/public/images/curated-hero-section-blob.a0ec93c36fc10ea36bff0dadd33556d8.png"
