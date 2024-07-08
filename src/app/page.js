"use client";
import ArticleSection from "@/sections/ArticleSection/ArticleSection";
import FeaturedCourse from "@/sections/FeaturedCourse/FeaturedCourse";
import FindMoreCourse from "@/sections/FindMoreCourse/FindMoreCourse";
import Footer from "@/sections/Footer/Footer";
import HeroSections from "@/sections/HeroSection/HeroSections";
import NavBar from "@/sections/NavBar/NavBar";
import QuickGuidSection from "@/sections/QuickGuid/QuickGuidSection";
import ReviewSection from "@/sections/ReviewSection/ReviewSection";
import TopCourses from "@/sections/TopCourses/TopCourses";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Home() {
    useScrollReveal();

    return (
        <>
            {/* <NavBar />
            <div className="reveal">
                <HeroSections />
            </div>
            <div className="reveal">
                <TopCourses />
            </div>
            <div className="reveal">
                <FeaturedCourse />
            </div>
            <div className="reveal">
                <QuickGuidSection />
            </div>
            <div className="reveal">
                <ReviewSection />
            </div>
            <div className="reveal">
                <FindMoreCourse />
            </div>
            <div className="reveal">
                <ArticleSection />
            </div>
            <Footer /> */}

            <NavBar />

            <HeroSections />

            <TopCourses />

            <FeaturedCourse />

            <QuickGuidSection />

            <ReviewSection />

            <FindMoreCourse />

            <ArticleSection />

            <Footer />
        </>
    );
}
