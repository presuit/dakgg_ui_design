import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import AsheSquare from "../../../public/champs/AsheSquare.webp";
import MissFortuneSquare from "../../../public/champs/MissFortuneSquare.webp";
import EzrealSquare from "../../../public/champs/EzrealSquare.webp";
import SennaSquare from "../../../public/champs/SennaSquare.webp";
import JhinSquare from "../../../public/champs/JhinSquare.webp";
import CaitlynSquare from "../../../public/champs/CaitlynSquare.webp";
import JinxSquare from "../../../public/champs/JinxSquare.webp";
import VarusSquare from "../../../public/champs/VarusSquare.webp";
import JannaSquare from "../../../public/champs/JannaSquare.webp";
import MaokaiSquare from "../../../public/champs/MaokaiSquare.webp";
import BrandSquare from "../../../public/champs/BrandSquare.webp";
import JayceSquare from "../../../public/champs/JayceSquare.webp";
import MorganaSquare from "../../../public/champs/MorganaSquare.webp";
import SivirSquare from "../../../public/champs/SivirSquare.webp";
import SwainSquare from "../../../public/champs/SwainSquare.webp";
import GravesSquare from "../../../public/champs/GravesSquare.webp";
import ZeroTier from "../../../public/tiers/ZeroTier.svg";
import OneTier from "../../../public/tiers/OneTier.svg";
import SecondTier from "../../../public/tiers/SecondTier.svg";

const ContainerAnimate: Variants = {
  enter: {},
  animate: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const ItemAnimate: Variants = {
  enter: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

interface IAramChamp {
  name: string;
  image: StaticImageData;
  tier: any;
}

const AramChamps: IAramChamp[] = [
  { name: "애쉬", image: AsheSquare, tier: ZeroTier },
  { name: "미스 포츈", image: MissFortuneSquare, tier: OneTier },
  { name: "이즈리얼", image: EzrealSquare, tier: OneTier },
  { name: "세나", image: SennaSquare, tier: OneTier },
  { name: "진", image: JhinSquare, tier: OneTier },
  { name: "케이틀린", image: CaitlynSquare, tier: OneTier },
  { name: "징크스", image: JinxSquare, tier: OneTier },
  { name: "바루스", image: VarusSquare, tier: OneTier },
  { name: "잔나", image: JannaSquare, tier: OneTier },
  { name: "마오카이", image: MaokaiSquare, tier: OneTier },
  { name: "브랜드", image: BrandSquare, tier: OneTier },
  { name: "제이스", image: JayceSquare, tier: OneTier },
  { name: "모르가나", image: MorganaSquare, tier: OneTier },
  { name: "시비르", image: SivirSquare, tier: OneTier },
  { name: "스웨인", image: SwainSquare, tier: SecondTier },
  { name: "그레이브즈", image: GravesSquare, tier: SecondTier },
];

const AramTier = () => {
  return (
    <div className=" flex-1 bg-gradient-to-b from-zinc-800 to-zinc-700 p-5">
      <motion.div
        variants={ContainerAnimate}
        initial="enter"
        animate="animate"
        className="relative grid h-full w-full grid-cols-4 grid-rows-4 gap-5"
      >
        {AramChamps.map((info, i) => (
          <motion.div
            variants={ItemAnimate}
            className="flex h-full w-full flex-col items-center justify-center gap-3"
            key={i}
          >
            <div className="relative aspect-square w-full bg-zinc-400">
              <Image src={info.image} alt={info.name} layout="fill" />
              <div className="absolute bottom-0 right-0 z-10 aspect-square w-6 translate-x-1/2 transform">
                <Image src={info.tier} alt="tier" layout="fill" />
              </div>
            </div>
            <h4 className="text-xs font-medium text-white">{info.name}</h4>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AramTier;
