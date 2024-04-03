import { InnerContainer } from "../../commons/innerContainer";
import { SectionContainer } from "../../commons/sectionContainer";
import planet from "../../../public/img/planet.png";
import blur1 from "../../../public/img/blur-1.jpg";
import howSubgraph from "../../../public/img/how-subgraph.png";
import howScreenshot from "../../../public/img/how-screenshot.png";
import howCode from "../../../public/img/how-code.png";

export const HowToUse = () => {
  return (
    <SectionContainer>
      <InnerContainer>
        <div
          className="-translate-x-[40%] -translate-y-[49%] -z-[1] absolute left-0 top-0 w-[1672.5px]"
          style={{
            aspectRatio: "1/1",
            backgroundImage: `url(${planet})`,
            backgroundSize: "100% 100%",
          }}
        ></div>
        <div
          className="translate-x-[40%] translate-y-[45%] rotate-90 scale-[0.65] -z-[1] absolute right-0 bottom-0"
          style={{
            aspectRatio: "1/1",
            backgroundImage: `url(${planet})`,
            backgroundSize: "100% 100%",
          }}
        ></div>
        <div className="px-heading text-center text-white">
          <h2 className="text-white font-semibold text-64 leading-common tracking-common">
            How to use a subgraph
          </h2>
          <p className="text-24 text-white-64 leading-common tracking-common mt-8">
            With The Graph, it’s easy to access blockchain data using subgraphs
            and GraphQL queries. Join a growing number of trailblazers creating
            fast, responsive applications with data that loads in milliseconds.
          </p>
        </div>
        <div
          className="-z-[1] absolute left-1/2 w-[3440px] h-[1924px] opacity-32 -translate-x-[50%] -translate-y-[50%]"
          style={{
            backgroundImage: `url(${blur1})`,
            backgroundSize: "100% 100%",
          }}
        ></div>
        <div
          className="mt-16 outline-16 text-start flex flex-row justify-start items-stretch rounded-lg outline outline-white-8 bg-background overflow-hidden"
          style={{
            transition:
              "color 800ms ease 0ms, background-color 800ms ease 0ms, border-color 800ms ease 0ms, text-decoration-color 800ms ease 0ms, fill 800ms ease 0ms, stroke 800ms ease 0ms, opacity 800ms ease 0ms, box-shadow 800ms ease 0ms, text-shadow 800ms ease 0ms, transform 800ms ease 0ms, filter 800ms ease 0ms, backdrop-filter 800ms ease 0ms",
          }}
        >
          <StepItem
            stepNumber={1}
            title="Discover"
            des="Create a subgraph to organize smart contract data, or use an existing one."
            action="View the subgraph"
            imgSrc={howSubgraph}
            imgWidth={232}
          />
          <div className="basis-1 bg-white-4 " />
          <StepItem
            stepNumber={2}
            title="Query"
            des="Easily access organized data with simple GraphQL queries."
            action="View the playground"
            imgSrc={howCode}
            imgWidth={287}
          />
          <div className="basis-1 bg-white-4 " />
          <StepItem
            stepNumber={3}
            title="Serve"
            des="Effortlessly load queried data into your application."
            action="View the dapp"
            imgSrc={howScreenshot}
            imgWidth={320}
          />
        </div>
      </InnerContainer>
    </SectionContainer>
  );
};

const StepItem = (props) => {
  const { stepNumber, title, des, imgSrc, action, imgWidth } = props;

  return (
    <div
      className="py-24 px-common1 grow shrink basis-0 outline-none"
      style={{
        transition: "background-color 200ms ease 0s, opacity 400ms ease 0s",
      }}
    >
      <div className="flex items-start flex-col flex-nowrap justify-start">
        <h3>
          <span className="text-white-64 font-medium text-xs tracking-[0.15em] uppercase block">
            Step {stepNumber}
          </span>
          <span className="text-white font-semibold text-24 leading-common tracking-common mt-8 block">
            {title}
          </span>
        </h3>
        <p className="text-white-64 leading-common tracking-common text-lg mt-2">
          {des}
        </p>
        <img
          src={imgSrc}
          alt="Premia Mainnet Subgraph"
          width={imgWidth}
          height="232"
          class="mt-8"
        />
        <span
          className="block w-fit outline-none text-white-48 leading-common tracking-common mt-8"
          style={{ transition: "none 200ms ease 0ms" }}
        >
          <span
            className="static -mx-3 -my-1 px-3 py-1 rounded-full "
            style={{
              transition:
                "color 200ms ease 0ms, background-color 200ms ease 0ms, border-color 200ms ease 0ms, text-decoration-color 200ms ease 0ms, fill 200ms ease 0ms, stroke 200ms ease 0ms",
            }}
          >
            <span className="z-[1] whitespace-nowrap ml-common1">
              <span className="ml-common2 leading-4">{action}</span>
              <span
                className="inline-flex items-center justify-center w-4 h-4 text-white-48 ml-common2"
                style={{
                  transition:
                    "transform 200ms ease 0ms, opacity 200ms ease 0ms",
                }}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 16 16"
                  class="w-full h-full"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.3612 7.52782L7.42059 2.66776L8.09941 2L13.8594 7.66612C14.0469 7.85052 14.0469 8.14948 13.8594 8.33388L8.09941 14L7.42059 13.3322L12.3612 8.47218H2V7.52782H12.3612Z"
                  ></path>
                </svg>
              </span>
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};
