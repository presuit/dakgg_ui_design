import SwainSquare from "../../../public/champs/SwainSquare.webp";
import GravesSquare from "../../../public/champs/GravesSquare.webp";
import MissFortuneSquare from "../../../public/champs/MissFortuneSquare.webp";
import SivirSquare from "../../../public/champs/SivirSquare.webp";
import MaokaiSquare from "../../../public/champs/MaokaiSquare.webp";
import TaliyahSquare from "../../../public/champs/TaliyahSquare.webp";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import PatchNoteSliderItem from "./PatchNoteSliderItem";

export interface IPatchNoteChamp {
  image: StaticImageData;
  name: string;
}
const PATCHNOTE_CHAMPS: IPatchNoteChamp[] = [
  { image: SwainSquare, name: "스웨인" },
  { image: GravesSquare, name: "그레이브즈" },
  { image: MissFortuneSquare, name: "미스포츈" },
  { image: SivirSquare, name: "시비르" },
  { image: MaokaiSquare, name: "마오카이" },
  { image: TaliyahSquare, name: "탈리야" },
];

const maxSliderIdx = PATCHNOTE_CHAMPS.length - 1;

type SliderDirection = "LEFT" | "RIGHT";

const SliderItemAnimate: Variants = {
  enter: ({ sliderDirection }: { sliderDirection: SliderDirection }) => {
    if (sliderDirection === "LEFT") {
      return {
        opacity: 0,
        x: -100,
      };
    } else {
      return {
        opacity: 0,
        x: 100,
      };
    }
  },
  animate: () => {
    return { opacity: 1, x: 0, transition: { duration: 0.5, type: "tween" } };
  },
  exit: ({ sliderDirection }: { sliderDirection: SliderDirection }) => {
    if (sliderDirection === "LEFT") {
      return {
        opacity: 0,
        x: 100,
        transition: { duration: 0.5, type: "tween" },
      };
    } else {
      return {
        opacity: 0,
        x: -100,
        transition: { duration: 0.5, type: "tween" },
      };
    }
  },
};

const PatchNote = () => {
  const [sliderIdx, setSliderIdx] = useState(0);
  const [sliderDirection, setSliderDirection] =
    useState<SliderDirection | null>(null);
  const handleSlider = (direction: SliderDirection) => {
    switch (direction) {
      case "LEFT":
        setSliderDirection("LEFT");
        setSliderIdx((prev) => (prev === 0 ? maxSliderIdx : prev - 1));
        break;
      case "RIGHT":
        setSliderDirection("RIGHT");
        setSliderIdx((prev) => (prev === maxSliderIdx ? 0 : prev + 1));
        break;
    }
  };

  return (
    <div className="relative flex h-full w-full flex-col rounded-md ring ring-rose-500">
      <div className="flex h-[40vh] w-full items-center justify-center rounded-t-md bg-zinc-800">
        <AnimatePresence
          custom={{ sliderDirection }}
          initial={false}
          exitBeforeEnter
        >
          <motion.div
            key={sliderIdx}
            custom={{ sliderDirection }}
            variants={SliderItemAnimate}
            initial="enter"
            animate="animate"
            exit="exit"
          >
            <PatchNoteSliderItem champInfo={PATCHNOTE_CHAMPS[sliderIdx]} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="grid w-full grid-cols-2 overflow-hidden rounded-b-md text-sm font-medium text-zinc-100">
        <button className="flex h-full w-full items-center justify-center gap-2 bg-black p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          <span>패치노트</span>
        </button>
        <button className="flex h-full w-full items-center justify-center gap-2 bg-rose-500 p-3">
          <svg
            className="aspect-square w-6 fill-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
          </svg>
          <span>패치노트 하이라이트</span>
        </button>
      </div>
      {/* slider left button */}
      <button
        onClick={() => handleSlider("LEFT")}
        className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-rose-500 p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      {/* slider right button */}
      <button
        onClick={() => {
          handleSlider("RIGHT");
        }}
        className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-rose-500 p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default PatchNote;
