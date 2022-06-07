import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import SummonersRiftTier from "../components/Poro/index/SummonersRiftTier";
import AramTier from "../components/Poro/index/AramTier";
import CircleInput from "../components/Poro/index/CircleInput";
import PoroGGInfo from "../components/Poro/index/PoroGGInfo";
import PoroGGDesktop from "../components/Poro/index/PoroGGDesktop";
import PatchNote from "../components/Poro/index/PatchNote";

const ContainerAnimate: Variants = {
  enter: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const ItemAnimate: Variants = {
  enter: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

enum ModalType {
  CLASSIC_TIER,
  ARAM_TIER,
  SEARCH,
  PORO_INFO,
  DESKTOP_APP,
  PATCH_NOTE,
}

const Poro: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType | null>(null);
  const menuAnimation = useAnimation();

  useEffect(() => {
    if (isMenuOpen) {
      menuAnimation.start({
        y: 0,
        transition: { duration: 0.5, type: "tween" },
      });
    } else {
      menuAnimation.start({
        y: "70%",
        transition: { duration: 0.5, type: "tween" },
      });
    }
  }, [isMenuOpen, menuAnimation]);

  return (
    <Layout>
      <div className="relative flex h-[100vh] w-full flex-col overflow-hidden">
        {/* header */}
        <header className="flex  w-full items-center justify-between bg-zinc-800 p-5 px-5 pb-0">
          <Link href={"/poro"}>
            <a>
              <img
                src="https://poro.gg/images/logo/logo-porogg-w-r.png"
                alt="poro.ggLogo"
              />
            </a>
          </Link>
          <div
            onClick={() => setIsMenuOpen(true)}
            className="rounded-ful aspect-square w-12 cursor-pointer grayscale hover:grayscale-0"
          >
            <img
              className="h-full w-full object-cover object-center"
              src="https://static-s.aa-cdn.net/img/gp/20600011369673/QOqlWNtzNVpFcxQHZPwtA4JvBcdXLAUXMM-XC0iiTIyRwkdxYXdSgqx63Jmf_C3UhSE=s300?v=1"
              alt="poro"
            />
          </div>
        </header>
        <main className="relative flex-1 bg-zinc-800 p-5 pb-20">
          {/* container */}
          <motion.div
            variants={ContainerAnimate}
            initial="enter"
            animate="animate"
            className="grid h-full w-full grid-cols-2 grid-rows-4 gap-3 rounded-2xl bg-zinc-900 p-5"
          >
            {/* 소환사협곡 티어 */}
            <motion.div variants={ItemAnimate}>
              <div className="group relative h-full w-full transform overflow-hidden rounded-2xl ring-amber-300 ring-offset-4 ring-offset-zinc-900 transition-all duration-200 hover:z-10 hover:shadow-2xl hover:shadow-amber-300 hover:ring">
                {/* bg */}
                <div className="absolute top-0 left-0 h-full w-full transform bg-zinc-800 p-3 transition-all duration-500 group-hover:scale-110">
                  <div className="h-full w-full transform opacity-50">
                    <svg
                      className="h-full w-full fill-amber-300 opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M406.1 61.65C415.4 63.09 419.4 74.59 412.6 81.41L374.6 118.1L383.6 170.1C384.1 179.5 375.3 186.7 366.7 182.4L320.2 157.9L273.3 182.7C264.7 187 255 179.8 256.4 170.5L265.4 118.4L227.4 81.41C220.6 74.59 224.6 63.09 233.9 61.65L286.2 54.11L309.8 6.332C314.1-2.289 326.3-1.93 330.2 6.332L353.8 54.11L406.1 61.65zM384 256C401.7 256 416 270.3 416 288V480C416 497.7 401.7 512 384 512H256C238.3 512 224 497.7 224 480V288C224 270.3 238.3 256 256 256H384zM160 320C177.7 320 192 334.3 192 352V480C192 497.7 177.7 512 160 512H32C14.33 512 0 497.7 0 480V352C0 334.3 14.33 320 32 320H160zM448 416C448 398.3 462.3 384 480 384H608C625.7 384 640 398.3 640 416V480C640 497.7 625.7 512 608 512H480C462.3 512 448 497.7 448 480V416z" />
                    </svg>
                  </div>
                </div>
                {/* content */}
                <div
                  onClick={() => {
                    setModalType(ModalType.CLASSIC_TIER);
                    setIsModalOpen(true);
                  }}
                  className="absolute top-0 left-0 flex h-full w-full cursor-pointer items-center justify-center"
                >
                  <span className="text-center text-lg font-bold text-white">
                    소환사 협곡 티어
                  </span>
                </div>
              </div>
            </motion.div>
            {/* 칼바람나락 티어 */}
            <motion.div variants={ItemAnimate}>
              <div className="group relative h-full w-full transform overflow-hidden rounded-2xl ring-blue-300 ring-offset-4 ring-offset-zinc-900 transition-all duration-200 hover:shadow-2xl hover:shadow-blue-300 hover:ring">
                {/* bg */}
                <div className="absolute top-0 left-0 h-full w-full transform bg-slate-800 p-3 transition-all duration-500 group-hover:scale-110">
                  <div className="h-full w-full transform opacity-50">
                    <svg
                      className="h-full w-full fill-blue-300 opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M406.1 61.65C415.4 63.09 419.4 74.59 412.6 81.41L374.6 118.1L383.6 170.1C384.1 179.5 375.3 186.7 366.7 182.4L320.2 157.9L273.3 182.7C264.7 187 255 179.8 256.4 170.5L265.4 118.4L227.4 81.41C220.6 74.59 224.6 63.09 233.9 61.65L286.2 54.11L309.8 6.332C314.1-2.289 326.3-1.93 330.2 6.332L353.8 54.11L406.1 61.65zM384 256C401.7 256 416 270.3 416 288V480C416 497.7 401.7 512 384 512H256C238.3 512 224 497.7 224 480V288C224 270.3 238.3 256 256 256H384zM160 320C177.7 320 192 334.3 192 352V480C192 497.7 177.7 512 160 512H32C14.33 512 0 497.7 0 480V352C0 334.3 14.33 320 32 320H160zM448 416C448 398.3 462.3 384 480 384H608C625.7 384 640 398.3 640 416V480C640 497.7 625.7 512 608 512H480C462.3 512 448 497.7 448 480V416z" />
                    </svg>
                  </div>
                </div>
                {/* content */}
                <div
                  onClick={() => {
                    setModalType(ModalType.ARAM_TIER);
                    setIsModalOpen(true);
                  }}
                  className="absolute top-0 left-0 flex h-full w-full cursor-pointer items-center justify-center"
                >
                  <span className="text-center text-lg font-bold text-white">
                    칼바람나락 티어
                  </span>
                </div>
              </div>
            </motion.div>
            {/* 전적 검색 */}
            <motion.div
              className="col-span-2 h-full w-full"
              variants={ItemAnimate}
            >
              <div className="group relative  h-full w-full  transform overflow-hidden rounded-2xl ring-rose-500 ring-offset-4 ring-offset-zinc-900 transition-all duration-200 hover:shadow-2xl hover:shadow-rose-500 hover:ring">
                {/* poro red bg */}
                <div className="absolute top-0 left-0 flex h-full w-full transform flex-wrap items-center justify-center gap-3 bg-rose-500 p-3 transition-all duration-500 group-hover:scale-110">
                  {Array.from(Array(200).keys()).map((_, i) => (
                    <div
                      style={{
                        backgroundImage: `url('https://static-s.aa-cdn.net/img/gp/20600011369673/QOqlWNtzNVpFcxQHZPwtA4JvBcdXLAUXMM-XC0iiTIyRwkdxYXdSgqx63Jmf_C3UhSE=s300?v=1')`,
                      }}
                      key={i}
                      className="aspect-square w-10 rotate-[-60deg] transform rounded-full bg-contain bg-center bg-no-repeat opacity-50"
                    ></div>
                  ))}
                </div>
                {/* content */}
                <div
                  onClick={() => {
                    setModalType(ModalType.SEARCH);
                    setIsModalOpen(true);
                  }}
                  className="absolute top-0 left-0 flex h-full w-full cursor-pointer items-center justify-center"
                >
                  <span className="text-center text-xl font-bold text-white">
                    전적 검색
                  </span>
                </div>
              </div>
            </motion.div>
            {/* PORO.GG */}
            <motion.div variants={ItemAnimate}>
              <div className="group relative h-full w-full transform overflow-hidden rounded-2xl ring-zinc-500 ring-offset-4 ring-offset-zinc-900 transition-all duration-200 hover:shadow-2xl hover:shadow-zinc-500 hover:ring">
                {/* bg */}
                <div className="absolute top-0 left-0  h-full w-full  transform bg-zinc-500 opacity-50 transition-all duration-500 group-hover:scale-110">
                  <div
                    style={{
                      backgroundImage: `url('https://static-s.aa-cdn.net/img/gp/20600011369673/QOqlWNtzNVpFcxQHZPwtA4JvBcdXLAUXMM-XC0iiTIyRwkdxYXdSgqx63Jmf_C3UhSE=s300?v=1')`,
                    }}
                    className="h-full w-full bg-contain bg-center bg-no-repeat opacity-50"
                  ></div>
                  <div className="absolute top-0 right-0 m-2">
                    <svg
                      className="aspect-square w-8 fill-black opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M204.3 32.01H96c-52.94 0-96 43.06-96 96c0 17.67 14.31 31.1 32 31.1s32-14.32 32-31.1c0-17.64 14.34-32 32-32h108.3C232.8 96.01 256 119.2 256 147.8c0 19.72-10.97 37.47-30.5 47.33L127.8 252.4C117.1 258.2 112 268.7 112 280v40c0 17.67 14.31 31.99 32 31.99s32-14.32 32-31.99V298.3L256 251.3c39.47-19.75 64-59.42 64-103.5C320 83.95 268.1 32.01 204.3 32.01zM144 400c-22.09 0-40 17.91-40 40s17.91 39.1 40 39.1s40-17.9 40-39.1S166.1 400 144 400z" />
                    </svg>
                  </div>
                </div>
                {/* content */}
                <div
                  onClick={() => {
                    setModalType(ModalType.PORO_INFO);
                    setIsModalOpen(true);
                  }}
                  className="absolute top-0 left-0 flex h-full w-full cursor-pointer items-center justify-center"
                >
                  <span className="text-center text-lg font-bold text-white">
                    PORO.GG
                  </span>
                </div>
              </div>
            </motion.div>
            {/* DESKTOP_APP */}
            <motion.div variants={ItemAnimate}>
              <div className="group relative h-full w-full transform overflow-hidden rounded-2xl ring-teal-500 ring-offset-4 ring-offset-zinc-900 transition-all duration-200 hover:shadow-2xl hover:shadow-teal-500 hover:ring">
                {/* bg */}
                <div className="absolute top-0 left-0 flex h-full w-full transform flex-wrap items-center  justify-center gap-3 bg-teal-500 p-3 transition-all duration-500 group-hover:scale-110">
                  {Array.from(Array(100).keys()).map((_, i) => (
                    <div
                      style={{
                        backgroundImage: `url('https://poro.gg/images/img-urf-oval.png')`,
                      }}
                      key={i}
                      className="aspect-square w-10 rotate-[-60deg] transform rounded-full bg-contain bg-center bg-no-repeat opacity-50"
                    ></div>
                  ))}
                </div>
                {/* content */}
                <div
                  onClick={() => {
                    setModalType(ModalType.DESKTOP_APP);
                    setIsModalOpen(true);
                  }}
                  className="absolute top-0 left-0 flex h-full w-full cursor-pointer items-center justify-center"
                >
                  <span className="text-center text-lg font-bold text-white">
                    Desktop App
                  </span>
                </div>
              </div>
            </motion.div>
            {/* 챔피언 밸런싱 */}
            <motion.div
              className="col-span-2 h-full w-full"
              variants={ItemAnimate}
            >
              <div className="group relative h-full w-full transform overflow-hidden rounded-2xl ring-black ring-offset-4 ring-offset-zinc-900 transition-all duration-200 hover:shadow-2xl hover:shadow-black hover:ring">
                {/* bg */}
                <div className="absolute top-0 left-0 flex h-full w-full transform flex-wrap items-center justify-center gap-3 bg-black p-3 transition-all duration-500 group-hover:scale-110">
                  {Array.from(Array(200).keys()).map((_, i) => (
                    <div
                      key={i}
                      className="rotate-[-60deg] transform opacity-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 stroke-rose-300 opacity-50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
                {/* content */}
                <div
                  onClick={() => {
                    setModalType(ModalType.PATCH_NOTE);
                    setIsModalOpen(true);
                  }}
                  className="absolute top-0 left-0 flex h-full w-full cursor-pointer items-center justify-center"
                >
                  <span className="text-center text-lg font-bold text-white">
                    v12.10 챔피언 밸런싱
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </main>
        {/* 맨 밑에 있는 스테이지 변경 드롭다운 */}
        <motion.aside
          initial={{ y: "70%" }}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          animate={menuAnimation}
          className="absolute bottom-0 left-0 z-20  w-full cursor-pointer bg-black p-5 pb-10"
        >
          <div className="relative flex h-full w-full flex-col items-center gap-10">
            {/* top round icon */}
            <div className="w-10 rounded-full bg-zinc-700 p-1"></div>
            <div className="grid h-20 w-full grid-cols-4 gap-3 ">
              <button className="flex h-full w-full items-center justify-center rounded-3xl bg-rose-500 ring-rose-500 ring-offset-4 ring-offset-black transition-all duration-300 hover:ring">
                <span className="font-medium">홈</span>
              </button>
              <button className="flex h-full w-full items-center justify-center rounded-3xl bg-rose-500 ring-rose-500 ring-offset-4 ring-offset-black transition-all duration-300 hover:ring">
                <span className="font-medium">소환사의 협곡</span>
              </button>
              <button className="flex h-full w-full items-center justify-center rounded-3xl bg-rose-500 ring-rose-500 ring-offset-4 ring-offset-black transition-all duration-300 hover:ring">
                <span className="font-medium">칼바람 나락</span>
              </button>
              <button className="flex h-full w-full items-center justify-center rounded-3xl bg-rose-500 ring-rose-500 ring-offset-4 ring-offset-black transition-all duration-300 hover:ring">
                <span className="font-medium">우르프</span>
              </button>
            </div>
          </div>
        </motion.aside>
        {/* universal modal */}
        <AnimatePresence>
          {isModalOpen ? (
            <motion.div className="absolute top-0 left-0 z-30 h-full w-full overflow-hidden">
              {/* bg */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, type: "tween" },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.5, type: "tween" },
                }}
                onClick={() => setIsModalOpen(false)}
                className="absolute top-0 left-0 h-full w-full cursor-pointer bg-transparent backdrop-blur-sm"
              ></motion.div>
              {/* content */}
              {modalType === ModalType.SEARCH ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0,
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5, type: "tween" },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                    transition: { duration: 0.5, type: "tween" },
                  }}
                  className="absolute top-1/2 left-1/2 flex w-[90%] transform flex-col rounded-md p-5"
                >
                  <CircleInput />
                </motion.div>
              ) : modalType === ModalType.PORO_INFO ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, type: "tween" },
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    transition: { duration: 0.5, type: "tween" },
                  }}
                  className="absolute top-1/2 left-1/2 flex w-[90%] transform flex-col rounded-md p-5"
                >
                  <PoroGGInfo />
                </motion.div>
              ) : modalType === ModalType.DESKTOP_APP ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, type: "tween" },
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    transition: { duration: 0.5, type: "tween" },
                  }}
                  className="absolute top-1/2 left-1/2 flex w-[90%] transform flex-col rounded-md p-5"
                >
                  <PoroGGDesktop />
                </motion.div>
              ) : modalType === ModalType.PATCH_NOTE ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, type: "tween" },
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    transition: { duration: 0.5, type: "tween" },
                  }}
                  className="absolute top-1/2 left-1/2 flex w-[90%] transform flex-col rounded-md p-5"
                >
                  <PatchNote />
                </motion.div>
              ) : (
                <motion.main
                  initial={{
                    opacity: 0,
                    x: "-50%",
                    y:
                      typeof window === undefined ? "-50%" : window.outerHeight,
                  }}
                  animate={{
                    opacity: 1,
                    y: "-50%",
                    transition: { duration: 0.5, type: "tween" },
                  }}
                  exit={{
                    opacity: 0,
                    y:
                      typeof window === undefined ? "-50%" : window.outerHeight,
                    transition: {
                      duration: 0.5,
                      type: "tween",
                    },
                  }}
                  className="absolute top-1/2 left-1/2 flex h-[90%] w-[90%]  flex-col overflow-auto rounded-md bg-gradient-to-b from-zinc-800 to-zinc-700"
                >
                  <header className="flex w-full items-center justify-between bg-zinc-800 p-3">
                    <span className="text-lg font-medium text-white">
                      {modalType === ModalType.CLASSIC_TIER
                        ? "소환사 협곡 티어"
                        : modalType === ModalType.ARAM_TIER
                        ? "칼바람나락 티어"
                        : ""}
                    </span>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="rounded-full p-1 transition-all duration-200 hover:bg-zinc-900"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="aspect-square w-7 fill-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </header>
                  {modalType === ModalType.CLASSIC_TIER && (
                    <SummonersRiftTier />
                  )}
                  {modalType === ModalType.ARAM_TIER && <AramTier />}
                </motion.main>
              )}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default Poro;
