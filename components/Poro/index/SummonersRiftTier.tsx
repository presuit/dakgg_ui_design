import { motion, useAnimation, Variants } from "framer-motion";
import ChampPortrait from "./ChampPortrait";
import kayleSquare from "../../../public/champs/KayleSquare.webp";
import FioraSquare from "../../../public/champs/FioraSquare.webp";
import OlafSquare from "../../../public/champs/OlafSquare.webp";
import DariusSquare from "../../../public/champs/DariusSquare.webp";
import SwainSquare from "../../../public/champs/SwainSquare.webp";
import GwenSquare from "../../../public/champs/GwenSquare.webp";
import WukongSquare from "../../../public/champs/WukongSquare.webp";
import GravesSquare from "../../../public/champs/GravesSquare.webp";
import ViegoSquare from "../../../public/champs/ViegoSquare.webp";
import TaliyahSquare from "../../../public/champs/TaliyahSquare.webp";
import TalonSquare from "../../../public/champs/TalonSquare.webp";
import RekSaiSquare from "../../../public/champs/RekSaiSquare.webp";
import AhriSquare from "../../../public/champs/AhriSquare.webp";
import AniviaSquare from "../../../public/champs/AniviaSquare.webp";
import VexSquare from "../../../public/champs/VexSquare.webp";
import XerathSquare from "../../../public/champs/XerathSquare.webp";
import ViktorSquare from "../../../public/champs/ViktorSquare.webp";
import EzrealSquare from "../../../public/champs/EzrealSquare.webp";
import LucianSquare from "../../../public/champs/LucianSquare.webp";
import KaiSaSquare from "../../../public/champs/KaiSaSquare.webp";
import KogMawSquare from "../../../public/champs/KogMawSquare.webp";
import JhinSquare from "../../../public/champs/JhinSquare.webp";
import SamiraSquare from "../../../public/champs/SamiraSquare.webp";
import ZileanSquare from "../../../public/champs/ZileanSquare.webp";
import SennaSquare from "../../../public/champs/SennaSquare.webp";
import LuluSquare from "../../../public/champs/LuluSquare.webp";
import RenataGlascSquare from "../../../public/champs/Renata_GlascSquare.webp";
import YuumiSquare from "../../../public/champs/YuumiSquare.webp";
import BlitzcrankSquare from "../../../public/champs/BlitzcrankSquare.webp";
import OneTier from "../../../public/tiers/OneTier.svg";
import ZeroTier from "../../../public/tiers/ZeroTier.svg";
import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";

const ContainerAnimate: Variants = {
  enter: { scale: 1.2 },
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1,
    },
  },
};

