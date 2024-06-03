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
      <div className="w-full flex justify-end">
        <div className="text-black text-3xl font-medium font-['Alegreya']">
          Прокрутите, чтобы узнать больше
        </div>
        <progress
          value={progress}
          id="progress"
          // className="h-1 text-black appearance-none bg-repeat-x bg-progress bg-[auto 3px]"
        ></progress>
      </div>
    </div>
  );
}
export default PageMain;
