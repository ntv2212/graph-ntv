const dataRender = [
  {
    listImg: [
      {
        src: "https://api.thegraph.com/ipfs/api/v0/cat?arg=Qmbg6s6UhpEdqAJhvDBEFxagCR9TT3nzcep5mBo53XqbLt",
        alt: "Lido",
      },
      {
        src: "https://ipfs.network.thegraph.com/api/v0/cat?arg=Qmao586HmvZ3ZctgFpC2421u2ykPzLdAT9Z3ywdGyMCpHH",
        alt: "Dodo",
      },
      {
        src: "https://api.thegraph.com/ipfs/api/v0/cat?arg=QmQQdjnzdPEY3nuwSvLr3Wgy4gdyAwHE59UqgFsEdKE4ht",
        alt: "Premia",
      },
      {
        src: "https://api.thegraph.com/ipfs/api/v0/cat?arg=QmexXcnTUocqoihRMx8HKA7m59Q3S4A3ZPBqVxWhF5LVoJ",
        alt: "Connext",
      },
    ],
    name: "DeFi",
  },
];

export const Web3Main = () => {
  return (
    <div
      className="pl-[min(8.2vw-46.9px,64px)] gap-y-8 grid items-stretch justify-stretch gap-x-16"
      style={{ gridTemplateColumns: "1fr 472px" }}
    >
      <div className="self-end">
        <h2 className="text-white font-semibold text-48 leading-common tracking-common">
          Web3 <br />{" "}
          <span className="text-white-48">Powered by subgraphs</span>
        </h2>
        <p class="text-24 text-white mt-8 leading-common tracking-common">
          Tens of thousands of developers rely on The Graph to create
          best-in-class user experiences. Explore a rich ecosystem of
          community-created subgraphs or build your own with The&nbsp;Graph.
        </p>
      </div>
      <ul
        className="flex flex-row flex-wrap justify-start items-stretch gap-8 self-center"
        style={{ gridRow: "span 2" }}
      >
        {dataRender.map((item) => (
          <Web3Item listImg={item.listImg} name={item.name} />
        ))}
      </ul>
      <div className="flex-nowrap gap-0 flex flex-row justify-between items-strech self-start">
        <TextItem
          title="200+"
          subTitle="Indexer Nodes"
          des="On The Graph Network"
        />
        <div className="block mx-8 w-[1px] bg-white-16" />
        <TextItem
          title="1.2 Trillion+"
          subTitle="Queries Served"
          des="On The Graph Network & hosted service"
        />
        <div className="block mx-8 w-[1px] bg-white-16" />
        <TextItem
          title="60K+"
          subTitle="Projects"
          des="On The Graph Network & hosted service"
        />
      </div>
    </div>
  );
};

const Web3Item = (props) => {
  const { listImg, name } = props;
  return (
    <li className="max-w-[136px] w-[calc(50%-16px)] relative">
      <div
        className="block rounded-lg opacity-88"
        style={{ transition: "opacity 200ms ease 0ms" }}
      >
        <div className="flex flex-row flex-wrap justify-start items-strech gap-2 p-2 rounded-lg border border-solid border-white-16 bg-white-8">
          <div
            className="absolute -left-2 -right-2 -bottom-2 -top-2 rounded-2xl bg-[rgb(51,49,65)] opacity-0 scale-[0.8]"
            style={{
              transition:
                "color 200ms ease 0ms, background-color 200ms ease 0ms, border-color 200ms ease 0ms, text-decoration-color 200ms ease 0ms, fill 200ms ease 0ms, stroke 200ms ease 0ms, opacity 200ms ease 0ms, box-shadow 200ms ease 0ms, text-shadow 200ms ease 0ms, transform 200ms ease 0ms, filter 200ms ease 0ms, backdrop-filter 200ms ease 0ms",
            }}
          />
          {listImg.map((item) => (
            <ImgItem key={item.src} src={item.src} alt={item.alt} />
          ))}
        </div>
        <div className="flex flex-row flex-nowrap justify-center items-center mt-3">
          <div>
            <div className="text-sm leading-common tracking-common text-center text-white-88">
              {name}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const ImgItem = (props) => {
  const { src, alt } = props;

  return (
    <img
      src={src}
      alt={alt}
      class="w-[calc(50%-4px)] grow-1 rounded object-cover opacity-88"
      style={{ aspectRatio: "1/1" }}
    />
  );
};

const TextItem = (props) => {
  const { title, subTitle, des } = props;

  return (
    <div className="min-w-0 flex-1">
      <h3 className="text-24 text-white leading-common tracking-common hyphens-auto capitalize">
        {title} <br />
        <span>{subTitle}</span>
      </h3>
      <p className="text-white-48 text-xs leading-common tracking-common mt-2">
        {des}
      </p>
    </div>
  );
};
