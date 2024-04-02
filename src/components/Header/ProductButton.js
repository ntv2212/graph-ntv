import { useState } from "react";
import { ChevronMenu } from "../commons/chevronMenu";

export const ProductButton = () => {
  const [isOpenProductMenu, setIsOpenProductMenu] = useState(false);

  const handleToggleProductMenu = () => {
    setIsOpenProductMenu((pre) => !pre);
  };

  const data = [
    {
      title: "Graph Explorer",
      des: "Explore subgraphs and interact with the protocol.",
    },
    {
      title: "Subgraph Studio",
      des: "Create, manage and publish subgraphs and API keys.",
    },
    {
      title: "Hosted Service",
      des: "Create and explore subgraphs on the hosted service.",
    },
  ];

  return (
    <div
      onClick={handleToggleProductMenu}
      className="flex items-center gap-2 cursor-pointer"
    >
      <span className="text-sm font-semibold text-white opacity-64">
        Products
      </span>
      <ChevronMenu isActive={isOpenProductMenu} />
      {isOpenProductMenu && (
        <div className="absolute pt-4 top-6">
          <div className="rounded border border-solid border-[rgba(255,255,255,0.08)] bg-[rgba(26,23,47)]">
            {data.map((item, index) => (
              <div
                className={`p-6 pl-4 ${
                  index > 0 && "border-t border-solid border-white-8"
                }`}
                key={item.title}
              >
                <span className="flex items-start gap-4">
                  <span className="opacity-0">icon</span>
                  <span className="text-white opacity-[0.64] w-[394px] text-sm font-semibold">
                    {item.title}
                    <span class="block mt-1 text-sm font-normal">
                      {item.des}
                    </span>
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
