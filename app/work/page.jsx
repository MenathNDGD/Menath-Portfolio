import MotionWrapper from "@/components/MotionWrapper";
import ProjectDetails from "@/components/ProjectDetails";

import projects from "@/data/workPageData";

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
