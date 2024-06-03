import Header from "../widgets/header";
import SliderImageGroup from "../widgets/images";
import PostNavigation from "../widgets/post_navigation";
import Welcome from "../widgets/welcome";
import React, { useRef, useEffect } from "react";


function PageMain() {
  const parentRef = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    const parent = parentRef.current;
    if (parent) {
      const onWheel = e => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += e.deltaY;
        }
      };
      parent.addEventListener("wheel", onWheel);
      return () => parent.removeEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <div ref={parentRef} className="flex flex-col h-full justify-between p-20">
      <Header />
      <div className="w-full h-px border-2 border-slate-700"></div>
      <div ref={scrollRef} className="flex gap-[200px] overflow-hidden">
        <Welcome />
        <SliderImageGroup />
        <PostNavigation />
      </div>
      <div className="w-full h-px border-2 border-slate-700"></div>
      <div className="w-full flex justify-end">
        <div className="text-black text-3xl font-medium font-['Alegreya']">Прокрутите, чтобы узнать больше</div>
      </div>
    </div>
  );
}
export default PageMain;