const ItemAnimate: Variants = {
  enter: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

enum Position {
  TOP,
  MID,
  JUNGLE,
  BOT,
  SUP,
}

interface TierChampInfo {
  name: string;
  image: StaticImageData;
  tier: any;
}

const TOPTIERCHAMPS: TierChampInfo[] = [
  { image: kayleSquare, name: "케일", tier: OneTier },
  { image: OlafSquare, name: "올라프", tier: OneTier },
  { image: GwenSquare, name: "그웬", tier: OneTier },
  { image: FioraSquare, name: "피오라", tier: OneTier },
  { image: SwainSquare, name: "스웨인", tier: OneTier },
  { image: DariusSquare, name: "다리우스", tier: OneTier },
];
const MIDTIERCHAMPS: TierChampInfo[] = [
  { image: AhriSquare, name: "아리", tier: ZeroTier },
  { image: TaliyahSquare, name: "탈리야", tier: OneTier },
  { image: AniviaSquare, name: "애니비아", tier: OneTier },
  { image: ViktorSquare, name: "빅토르", tier: OneTier },
  { image: VexSquare, name: "벡스", tier: OneTier },
  { image: XerathSquare, name: "제라스", tier: OneTier },
];

const JUNGLETIERCHAMPS: TierChampInfo[] = [
  { image: WukongSquare, name: "오공", tier: OneTier },
  { image: GravesSquare, name: "그레이브즈", tier: OneTier },
  { image: ViegoSquare, name: "비에고", tier: OneTier },
  { image: TaliyahSquare, name: "탈리야", tier: OneTier },
  { image: TalonSquare, name: "탈론", tier: OneTier },
  { image: RekSaiSquare, name: "렉사이", tier: OneTier },
];

const BOTTIERCHAMPS: TierChampInfo[] = [
  { image: EzrealSquare, name: "이즈리얼", tier: ZeroTier },
  { image: LucianSquare, name: "루시안", tier: ZeroTier },
  { image: KaiSaSquare, name: "카이사", tier: OneTier },
  { image: KogMawSquare, name: "코그모", tier: OneTier },
  { image: JhinSquare, name: "진", tier: OneTier },
  { image: SamiraSquare, name: "사미라", tier: OneTier },
];

const SUPTIERCHAMPS: TierChampInfo[] = [
  { image: ZileanSquare, name: "질리언", tier: OneTier },
  { image: SennaSquare, name: "세나", tier: OneTier },
  { image: LuluSquare, name: "룰루", tier: OneTier },
  { image: RenataGlascSquare, name: "레나타 글라스크", tier: OneTier },
  { image: YuumiSquare, name: "유미", tier: OneTier },
  { image: BlitzcrankSquare, name: "블리츠크랭크", tier: OneTier },
];

const SummonersRiftTier = () => {
  const [position, setPosition] = useState<Position>(Position.TOP);
  const [tierChamps, setTierChamps] = useState<TierChampInfo[]>(TOPTIERCHAMPS);
  const handleChangePosition = (p: Position) => setPosition(p);

  useEffect(() => {
    switch (position) {
      case Position.TOP:
        setTierChamps([...TOPTIERCHAMPS]);
        break;
      case Position.MID:
        setTierChamps([...MIDTIERCHAMPS]);
        break;
      case Position.JUNGLE:
        setTierChamps([...JUNGLETIERCHAMPS]);
        break;
      case Position.BOT:
        setTierChamps([...BOTTIERCHAMPS]);
        break;
      case Position.SUP:
        setTierChamps([...SUPTIERCHAMPS]);
        break;
    }
  }, [position]);

  return (
    <>
      <div className="flex flex-1 items-center justify-center">
        {/* 가운데 원 */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, type: "tween", delay: 0.5 },
          }}
          className="relative flex aspect-square w-60 items-center justify-center rounded-full bg-rose-500 text-white ring-4 ring-rose-500 ring-offset-4 ring-offset-zinc-700"
        >
          {/* 원 내부 포지션 문양 */}
          {position === Position.TOP && (
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, type: "tween" },
              }}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              icon-lane=""
              className="aspect-square w-20 fill-zinc-900"
            >
              <path
                d="M2.82 11.88L0 14.69V2.82V0H2.82H14.69L11.88 2.82H2.82V11.88Z"
                className="fill-zinc-100"
              ></path>
              <path
                d="M13.1801 4.13V13.18H4.13006L1.31006 16H13.1801H16.0001V13.18V1.31L13.1801 4.13Z"
                className="svg-group2"
              ></path>
              <path
                d="M10.15 5.85H5.84998V10.15H10.15V5.85Z"
                className="svg-group2"
              ></path>
            </motion.svg>
          )}
          {position === Position.JUNGLE && (
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, type: "tween" },
              }}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              icon-lane=""
              className="aspect-square w-20 fill-rose-100"
            >
              <path d="M3.54999 11.48C3.63717 10.1999 3.45533 8.91563 3.01614 7.71001C2.57696 6.5044 1.89017 5.40412 1 4.48C1 4.48 5 6.48 5.88 9.48C6.32637 6.16159 5.55546 2.7938 3.70999 -7.62939e-06C3.70999 -7.62939e-06 11.25 8.92999 8.22 16C6.97149 14.1962 5.38564 12.6512 3.54999 11.45V11.48ZM10.11 8.99999C9.87314 7.95564 9.49996 6.94699 9 5.99999C10.0703 3.83661 11.4147 1.82004 13 -7.62939e-06C13 -7.62939e-06 10.56 4.39999 10.78 7.63999C10.495 8.06022 10.2695 8.5179 10.11 8.99999ZM11 13C11 13 11.21 6.47999 16 3.99999C16 3.99999 13 7 13.5 10.74C13.5 10.74 11.37 12.14 11 13Z"></path>
            </motion.svg>
          )}
          {position === Position.MID && (
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, type: "tween" },
              }}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              icon-lane=""
              className="aspect-square w-20 fill-zinc-900"
            >
              <path d="M0 0V11.09L2.82 8.27V2.82H8.27L11.09 0H0Z"></path>
              <path d="M13.18 7.73V13.18H7.73003L4.91003 16H16V4.91L13.18 7.73Z"></path>
              <path
                className={`fill-rose-500 transition-all duration-300 ${
                  position === Position.MID ? "fill-rose-100" : ""
                }`}
                d="M13.37 0L0 13.37V16H2.63L16 2.63V0H13.37Z"
              ></path>
            </motion.svg>
          )}
          {position === Position.BOT && (
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, type: "tween" },
              }}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              icon-lane=""
              className="aspect-square w-20 fill-zinc-900"
            >
              <path d="M2.82 11.88L0 14.69V2.82V0H2.82H14.69L11.88 2.82H2.82V11.88Z"></path>
              <path
                className={`fill-rose-500 transition-all duration-300 ${
                  position === Position.BOT ? "fill-rose-100" : ""
                }`}
                d="M13.1801 4.13V13.18H4.13006L1.31006 16H13.1801H16.0001V13.18V1.31L13.1801 4.13Z"
              ></path>
              <path d="M10.15 5.85H5.84998V10.15H10.15V5.85Z"></path>
            </motion.svg>
          )}
          {position === Position.SUP && (
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, type: "tween" },
              }}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              icon-lane=""
              className="aspect-square w-20 fill-zinc-100"
            >
              <path d="M8.08593 6.56L7.68164 6L6.06445 14.34L8.08593 16L10.1074 14.34L8.49023 6L8.08593 6.56Z"></path>
              <path d="M5.81177 0L5.05371 1.06L8.08593 4L11.1181 1.06L10.3601 0H5.81177Z"></path>
              <path d="M15.9999 3.15001H11.3505L9.47058 4.97L10.7037 8.83L13.5641 7.71001L11.7852 5.40001C11.7852 5.40001 15.6563 5.64001 15.9696 3.15001"></path>
              <path d="M4.60897 3.15001H0C0.303222 5.64001 4.18447 5.40001 4.18447 5.40001L2.40556 7.71001L5.28618 8.82001L6.5294 4.96001L4.60897 3.15001Z"></path>
            </motion.svg>
          )}
          {/* 주변 챔피언 위성 */}
          <div>
            <motion.div
              variants={ContainerAnimate}
              initial="enter"
              animate="animate"
              className="absolute top-0 left-0 h-full w-full"
            >
              {tierChamps.map((champInfo, i) => {
                //   top
                if (i === 0) {
                  return (
                    <div className="group absolute top-0 left-1/2 aspect-square w-10 -translate-x-1/2 -translate-y-full transform rounded-full bg-cover bg-center">
                      <motion.div
                        variants={ItemAnimate}
                        className="aspect-square w-10"
                      >
                        <ChampPortrait
                          image={champInfo.image}
                          name={champInfo.name}
                          tier={champInfo.tier}
                        />
                      </motion.div>
                    </div>
                  );
                } else if (i === 1) {
                  // right top
                  return (
                    <div className="group absolute top-[10%] left-full aspect-square w-10 -translate-x-1/2 transform rounded-full bg-cover bg-center">
                      <motion.div
                        variants={ItemAnimate}
                        className="aspect-square w-10"
                      >
                        <ChampPortrait
                          image={champInfo.image}
                          name={champInfo.name}
                          tier={champInfo.tier}
                        />
                      </motion.div>
                    </div>
                  );
                } else if (i === 2) {
                  // right bottom
                  return (
                    <div className="group absolute top-[70%] left-full aspect-square w-10 -translate-x-1/2  transform rounded-full bg-cover bg-center ">
                      <motion.div
                        variants={ItemAnimate}
                        className="aspect-square w-10"
                      >
                        <ChampPortrait
                          image={champInfo.image}
                          name={champInfo.name}
                          tier={champInfo.tier}
                        />
                      </motion.div>
                    </div>
                  );
                } else if (i === 3) {
                  // bottom
                  return (
                    <div className="group absolute bottom-0 left-1/2 aspect-square w-10 -translate-x-1/2 translate-y-full  transform rounded-full bg-cover bg-center">
                      <motion.div
                        variants={ItemAnimate}
                        className="aspect-square w-10"
                      >
                        <ChampPortrait
                          image={champInfo.image}
                          name={champInfo.name}
                          tier={champInfo.tier}
                        />
                      </motion.div>
                    </div>
                  );
                } else if (i === 4) {
                  // left bottom
                  return (
                    <div
                      className="group absolute top-[70%] left-0 aspect-square 
            w-10 -translate-x-1/2 transform  rounded-full bg-cover bg-center"
                    >
                      <motion.div
                        variants={ItemAnimate}
                        className="aspect-square w-10"
                      >
                        <ChampPortrait
                          image={champInfo.image}
                          name={champInfo.name}
                          tier={champInfo.tier}
                        />
                      </motion.div>
                    </div>
                  );
                } else if (i === 5) {
                  // left top
                  return (
                    <div className="group absolute top-[10%] left-0 aspect-square w-10 -translate-x-1/2 transform rounded-full bg-cover bg-center">
                      <motion.div
                        variants={ItemAnimate}
                        className="aspect-square w-10"
                      >
                        <ChampPortrait
                          image={champInfo.image}
                          name={champInfo.name}
                          tier={champInfo.tier}
                        />
                      </motion.div>
                    </div>
                  );
                }
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* 포지션 버튼 */}
      <div className="grid w-full grid-cols-5">
        {/* top */}
        <button
          onClick={() => handleChangePosition(Position.TOP)}
          className={`group flex h-full w-full items-center justify-center p-3 opacity-50 transition-all duration-300 ${
            position === Position.TOP ? "bg-rose-500 opacity-100" : ""
          }`}
        >
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            icon-lane=""
            className="aspect-square w-6 fill-zinc-800"
          >
            <path
              d="M2.82 11.88L0 14.69V2.82V0H2.82H14.69L11.88 2.82H2.82V11.88Z"
              className={`fill-rose-500 transition-all duration-300 ${
                position === Position.TOP ? "fill-rose-100" : ""
              }`}
            ></path>
            <path
              d="M13.1801 4.13V13.18H4.13006L1.31006 16H13.1801H16.0001V13.18V1.31L13.1801 4.13Z"
              className="svg-group2"
            ></path>
            <path
              d="M10.15 5.85H5.84998V10.15H10.15V5.85Z"
              className="svg-group2"
            ></path>
          </svg>
        </button>
        {/* jungle */}
        <button
          onClick={() => handleChangePosition(Position.JUNGLE)}
          className={`group flex h-full w-full items-center justify-center p-3 opacity-50 transition-all duration-300 ${
            position === Position.JUNGLE ? "bg-rose-500 opacity-100" : ""
          } `}
        >
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            icon-lane=""
            className={`aspect-square w-6 fill-rose-500 transition-all duration-300 ${
              position === Position.JUNGLE ? "fill-rose-100" : ""
            }`}
          >
            <path d="M3.54999 11.48C3.63717 10.1999 3.45533 8.91563 3.01614 7.71001C2.57696 6.5044 1.89017 5.40412 1 4.48C1 4.48 5 6.48 5.88 9.48C6.32637 6.16159 5.55546 2.7938 3.70999 -7.62939e-06C3.70999 -7.62939e-06 11.25 8.92999 8.22 16C6.97149 14.1962 5.38564 12.6512 3.54999 11.45V11.48ZM10.11 8.99999C9.87314 7.95564 9.49996 6.94699 9 5.99999C10.0703 3.83661 11.4147 1.82004 13 -7.62939e-06C13 -7.62939e-06 10.56 4.39999 10.78 7.63999C10.495 8.06022 10.2695 8.5179 10.11 8.99999ZM11 13C11 13 11.21 6.47999 16 3.99999C16 3.99999 13 7 13.5 10.74C13.5 10.74 11.37 12.14 11 13Z"></path>
          </svg>
        </button>
        {/* mid */}
        <button
          onClick={() => handleChangePosition(Position.MID)}
          className={`group flex h-full w-full items-center justify-center p-3 opacity-50 transition-all duration-300 ${
            position === Position.MID ? "bg-rose-500 opacity-100" : ""
          }`}
        >
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            icon-lane=""
            className="aspect-square w-6 fill-zinc-900"
          >
            <path d="M0 0V11.09L2.82 8.27V2.82H8.27L11.09 0H0Z"></path>
            <path d="M13.18 7.73V13.18H7.73003L4.91003 16H16V4.91L13.18 7.73Z"></path>
            <path
              className={`fill-rose-500 transition-all duration-300 ${
                position === Position.MID ? "fill-rose-100" : ""
              }`}
              d="M13.37 0L0 13.37V16H2.63L16 2.63V0H13.37Z"
            ></path>
          </svg>
        </button>
        {/* bot */}
        <button
          onClick={() => handleChangePosition(Position.BOT)}
          className={`group flex h-full w-full items-center justify-center p-3 opacity-50 transition-all duration-300 ${
            position === Position.BOT ? "bg-rose-500 opacity-100" : ""
          }`}
        >
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            icon-lane=""
            className="aspect-square w-6 fill-zinc-900"
          >
            <path d="M2.82 11.88L0 14.69V2.82V0H2.82H14.69L11.88 2.82H2.82V11.88Z"></path>
            <path
              className={`fill-rose-500 transition-all duration-300 ${
                position === Position.BOT ? "fill-rose-100" : ""
              }`}
              d="M13.1801 4.13V13.18H4.13006L1.31006 16H13.1801H16.0001V13.18V1.31L13.1801 4.13Z"
            ></path>
            <path d="M10.15 5.85H5.84998V10.15H10.15V5.85Z"></path>
          </svg>
        </button>
        {/* sup */}
        <button
          onClick={() => handleChangePosition(Position.SUP)}
          className={`group flex h-full w-full items-center justify-center p-3 opacity-50 transition-all duration-300  ${
            position === Position.SUP ? "bg-rose-500 opacity-100" : ""
          }`}
        >
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            icon-lane=""
            className={`aspect-square w-6 fill-rose-500 transition-all duration-300  ${
              position === Position.SUP ? "fill-rose-100" : ""
            } `}
          >
            <path d="M8.08593 6.56L7.68164 6L6.06445 14.34L8.08593 16L10.1074 14.34L8.49023 6L8.08593 6.56Z"></path>
            <path d="M5.81177 0L5.05371 1.06L8.08593 4L11.1181 1.06L10.3601 0H5.81177Z"></path>
            <path d="M15.9999 3.15001H11.3505L9.47058 4.97L10.7037 8.83L13.5641 7.71001L11.7852 5.40001C11.7852 5.40001 15.6563 5.64001 15.9696 3.15001"></path>
            <path d="M4.60897 3.15001H0C0.303222 5.64001 4.18447 5.40001 4.18447 5.40001L2.40556 7.71001L5.28618 8.82001L6.5294 4.96001L4.60897 3.15001Z"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default SummonersRiftTier;
