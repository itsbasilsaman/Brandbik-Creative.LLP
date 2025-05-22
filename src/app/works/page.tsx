import AboutBoxes from "@/components/aboutBoxes";
import ApproachSection from "@/components/approachSection";
import ClientReviews from "@/components/clientReview";
import OurTeamSection from "@/components/ourTeamSection";
import TeamDescription from "@/components/teamDescription";
import WorkBanner from "@/components/workBanner";

export default function Works() {
    return (
        <div>
            <WorkBanner/>
            <TeamDescription/>
            <AboutBoxes/>
            <ApproachSection/>
            <OurTeamSection/>
            <ClientReviews/>
        </div>
    )
}
