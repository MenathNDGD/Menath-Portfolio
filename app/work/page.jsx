import MotionWrapper from "@/components/CommonComponents/MotionWrapper";
import ProjectDetails from "@/components/WorkComponents/ProjectDetails";

import projects from "@/data/workPageData";

export const metadata = {
  title: "Menath Nadungoda | Work",
  description: "My projects and work experience.",
  keywords: "Menath Nadungoda, Menath, Nadungoda, Work, Projects, Experience",
};

const Work = () => {
  return (
    <MotionWrapper
      as="section"
      className={"min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"}
    >
      <div className="container mx-auto">
        <ProjectDetails projects={projects} />
      </div>
    </MotionWrapper>
  );
};

export default Work;
