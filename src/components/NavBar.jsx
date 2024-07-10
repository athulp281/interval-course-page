import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import logo from "../assets/images/logo.png";

export default function MyAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ bgcolor: "white" }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <Image
                            style={{ paddingTop: 7 }}
                            alt="logo"
                            height={50}
                            width={180}
                            src={
                                "https://www.teaminterval.ae/wp-content/uploads/2022/03/interval-logo.png"
                            }
                        />
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}
