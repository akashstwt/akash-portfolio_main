import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EngxLab() {
  const tasks = [
    {
      text: "Founded and built a tech agency delivering tailored Web2, Web3, and AI solutions to startups and enterprises across various industries.",
      keywords: ["Founder", "Web2", "Web3", "AI", "tech agency", "solutions"],
    },
    {
      text: "Led the design and development of client products including dApps, websites, and AI-powered tools using modern frameworks and cloud infrastructure.",
      keywords: ["dApps", "AI tools", "web development", "cloud", "modern frameworks"],
    },
    {
      text: "Collaborated with clients to define technical requirements, built scalable MVPs, and integrated APIs for seamless business workflows.",
      keywords: ["client collaboration", "MVP", "API integration", "scalability", "business workflows"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Founder / Devloper <span className="text-AAsecondary">@ web3 / AI</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Started at Feb 2025</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://www.engxlab.com/", "_blank")}
          >
            www.engxlab.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
