"use client";
import React from "react";
import "../utils/css/wave.css";

const Wave = () => {
    return (
        <div>
            <section className="gradient-pp vh-100">
                <div className="position-absolute w-100 bottom-0">
                    <svg
                        className="waves"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 20 130 40"
                        preserveAspectRatio="none"
                        shapeRendering="auto"
                    >
                        <defs>
                            <path
                                id="gentle-wave"
                                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                            />
                        </defs>
                        <g className="moving-waves">
                            <use
                                xlinkHref="#gentle-wave"
                                x="60"
                                y="8"
                                fill="rgba(255,255,255,1)"
                            />
                        </g>
                    </svg>
                </div>
            </section>
        </div>
    );
};

export default Wave;
