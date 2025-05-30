import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Gitcode() {
  const tasks = [
    {
      text: "Full-stack development of a Web3 open-source contribution platform, ensuring scalability, security, and seamless user experience.",
      keywords: ["full-stack development", "Web3", "open-source", "scalability", "security", "user experience"],
    },
    {
      text: "Worked with a cross-functional team to implement smart contract interactions, using Next.js, Tailwind CSS, Node.js, Ethers.js, and PostgreSQL.",
      keywords: ["smart contracts", "Next.js", "Tailwind CSS", "Node.js", "Ethers.js", "PostgreSQL"],
    },
    {
      text: "Built API routes, on-chain/off-chain data integrations, and contributed to CI/CD pipelines for continuous delivery and testing.",
      keywords: ["API routes", "on-chain data", "off-chain data", "CI/CD", "integration", "testing"],
    },
  ];


  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Full Stack Devloper <span className="text-AAsecondary">@ web3</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Aug - Nov 2024</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://www.thegitcode.com/", "_blank")}
          >
            www.thegitcode.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
