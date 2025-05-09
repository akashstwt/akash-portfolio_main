import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Permissionless() {
  const tasks = [
  {
    text: "Built front-end features using Flutter and Dart, integrating APIs and managing state with Provider and Riverpod.",
    keywords: ["Flutter", "Dart", "API integration", "Provider", "Riverpod", "integrating APIs", "state management"],
  },
  {
    text: "Tested app functionality and performance using unit, widget, and integration tests, ensuring quality for a large user base.",
    keywords: ["testing", "quality assurance", "integration testing", "user base management"],
  },
  {
    text: "Converted Figma designs into responsive Flutter UI, improving interactivity and user experience.",
    keywords: ["Figma", "UI design", "Flutter", "interactivity", "user experience"],
  },
  {
    text: "Worked with team in sprints, integrating Firebase, push notifications, and local storage.",
    keywords: ["team collaboration", "Firebase", "push notifications", "local storage", "agile"],
  },
];


  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Flutter / Frontend Devloper <span className="text-AAsecondary"></span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Dec 2024 - May 2025</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://permissionless.net/", "_blank")}
          >
            www.permissionless.net
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
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
