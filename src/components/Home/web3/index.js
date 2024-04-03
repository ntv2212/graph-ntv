import { InnerContainer } from "../../commons/innerContainer";
import { SectionContainer } from "../../commons/sectionContainer";
import { SupportNetwork } from "./SupportNetwork";
import { Web3Main } from "./Web3Main";

export const Web3 = () => {
  return (
    <SectionContainer onlyBottom>
      <InnerContainer>
        <Web3Main />
        <SupportNetwork />
      </InnerContainer>
    </SectionContainer>
  );
};
