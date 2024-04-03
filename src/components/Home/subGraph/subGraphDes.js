import { Button } from "../../commons/Button";

export const SubGraphDes = () => {
  return (
    <div className="flex-1">
      <h2 className="text-white font-semibold text-48 leading-[clamp(1em,calc(0.9em+9.6px),1.5em)] tracking-[clamp(-2px,calc(-0.05em+0.8px),0px)]">
        Subgraphs <br />{" "}
        <span className="text-white-48">Industry-standard data access</span>
      </h2>
      <p className="text-24 text-white-64 leading-[clamp(1em,calc(0.9em+9.6px),1.5em)] tracking-[clamp(-2px,calc(-0.05em+0.8px),0px)] mt-8">
        Subgraphs are open APIs on The Graph that organize and serve blockchain
        data to applications. Using subgraphs, developers and data consumers
        alike benefit from speedy access to indexed data.
      </p>
      <div className="mt-16 flex flex-nowrap justify-start items-center gap-12">
        <Button title="Build a Subgraph" type="primary" />
        <Button title="Learn more" type="text" />
      </div>
    </div>
  );
};
