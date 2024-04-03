import { CommonHeading } from "../../commons/commonHeading";
import { InnerContainer } from "../../commons/innerContainer";
import { SectionContainer } from "../../commons/sectionContainer";
import roleDataConsumer from "../../../public/img/role-data-consumer.png";
import roleDeveloper from "../../../public/img/role-developer.png";
import roleIndexer from "../../../public/img/role-indexer.png";
import roleDelegator from "../../../public/img/role-delegator.png";
import roleCurator from "../../../public/img/role-curator.png";
import { ArrowIcon } from "../../svgs/arrow";
import roleReadMore from "../../../public/img/role-read-more.jpg";

const dataRender = [
  {
    imgSrc: roleDataConsumer,
    title: "Data consumer",
    des: "Query an existing subgraph in your project",
  },
  {
    imgSrc: roleDeveloper,
    title: "Developer",
    des: "Create a subgraph to use in your dapp",
  },
  {
    imgSrc: roleIndexer,
    title: "Indexer",
    des: "Index data & serve queries for subgraphs",
  },
  {
    imgSrc: roleDelegator,
    title: "Delegator",
    des: "Secure the network by supporting helpful Indexers",
  },
  {
    imgSrc: roleCurator,
    title: "Curator",
    des: "Identify useful subgraphs to index",
  },
  {
    imgSrc: null,
    title: "Read more",
    des: "23 Ways to Participate in The Graph Ecosystem",
    bgImgSrc: roleReadMore,
  },
];

export const JoinEcosystem = () => {
  return (
    <SectionContainer onlyBottom>
      <InnerContainer>
        <CommonHeading
          title="Join the ecosystem"
          subTitle="Transform the internet"
          des="The Graph ecosystem welcomes you — regardless of where you are in the world, what your level of technical expertise is, or your familiarity with blockchains. Learn about all the roles in which you can choose to participate!"
        />
        <div className="mt-16 px-common4">
          <ul
            className="gap-8 grid justify-stretch"
            style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
          >
            {dataRender.map((item) => (
              <EcoItem
                imgSrc={item.imgSrc}
                title={item.title}
                des={item.des}
                bgImgSrc={item.bgImgSrc}
              />
            ))}
          </ul>
        </div>
      </InnerContainer>
    </SectionContainer>
  );
};

export const EcoItem = (props) => {
  const { imgSrc, title, des, bgImgSrc } = props;

  return (
    <li className="flex flex-col flex-nowrap justify-start items-stretch">
      <div className="px-8 flex flex-col justify-center items-center relative grow py-10 border border-solid border-white-4 bg-white-2 transition-color text-center overflow-hidden">
        {bgImgSrc && (
          <img
            src={bgImgSrc}
            width="404"
            height="404"
            alt=""
            class="absolute left-0 top-0 w-full h-full object-cover opacity-15 transition-color grayscale-75 "
          />
        )}
        <div className="-mt-4 mb-2 w-20 h-20 relative">
          {imgSrc && (
            <img
              width={80}
              height={80}
              src={imgSrc}
              alt=""
              className="absolute left-0 top-0 w-full h-full object-contain"
            />
          )}
        </div>
        <div className="flex flex-col flex-nowrap justify-center items-center">
          <div className="text-white font-semibold text-xl leading-common tracking-common">
            {title}
          </div>
          <div className="w-0 opacity-0 -translate-x-1 transition-color ">
            <span className="block w-4 h-4 text-white-88 ml-8 mt-0.5">
              <ArrowIcon />
            </span>
          </div>
          <p className="text-white-48 leading-common tracking-common mt-2">
            {des}
          </p>
        </div>
      </div>
    </li>
  );
};
