import { InnerContainer } from "../../commons/innerContainer";
import { SectionContainer } from "../../commons/sectionContainer";
import { InfoItem } from "./infoItem";

const dataRender = [
  {
    title: "Build faster",
    subTitle: "100% less servers",
    des: "Create groundbreaking applications without needing to run your own data server, build indexing infrastructure, or parse through raw data.",
  },

  {
    title: "Spend less",
    subTitle: "60-98% less per month",
    des: "Cut down on costs and time spent running expensive infrastructure by tapping into The Graph’s competitive data market.",
  },
  {
    title: "Increase resilience",
    subTitle: "99.99%+ uptime",
    des: "Ensure your application’s uptime and keep its data flowing 24/7 with a globally distributed network of contributors.",
  },
];

export const GeneralInfo = () => {
  return (
    <SectionContainer>
      <InnerContainer>
        <div className="px-[min(8.2vw-46.9px,64px)] flex flex-nowrap items-stretch gap-x-[5%] gap-y-12 justify-start">
          {dataRender.map((item) => (
            <InfoItem key={item.title} {...item} />
          ))}
        </div>
      </InnerContainer>
    </SectionContainer>
  );
};
