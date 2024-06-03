import SliderImageGroup from "../widgets/images";
import PostNavigation from "../widgets/post_navigation";
import Welcome from "../widgets/welcome";
import React, { useRef, useEffect, useState } from "react";

function PageMain() {
  const parentRef = useRef();
  const scrollRef = useRef();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const parent = parentRef.current;
    if (parent) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += e.deltaY;
          setProgress(
            scrollRef.current.scrollLeft /
              (scrollRef.current.scrollWidth - scrollRef.current.offsetWidth)
          );
        }
      };
      parent.addEventListener("wheel", onWheel);
      return () => parent.removeEventListener("wheel", onWheel);
    }
  }, [progress]);

  return (
    <div ref={parentRef} className="flex flex-col h-full justify-between">
      <div className="w-full h-px border-2 border-slate-700"></div>
      <div ref={scrollRef} className="flex gap-[200px] overflow-hidden">
        <Welcome />
        <SliderImageGroup />
        <PostNavigation />
      </div>
      <div className="w-full h-px border-2 border-slate-700"></div>
      <div className="w-full flex justify-end items-center gap-5">
        <div className="text-black text-3xl font-medium font-['Alegreya']">
          Прокрутите, чтобы узнать больше
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${progress > 0 ? "" : "opacity-30"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        <progress value={progress} id="progress"></progress>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${progress == 1 ? "opacity-30" : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
}
export default PageMain;
