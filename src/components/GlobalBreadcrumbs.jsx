import * as React from "react";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Typography } from "@mui/material";

function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs() {
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs
                aria-label="breadcrumb"
                sx={{ fontSize: 11, fontWeight: "bolder" }}
            >
                <Link underline="hover" href="/">
                    <HomeOutlinedIcon sx={{ height: 15, width: 15 }} />
                </Link>
                <Link
                    underline="hover"
                    href="/material-ui/getting-started/installation/"
                    sx={{ color: "black" }}
                >
                    <Typography variant="caption">Full Curriculum</Typography>
                </Link>
            </Breadcrumbs>
        </div>
    );
}
