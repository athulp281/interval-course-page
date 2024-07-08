import ArticleSection from "@/sections/ArticleSection/ArticleSection";
import FeaturedCourse from "@/sections/FeaturedCourse/FeaturedCourse";
import FindMoreCourse from "@/sections/FindMoreCourse/FindMoreCourse";
import Footer from "@/sections/Footer/Footer";
import HeroSections from "@/sections/HeroSection/HeroSections";
import NavBar from "@/sections/NavBar/NavBar";
import QuickGuidSection from "@/sections/QuickGuid/QuickGuidSection";
import ReviewSection from "@/sections/ReviewSection/ReviewSection";
import TopCourses from "@/sections/TopCourses/TopCourses";

export default function Home() {
    return (
        <>
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
