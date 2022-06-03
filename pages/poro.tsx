import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const Poro: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAnimation = useAnimation();

  useEffect(() => {
    if (isMenuOpen) {
      menuAnimation.start({ y: 0 });
    } else {
      menuAnimation.start({ y: "93%" });
    }
  }, [isMenuOpen, menuAnimation]);

  return (
    <Layout>
      <div className="relative flex h-[100vh] w-full flex-col overflow-hidden">
        <header className="flex  w-full items-center justify-between bg-slate-800 p-5 px-5 pb-0">
          {isMenuOpen ? (
            <div className="mr-10 flex-1">
              <form className="relative w-full">
                <input
                  className="w-full rounded-md p-3 pr-10 text-sm font-medium outline-none"
                  type={"text"}
                  placeholder="소환사명 혹은 챔피언 이름"
                />
                <button className="absolute top-1/2 right-1 -translate-y-1/2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="aspect-square w-8 stroke-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </form>
            </div>
          ) : (
            <Link href={"/poro"}>
              <a>
                <img
                  src="https://poro.gg/images/logo/logo-porogg-w-r.png"
                  alt="poro.ggLogo"
                />
              </a>
            </Link>
          )}
          <div className="rounded-ful aspect-square w-12 cursor-pointer grayscale hover:grayscale-0">
            <img
              className="h-full w-full object-cover object-center"
              src="https://static-s.aa-cdn.net/img/gp/20600011369673/QOqlWNtzNVpFcxQHZPwtA4JvBcdXLAUXMM-XC0iiTIyRwkdxYXdSgqx63Jmf_C3UhSE=s300?v=1"
              alt="poro"
            />
          </div>
        </header>
        <main className="relative flex-1 bg-slate-800 p-5 pb-20">
          <div className="grid h-full w-full grid-cols-2 grid-rows-4 gap-3 rounded-2xl bg-slate-900 p-5">
            {/* 소환사협곡 티어 */}
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              {/* bg */}
              <div className="absolute top-0 left-0 h-full w-full bg-slate-800 p-3">
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
              <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
                <span className="text-center text-2xl font-bold text-white">
                  소환사 협곡 티어
                </span>
              </div>
            </div>
            {/* 칼바람나락 티어 */}
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              {/* bg */}
              <div className="absolute top-0 left-0 h-full w-full bg-slate-800 p-3">
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
              <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  칼바람나락 티어
                </span>
              </div>
            </div>
            {/* 전적 검색 */}
            <div className="relative col-span-2 h-full  w-full overflow-hidden  rounded-2xl">
              {/* poro red bg */}
              <div className="absolute top-0 left-0 flex h-full w-full flex-wrap items-center justify-center gap-5 bg-rose-500 p-5">
                {Array.from(Array(50).keys()).map((_, i) => (
                  <div
                    style={{
                      backgroundImage: `url('https://static-s.aa-cdn.net/img/gp/20600011369673/QOqlWNtzNVpFcxQHZPwtA4JvBcdXLAUXMM-XC0iiTIyRwkdxYXdSgqx63Jmf_C3UhSE=s300?v=1')`,
                    }}
                    key={i}
                    className="aspect-square w-10 rotate-[-60deg] transform rounded-full bg-contain bg-center bg-no-repeat opacity-50"
                  ></div>
                ))}
              </div>
              <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
                <span className="text-3xl font-bold text-white">전적 검색</span>
              </div>
            </div>
            {/* PORO.GG */}
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              {/* bg */}
              <div className="absolute top-0 left-0  h-full w-full  bg-slate-500 opacity-50">
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
              <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
                <span className="text-2xl font-bold text-white">PORO.GG</span>
              </div>
            </div>
            {/* DESKTOP_APP */}
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              {/* bg */}
              <div className="absolute top-0 left-0 flex h-full w-full flex-wrap items-center justify-center  gap-3 bg-teal-500 p-1">
                {Array.from(Array(50).keys()).map((_, i) => (
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
              <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  Desktop App
                </span>
              </div>
            </div>
            {/* 챔피언 밸런싱 */}
            <div className="relative col-span-2 h-full w-full overflow-hidden rounded-2xl">
              {/* bg */}
              <div className="absolute top-0 left-0 flex h-full w-full flex-wrap items-center justify-center gap-2 bg-black p-3">
                {Array.from(Array(50).keys()).map((_, i) => (
                  <div key={i} className="rotate-[-60deg] transform opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 stroke-teal-300 opacity-50"
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
              <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  v12.10 챔피언 밸런싱
                </span>
              </div>
            </div>
          </div>
        </main>
        {/* 맨 밑에 있는 스테이지 변경 드롭다운 */}
        <motion.aside
          initial={{ y: "93%" }}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          animate={menuAnimation}
          transition={{ duration: 0.5, type: "tween" }}
          className="absolute bottom-0 left-0 h-[89vh] w-full cursor-pointer bg-slate-900"
        >
          <div className="relative h-full w-full">
            {/* top round icon */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 transform  rounded-full bg-slate-700 p-1 px-5"></div>
          </div>
        </motion.aside>
      </div>
    </Layout>
  );
};

export default Poro;
