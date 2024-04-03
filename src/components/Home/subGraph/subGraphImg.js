import { useEffect, useRef, useState } from "react";
import stackBlockchain from "../../../public/img/stack-blockchains.png";
import stackContract from "../../../public/img/stack-contracts.png";
import stackSubGraph from "../../../public/img/stack-subgraphs.png";
import stackUis from "../../../public/img/stack-uis.png";

const Text = ({ text, marginTop }) => {
  return (
    <div
      className={`text-white font-semibold text-24 leading-[clamp(1em,0.9em+9.6px,1.5em)] tracking-[clamp(-2px,-0.05em+0.8px,0px)]`}
      style={{
        transition: "opacity 800ms ease 0ms",
        marginTop: `${marginTop}%`,
      }}
    >
      {text}
    </div>
  );
};

export const SubGraphImg = () => {
  const divRef = useRef(null);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(divRef.current.offsetWidth);
  }, []);

  return (
    <div
      className="max-w-[501px] w-[376px] flex-1 text-center relative"
      style={{
        aspectRatio: "501 / 572",
      }}
      ref={divRef}
    >
      <div
        className="flex items-center absolute left-0 bottom-0 justify-center"
        style={{
          aspectRatio: "1002 / 458",
          backgroundImage: `url(${stackBlockchain})`,
          backgroundSize: "100% 100%",
          width,
        }}
      >
        <Text text="Blockchains" marginTop={-11.5} />
      </div>
      <div
        className="flex items-center absolute left-0 right-0 mx-auto bottom-[32.34%] w-[64.0719%] justify-center"
        style={{
          aspectRatio: "642 / 392",
          backgroundImage: `url(${stackContract})`,
          backgroundSize: "100% 100%",
          maxWidth: width,
        }}
      >
        <Text text="Smart contracts" marginTop={22} />
      </div>
      <div
        className="flex items-center absolute left-0 right-0 mx-auto bottom-[46.85%] w-[72%] justify-center"
        style={{
          aspectRatio: "772 / 442",
          backgroundImage: `url(${stackSubGraph})`,
          backgroundSize: "100% 100%",
          maxWidth: width,
        }}
      >
        <Text text="Smart contracts" marginTop={22} />
      </div>
      <div
        className="flex items-center absolute left-0 right-0 mx-auto top-0 w-[64%] justify-center"
        style={{
          aspectRatio: "772 / 442",
          backgroundImage: `url(${stackUis})`,
          backgroundSize: "100% 100%",
          maxWidth: width,
        }}
      >
        <Text text="Uis" marginTop={11.5} />
      </div>
    </div>
  );
};
