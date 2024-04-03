import { SectionContainer } from "../../commons/sectionContainer";
import blur1 from "../../../public/img/blur-1.jpg";
import { InnerContainer } from "../../commons/innerContainer";
import { SubGraphImg } from "./subGraphImg";
import { SubGraphDes } from "./subGraphDes";

export const SubGraph = () => {
  return (
    <SectionContainer>
      <div
        className="z-[-1] absolute left-1/2 full h-[1924px] opacity-32"
        style={{
          backgroundImage: `url(${blur1})`,
          backgroundSize: "100% 100%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <InnerContainer>
        <div className="pr-[min(-46.9px+8.2vw,64px)] flex items-center justify-start gap-8">
          <SubGraphImg />
          <SubGraphDes />
        </div>
      </InnerContainer>
    </SectionContainer>
  );
};
