import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
} from "framer-motion";

type LANGUAGE_TYPE = "KO" | "EN";
const outerRoundRotateDegree = [
  "0deg",
  "30deg",
  "60deg",
  "90deg",
  "120deg",
  "150deg",
  "180deg",
  "210deg",
  "240deg",
  "270deg",
  "300deg",
  "330deg",
  "360deg",
];
const innerRoundRotateDegree = [
  "-40deg",
  "-80deg",
  "-120deg",
  "-160deg",
  "-200deg",
  "-240deg",
  "-280deg",
  "-320deg",
  "-360deg",
  "-400deg",
];

const Home: NextPage = () => {
  const [isLanguageDropdown, setIsLanguageDropdown] = useState(false);
  const [language, setLanguage] = useState<LANGUAGE_TYPE>("KO");
  const [isTopperOn, setIsTopperOn] = useState(true);
  const innerRoundAnimation = useAnimation();
  const outerRoundAnimation = useAnimation();
  const topperAnimation = useAnimation();
  // apex and warzone
  const [isApexWarzonTopperOn, setIsApexWarzonTopperOn] = useState(true);
  const apexTopperAnimation = useAnimation();
  const warzoneTopperAnimation = useAnimation();
  const apexWarzonTopperAnimation = useAnimation();
  const apexWarzoneLockIconAnimation = useAnimation();
  // 배틀그라운드, 이터널 리턴
  const [isBattleEternalTopperOn, setIsBattleEternalTopperOn] = useState(true);
  const battleGroundTopperAnimation = useAnimation();
  const eternalReturnTopperAnimation = useAnimation();
  const battleEternalTopperAnimation = useAnimation();
  const battleEternalLockIconAnimation = useAnimation();
  // 메이플
  const [isMapleTopperOn, setIsMapleTopperOn] = useState(true);
  const mapleTopperAnimation = useAnimation();

  const toggleLanguageDropdown = () => setIsLanguageDropdown((prev) => !prev);

  const handleLanguage = (state: LANGUAGE_TYPE) => {
    if (language === state) return;
    setLanguage(state);
    toggleLanguageDropdown();
  };

  useEffect(() => {
    if (isTopperOn) {
      outerRoundAnimation.start({ rotateZ: outerRoundRotateDegree });
      innerRoundAnimation.start({ rotateZ: innerRoundRotateDegree });
    } else {
      (async () => {
        try {
          await innerRoundAnimation.start({
            rotateZ: "-360deg",
            transition: { duration: 1, type: "tween" },
          });
          await outerRoundAnimation.start({
            rotateZ: "360deg",
            transition: { duration: 1, type: "tween" },
          });
          topperAnimation.start({
            y: "100%",
            transition: { duration: 2, type: "tween" },
          });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [isTopperOn, outerRoundAnimation, innerRoundAnimation]);

  // animate 에이펙스, 워존
  useEffect(() => {
    if (!isApexWarzonTopperOn) {
      (async () => {
        try {
          await apexWarzoneLockIconAnimation.start({
            scale: 0,
            opacity: 0,
            transition: { duration: 0.5, type: "tween" },
          });
          apexTopperAnimation.start({
            x: "-100%",
            transition: { duration: 1, type: "tween", delay: 0.5 },
          });
          await warzoneTopperAnimation.start({
            x: "100%",
            transition: { duration: 1, type: "tween", delay: 0.5 },
          });
          apexWarzonTopperAnimation.start({
            display: "none",
          });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [
    isApexWarzonTopperOn,
    apexTopperAnimation,
    warzoneTopperAnimation,
    apexWarzonTopperAnimation,
    apexWarzoneLockIconAnimation,
  ]);

  // animate 배그, 이터널 리턴
  useEffect(() => {
    if (!isBattleEternalTopperOn) {
      (async () => {
        try {
          await battleEternalLockIconAnimation.start({
            scale: 0,
            opacity: 0,
            transition: { duration: 0.5, type: "tween" },
          });
          battleGroundTopperAnimation.start({
            x: "-100%",
            transition: { duration: 1, type: "tween", delay: 0.5 },
          });
          await eternalReturnTopperAnimation.start({
            x: "100%",
            transition: { duration: 1, type: "tween", delay: 0.5 },
          });
          battleEternalTopperAnimation.start({
            display: "none",
          });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [
    isBattleEternalTopperOn,
    battleEternalLockIconAnimation,
    battleGroundTopperAnimation,
    eternalReturnTopperAnimation,
    battleEternalTopperAnimation,
  ]);

  // maple
  useEffect(() => {
    if (!isMapleTopperOn) {
      mapleTopperAnimation.start({
        x: "-100%",
        transition: { duration: 1, type: "tween" },
      });
    }
  }, [isMapleTopperOn, mapleTopperAnimation]);

  // when language modal is open, then should not scroll page
  useEffect(() => {
    if (isLanguageDropdown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isLanguageDropdown]);

  return (
    <Layout>
      <div
        style={{
          backgroundImage: `url('https://dak.gg/images/background/img-background.png')`,
        }}
        className="min-h-screen w-full bg-cover bg-center"
      >
        {/* dak.gg logo header */}
        <header className="flex w-full items-center justify-between p-10 ">
          {/* dak.gg logo */}
          <Link href={"/"}>
            <a>
              <img
                className="w-32 transform transition-all duration-200 hover:scale-110"
                src="https://dak.gg/images/logo/img-dakgg-brandlogo.svg"
                alt="dakggLogo"
              />
            </a>
          </Link>
          {/* dak.gg language radio button */}
          <div
            onClick={toggleLanguageDropdown}
            className="group flex cursor-pointer items-center gap-1 rounded-md border p-2 px-3 text-sm text-white transition-all duration-200 hover:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="aspect-square w-6 group-hover:stroke-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </header>
        {/* dak.gg main */}
        <main className="w-full p-5 pb-20">
          {/* riot package */}
          <div className="relative w-full overflow-hidden rounded-3xl">
            {/* topper */}
            <motion.div
              initial={{ y: 0 }}
              animate={topperAnimation}
              className="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-3xl border-4 border-black backdrop-blur-lg"
            >
              {/* line horizontal */}
              <div className="absolute top-1/2 left-0 h-[1px]  w-full -translate-y-1/2 transform border border-black"></div>
              {/* line vertical */}
              <div className="absolute top-0 left-1/2 h-full  w-[1px] -translate-x-1/2 transform border border-black"></div>
              {/* center  outer round */}
              <motion.div
                initial={{ rotateZ: 0 }}
                animate={outerRoundAnimation}
                transition={{ duration: 20, type: "tween", repeat: Infinity }}
                className="relative aspect-square w-3/4 transform rounded-full border-4 border-black p-5"
              >
                {/* 장식 */}
                <aside>
                  <div
                    style={{
                      backgroundImage: `url('https://play-lh.googleusercontent.com/QOqlWNtzNVpFcxQHZPwtA4JvBcdXLAUXMM-XC0iiTIyRwkdxYXdSgqx63Jmf_C3UhSE')`,
                    }}
                    className="absolute top-0 left-1/2 aspect-square w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-cover bg-center"
                  ></div>
                  <div
                    style={{
                      backgroundImage: `url('https://w.namu.la/s/452135c0507972ac84a1280a7830b665310aa8897090d235be7017e96a666979de058d542893689518a700f8631b368c86467ce37b7d9235e24e61de3e67704c9ede04b4174b9edec93590008ae22984')`,
                    }}
                    className="absolute top-full left-1/2 aspect-square w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-cover bg-center"
                  ></div>
                  <div
                    style={{
                      backgroundImage: `url('https://blog.kakaocdn.net/dn/cuXF0p/btqzDtUzt7z/8zOTizb84rY74Ovk4ovKW1/img.png')`,
                    }}
                    // style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                    className="absolute top-1/2 left-0 aspect-square w-10 -translate-y-1/2 -translate-x-1/2  transform  bg-cover bg-center"
                  ></div>
                  <div
                    style={{
                      backgroundImage: `url('https://play-lh.googleusercontent.com/N_g1NIP-hPm_CQhhpDp9TGApVa6Y693bSYlr84_PgjILOcTxPgvcCjP6GvnaFNy2ZJ4')`,
                    }}
                    className="absolute top-1/2 right-0 aspect-square w-10 -translate-y-1/2 translate-x-1/2  transform  bg-cover bg-center"
                  ></div>
                </aside>
              </motion.div>
              {/* center inner round */}
              <motion.div
                initial={{
                  rotateZ: "-40deg",
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                animate={innerRoundAnimation}
                transition={{
                  duration: 15,
                  type: "tween",
                  repeat: Infinity,
                }}
                className="absolute top-1/2 left-1/2 aspect-square w-2/3 p-3"
              >
                <div className="relative h-full w-full rounded-full border-2 border-black">
                  {/* 장식 */}
                  <aside>
                    <div
                      style={{
                        backgroundImage: `url('https://image.ajunews.com/content/image/2020/05/22/20200522120849557322.png')`,
                      }}
                      className="absolute top-0 left-1/2 aspect-square w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-cover bg-center"
                    ></div>
                    <div
                      style={{
                        backgroundImage: `url('https://w.namu.la/s/73fe51f30d510c4d79b35a8ca35ecf6843f9127b454e593185dbf9d4ee7ff8982fc8bf8687030fa10ba3c71f269557f84b25a7bb071b21e2d81a3ce88f9dfaf916ab93acef8c6a06f89fc3c9d385b588')`,
                      }}
                      className="absolute top-full left-1/2 aspect-square w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-cover bg-center"
                    ></div>
                    <div
                      style={{
                        backgroundImage: `url('https://w.namu.la/s/a4be1bf154c6786ed902865b013f822d7629dcad04a5180cfb07ddd5026d60dcb6106660b8c8a0ab91f49d68947598c85c823945de10e7b1a35931ac027e38809f1e4c47a4b9bb09cf12bea0747b0a89')`,
                      }}
                      // style={{
                      //   clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                      // }}
                      className="absolute top-1/2 left-0 aspect-square w-10 -translate-y-1/2 -translate-x-1/2  rotate-180 transform bg-cover bg-center"
                    ></div>
                    <div
                      style={{
                        backgroundImage: `url('https://cdn-store.leagueoflegends.co.kr/images/v2/emotes/1498.png')`,
                      }}
                      className="absolute top-1/2 right-0 aspect-square w-10 -translate-y-1/2 translate-x-1/2  transform bg-cover bg-center"
                    ></div>
                  </aside>
                </div>
              </motion.div>
              {/* 가장자리 라이엇 로고 */}
              <div className="absolute top-1/2 left-1/2 aspect-square w-2/3 -translate-x-1/2 -translate-y-1/2 transform p-10">
                <img
                  onClick={() => setIsTopperOn(false)}
                  className="h-full w-full transform cursor-pointer rounded-full bg-black object-contain object-center p-8 transition-all duration-200 hover:scale-110"
                  src={
                    "https://seeklogo.com/images/R/riot-games-logo-75627BACBE-seeklogo.com.png"
                  }
                  // src="https://play-lh.googleusercontent.com/QOqlWNtzNVpFcxQHZPwtA4JvBcdXLAUXMM-XC0iiTIyRwkdxYXdSgqx63Jmf_C3UhSE"
                  alt="riotLogo"
                />
              </div>
            </motion.div>
            {/* content */}
            <div className="grid w-full grid-cols-2 grid-rows-2 gap-5 bg-gradient-to-b from-slate-900 to-slate-800 p-5">
              <motion.div className="flex h-full w-full flex-col items-center rounded-3xl shadow shadow-teal-500 ring-teal-500 ring-offset-4 ring-offset-slate-800 transition-all duration-200 hover:shadow-2xl hover:shadow-teal-500 hover:ring">
                <div
                  style={{
                    backgroundImage: `url('https://dak.gg/images/services/bannerbig-lol.jpg')`,
                  }}
                  className="aspect-[1/1.2] w-full rounded-t-3xl bg-cover bg-center"
                ></div>
                <span className="w-full rounded-b-3xl bg-teal-500 py-1 text-center font-bold text-white">
                  리그 오브 레전드
                </span>
              </motion.div>
              <div className="flex h-full w-full flex-col items-center rounded-3xl shadow shadow-violet-500 ring-indigo-500 ring-offset-4 ring-offset-slate-800 transition-all duration-200 hover:shadow-2xl hover:shadow-indigo-500 hover:ring">
                <div
                  style={{
                    backgroundImage: `url('https://dak.gg/images/services/bannerbig-tft.jpg')`,
                  }}
                  className="aspect-[1/1.2] w-full rounded-t-3xl bg-cover bg-center"
                ></div>
                <span className="w-full rounded-b-3xl bg-indigo-500 py-1 text-center font-bold text-white">
                  전략적 팀 전투 TFT
                </span>
              </div>
              <div className="flex h-full w-full flex-col items-center rounded-3xl shadow shadow-indigo-500 ring-indigo-500 ring-offset-4 ring-offset-slate-800 transition-all duration-200 hover:shadow-2xl hover:shadow-indigo-500 hover:ring">
                <div
                  style={{
                    backgroundImage: `url('https://dak.gg/images/services/bannerbig-runeterra.jpg')`,
                  }}
                  className="aspect-[1/1.2] w-full rounded-t-3xl bg-cover bg-center"
                ></div>
                <span className="w-full rounded-b-3xl bg-indigo-900 py-1 text-center font-bold text-white">
                  레전드 오브 룬테라
                </span>
              </div>
              <div className="flex h-full w-full flex-col items-center rounded-3xl shadow shadow-rose-500 ring-rose-500 ring-offset-4 ring-offset-slate-800 transition-all  duration-200 hover:shadow-2xl hover:shadow-rose-500 hover:ring">
                <div
                  style={{
                    backgroundImage: `url('https://dak.gg/images/services/bannerbig-valorant.jpg')`,
                  }}
                  className="aspect-[1/1.2] w-full rounded-t-3xl bg-cover bg-center"
                ></div>
                <span className="w-full rounded-b-3xl bg-rose-500 py-1 text-center font-bold text-white">
                  발로란트
                </span>
              </div>
            </div>
          </div>
          {/* 배그, 이터널 */}
          <div className="relative mt-20 flex w-full flex-col gap-10 overflow-hidden rounded-3xl bg-gradient-to-b from-slate-800 to-zinc-800 p-5">
            {/* 배틀그라운드 */}
            <div className="flex w-full gap-5">
              <div className="relative flex aspect-[1/1.2] w-2/3 flex-col items-center justify-center overflow-hidden rounded-3xl shadow shadow-slate-500 ring-slate-500 ring-offset-4 ring-offset-slate-800 transition-all duration-200 hover:shadow-2xl hover:shadow-slate-500 hover:ring-4">
                {/* 이미지  */}
                <div
                  style={{
                    backgroundImage: `url('https://dak.gg/images/services/bannerbig-pubg.jpg')`,
                  }}
                  className="w-full flex-1 bg-cover bg-center"
                ></div>
                <span className="w-full bg-slate-700 py-1 text-center font-bold text-white">
                  배틀그라운드
                </span>
              </div>
              <div
                style={{
                  backgroundImage: `url('https://mblogthumb-phinf.pstatic.net/MjAxODA3MTRfNzkg/MDAxNTMxNTUyMjM2NzM2.8GEC4kF2zI5zblfvanpBgsJFQOrISefFBYYAE0w5Pggg.rYo0Ftmh4D1h01ngN_zvIDtp8hQ96ziiXaTa5T0PKmwg.PNG.sosrudwk2/4013.png?type=w800')`,
                }}
                className="flex flex-1 bg-contain bg-center bg-no-repeat"
              ></div>
            </div>
            {/* 이터널 리턴 */}
            <div className="flex w-full gap-5">
              <div
                style={{
                  backgroundImage: `url('https://w.namu.la/s/e8033c0e34ab6aacdde70cc9485f8f201e43632a847c76d30cdc3103ea52b55c3c39eb5cb1c88bfde79266a5ecefdd6427a20e9d566a4a8538cbf54a53c936465c3403fae0c54efd4af659a37dc25ab6')`,
                }}
                className="flex-1 bg-contain bg-center bg-no-repeat"
              ></div>
              <div className="relative flex aspect-[1/1.2] w-2/3 flex-col items-center justify-center self-end overflow-hidden rounded-3xl shadow shadow-zinc-500 ring-zinc-500 ring-offset-4 ring-offset-slate-800 transition-all duration-200 hover:shadow-2xl hover:shadow-zinc-500 hover:ring-4">
                {/* 이미지  */}
                <div
                  style={{
                    backgroundImage: `url('https://dak.gg/images/services/bannerbig-bser.jpg?20211223')`,
                  }}
                  className="w-full flex-1 bg-cover bg-center"
                ></div>
                <span className="w-full bg-zinc-700 py-1 text-center font-bold text-white">
                  이터널 리턴
                </span>
              </div>
            </div>
            {/* 뚜껑 */}
            <motion.div
              initial={{ y: 0 }}
              animate={battleEternalTopperAnimation}
              className="absolute top-0 left-0 h-full w-full"
            >
              {/* 뚜겅 해금 아이콘 */}
              <motion.div
                initial={{
                  opacity: 1,
                  scale: 1,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                animate={battleEternalLockIconAnimation}
                onClick={() => setIsBattleEternalTopperOn(false)}
                className="absolute left-1/2 top-1/2 z-10 cursor-pointer rounded-full bg-white p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="aspect-square w-10 stroke-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </motion.div>
              <motion.div
                initial={{ x: 0 }}
                animate={battleGroundTopperAnimation}
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 0% 100% )",
                }}
                className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-slate-800 bg-cover bg-center"
              >
                <span className="z-10 translate-x-[-15%] rotate-[-60deg] transform text-5xl font-bold text-zinc-500">
                  배틀그라운드
                </span>
                <div className="absolute top-0 left-0 grid h-full w-full grid-cols-3 grid-rows-4 gap-3">
                  {Array.from(Array(12).keys()).map((_, i) => (
                    <svg
                      key={i}
                      className="ml-3 h-full w-full fill-slate-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M544 280.9c0-89.17-61.83-165.4-139.6-197.4L352 174.2V49.78C352 39.91 344.1 32 334.2 32H241.8C231.9 32 224 39.91 224 49.78v124.4L171.6 83.53C93.83 115.5 32 191.7 32 280.9L31.99 352h512L544 280.9zM574.7 393.7C572.2 387.8 566.4 384 560 384h-544c-6.375 0-12.16 3.812-14.69 9.656c-2.531 5.875-1.344 12.69 3.062 17.34C7.031 413.8 72.02 480 287.1 480s280.1-66.19 283.6-69C576 406.3 577.2 399.5 574.7 393.7z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 0 }}
                animate={eternalReturnTopperAnimation}
                style={{
                  clipPath: "polygon(100% 0%, 100% 100%, 0% 100% )",
                }}
                className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-zinc-800 bg-cover bg-center"
              >
                <span className="z-10 translate-x-[25%] rotate-[-60deg] transform text-5xl font-bold text-slate-500">
                  이터널 리턴
                </span>
                {/* topper icons */}
                <div className="absolute top-0 left-0 grid h-full w-full grid-cols-3 grid-rows-4 gap-3">
                  {Array.from(Array(12).keys()).map((_, i) => (
                    <svg
                      key={i}
                      className="ml-3 h-full w-full fill-zinc-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M265.2 192C290.6 192 315 199.1 336 211.9V512H144V337.7L90.44 428.3C79.21 447.4 54.68 453.7 35.66 442.4C16.64 431.2 10.33 406.7 21.57 387.7L97.7 258.8C122.2 217.4 166.7 192 214.8 192L265.2 192zM320 80C320 124.2 284.2 160 240 160C195.8 160 160 124.2 160 80C160 35.82 195.8 .0003 240 .0003C284.2 .0003 320 35.82 320 80zM464 16V132.3C473.6 137.8 480 148.2 480 160V269.3L496 264V208C496 199.2 503.2 192 512 192H528C536.8 192 544 199.2 544 208V292.5C544 299.4 539.6 305.5 533.1 307.6L480 325.3V352H528C536.8 352 544 359.2 544 368V384C544 392.8 536.8 400 528 400H484L507 492.1C509.6 502.2 501.9 512 491.5 512H432C423.2 512 416 504.8 416 496V400H400C382.3 400 368 385.7 368 368V224C368 206.3 382.3 192 400 192V160C400 148.2 406.4 137.8 416 132.3V32C407.2 32 400 24.84 400 16C400 7.164 407.2 0 416 0H448C456.8 0 464 7.164 464 16V16z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
          {/* 에이펙스, 워존 */}
          <div className="relative mt-20 flex w-full flex-col gap-10  overflow-hidden rounded-3xl bg-gradient-to-b from-pink-500 via-red-500 to-slate-800 p-5">
            {/* 컨텐츠 */}
            {/* 에이펙스 레전드 */}
            <div className="flex w-full gap-5">
              <div className="relative flex aspect-[1/1.2] w-2/3 flex-col items-center justify-center self-end overflow-hidden rounded-3xl shadow shadow-pink-500 ring-pink-500 ring-offset-4 ring-offset-pink-700 transition-all duration-200 hover:shadow-2xl hover:shadow-pink-500 hover:ring-4">
                {/* 이미지  */}
                <div
                  style={{
                    backgroundImage: `url('https://dak.gg/images/services/bannerbig-apex.jpg')`,
                  }}
                  className="w-full flex-1 bg-cover bg-center"
                ></div>
                <span className="w-full bg-pink-600 py-1 text-center font-bold text-white">
                  에이펙스 레전드
                </span>
              </div>
              <div
                style={{
                  backgroundImage: `url('https://logos-world.net/wp-content/uploads/2020/11/Apex-Legends-Emblem.png')`,
                }}
                className="flex-1 bg-contain bg-center bg-no-repeat"
              ></div>
            </div>
            {/* 콜 오브 듀티:워존 */}
            <div className="flex w-full gap-5">
              <div
                style={{
                  backgroundImage: `url('https://pnggrid.com/wp-content/uploads/2021/11/Call-Of-Duty-Warzone-Logo.png')`,
                }}
                className="flex-1 bg-contain bg-center bg-no-repeat"
              ></div>
              <div className="relative flex aspect-[1/1.2] w-2/3 flex-col items-center justify-center self-end overflow-hidden rounded-3xl shadow shadow-black ring-black ring-offset-4 ring-offset-slate-800 transition-all duration-200 hover:shadow-2xl hover:shadow-black hover:ring-4">
                {/* 이미지  */}
                <div
                  style={{
                    backgroundImage: `url('https://dak.gg/images/services/bannerbig-wz.jpg')`,
                  }}
                  className="w-full flex-1 bg-cover bg-center"
                ></div>
                <span className="w-full bg-black py-1 text-center font-bold text-white">
                  콜 오브 듀티:워존
                </span>
              </div>
            </div>
            {/* 뚜껑 */}
            <motion.div
              initial={{ y: 0 }}
              animate={apexWarzonTopperAnimation}
              className="absolute top-0 left-0 h-full w-full"
            >
              {/* 뚜겅 해금 아이콘 */}
              <motion.div
                initial={{
                  opacity: 1,
                  scale: 1,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                // whileHover={{ scale: 1.2 }}
                animate={apexWarzoneLockIconAnimation}
                onClick={() => setIsApexWarzonTopperOn(false)}
                className="absolute left-1/2 top-1/2 z-10 cursor-pointer rounded-full bg-white p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="aspect-square w-10 stroke-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </motion.div>
              {/* apex topper */}
              <motion.div
                initial={{ x: 0 }}
                animate={apexTopperAnimation}
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 0% 100% )",
                }}
                className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-pink-500 bg-cover bg-center"
              >
                <span className="z-10 translate-x-[-15%] rotate-[-60deg] transform text-5xl font-bold text-black">
                  에이펙스 레전드
                </span>
                {/* topper icon */}
                <div className="absolute top-0 left-0 grid h-full w-full grid-cols-3 grid-rows-4 gap-3">
                  {Array.from(Array(12).keys()).map((_, i) => (
                    <svg
                      key={i}
                      className="w-30 aspect-square fill-pink-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M544 64h-16V56C528 42.74 517.3 32 504 32S480 42.74 480 56V64H43.17C19.33 64 0 83.33 0 107.2v89.66C0 220.7 19.33 240 43.17 240c21.26 0 36.61 20.35 30.77 40.79l-40.69 158.4C27.41 459.6 42.76 480 64.02 480h103.8c14.29 0 26.84-9.469 30.77-23.21L226.4 352h94.58c24.16 0 45.5-15.41 53.13-38.28L398.6 240h36.1c8.486 0 16.62-3.369 22.63-9.373L480 208h64c17.67 0 32-14.33 32-32V96C576 78.33 561.7 64 544 64zM328.5 298.6C327.4 301.8 324.4 304 320.9 304H239.1L256 240h92.02L328.5 298.6zM480 160H64V128h416V160z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
              {/* warzone topper */}
              <motion.div
                initial={{ x: 0 }}
                animate={warzoneTopperAnimation}
                style={{
                  clipPath: "polygon(100% 0%, 100% 100%, 0% 100% )",
                }}
                className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-cover bg-center"
              >
                <span className="z-10 translate-x-[15%] rotate-[-60deg] transform text-5xl font-bold text-pink-500">
                  콜 오브 듀티:워존
                </span>
                {/* topper icons */}
                <div className="absolute top-0 left-0 grid h-full w-full grid-cols-3 grid-rows-4 gap-3">
                  {Array.from(Array(12).keys()).map((_, i) => (
                    <svg
                      key={i}
                      className="w-30 aspect-square fill-slate-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M368 128C368 172.4 342.6 211.5 304 234.4V256C304 273.7 289.7 288 272 288H175.1C158.3 288 143.1 273.7 143.1 256V234.4C105.4 211.5 79.1 172.4 79.1 128C79.1 57.31 144.5 0 223.1 0C303.5 0 368 57.31 368 128V128zM167.1 176C185.7 176 199.1 161.7 199.1 144C199.1 126.3 185.7 112 167.1 112C150.3 112 135.1 126.3 135.1 144C135.1 161.7 150.3 176 167.1 176zM280 112C262.3 112 248 126.3 248 144C248 161.7 262.3 176 280 176C297.7 176 312 161.7 312 144C312 126.3 297.7 112 280 112zM3.378 273.7C11.28 257.9 30.5 251.5 46.31 259.4L223.1 348.2L401.7 259.4C417.5 251.5 436.7 257.9 444.6 273.7C452.5 289.5 446.1 308.7 430.3 316.6L295.6 384L430.3 451.4C446.1 459.3 452.5 478.5 444.6 494.3C436.7 510.1 417.5 516.5 401.7 508.6L223.1 419.8L46.31 508.6C30.5 516.5 11.28 510.1 3.378 494.3C-4.526 478.5 1.881 459.3 17.69 451.4L152.4 384L17.69 316.6C1.881 308.7-4.526 289.5 3.378 273.7V273.7z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
          {/* 메이플 */}
          <div className="relative mt-20 w-full overflow-hidden rounded-3xl bg-blue-300 p-5">
            {/* 뚜껑 */}
            <motion.div
              animate={mapleTopperAnimation}
              whileHover={{ width: "80%" }}
              className="absolute top-0 left-0 z-10 flex h-full w-[95%] origin-left cursor-pointer items-center justify-center rounded-3xl bg-blue-500 bg-cover bg-center"
              onClick={() => setIsMapleTopperOn(false)}
            >
              <svg
                className="fill-blakc aspect-square w-20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M383.8 351.7c2.5-2.5 105.2-92.4 105.2-92.4l-17.5-7.5c-10-4.9-7.4-11.5-5-17.4 2.4-7.6 20.1-67.3 20.1-67.3s-47.7 10-57.7 12.5c-7.5 2.4-10-2.5-12.5-7.5s-15-32.4-15-32.4-52.6 59.9-55.1 62.3c-10 7.5-20.1 0-17.6-10 0-10 27.6-129.6 27.6-129.6s-30.1 17.4-40.1 22.4c-7.5 5-12.6 5-17.6-5C293.5 72.3 255.9 0 255.9 0s-37.5 72.3-42.5 79.8c-5 10-10 10-17.6 5-10-5-40.1-22.4-40.1-22.4S183.3 182 183.3 192c2.5 10-7.5 17.5-17.6 10-2.5-2.5-55.1-62.3-55.1-62.3S98.1 167 95.6 172s-5 9.9-12.5 7.5C73 177 25.4 167 25.4 167s17.6 59.7 20.1 67.3c2.4 6 5 12.5-5 17.4L23 259.3s102.6 89.9 105.2 92.4c5.1 5 10 7.5 5.1 22.5-5.1 15-10.1 35.1-10.1 35.1s95.2-20.1 105.3-22.6c8.7-.9 18.3 2.5 18.3 12.5S241 512 241 512h30s-5.8-102.7-5.8-112.8 9.5-13.4 18.4-12.5c10 2.5 105.2 22.6 105.2 22.6s-5-20.1-10-35.1 0-17.5 5-22.5z" />
              </svg>
            </motion.div>
            {/* 메이플스토리 */}
            <div className="flex w-full gap-5">
              <div className="relative flex aspect-[1/1.2] w-2/3 flex-col items-center justify-center overflow-hidden rounded-3xl shadow shadow-blue-500 ring-blue-500 ring-offset-4 ring-offset-blue-800 transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500 hover:ring-4">
                {/* 이미지  */}
                <div
                  style={{
                    backgroundImage: `url('https://dak.gg/images/services/bannerbig-maplestory.jpg')`,
                  }}
                  className="w-full flex-1 bg-cover bg-center"
                ></div>
                <span className="w-full bg-blue-700 py-1 text-center font-bold text-white">
                  메이플스토리
                </span>
              </div>
              <div
                style={{
                  backgroundImage: `url('https://w.namu.la/s/36698b408403528caa12752fe8592dbaefd5acd18a8b18dfaf758af4e1bd568d4edcc07614aa3a06682a3f24ccb4973dae1013e03169aaa14d50ca43a69d40e1e1d460d68b8d5320c365e65d0badea4a')`,
                }}
                className="flex-1 bg-contain bg-center bg-no-repeat"
              ></div>
            </div>
          </div>
        </main>
        {/* dak.gg footer */}
        <footer className="w-full bg-black p-10">
          <Link href={"/"}>
            <a>
              <img
                className="w-32 transform transition-all duration-200 hover:scale-110"
                src="https://dak.gg/images/logo/img-dakgg-brandlogo.svg"
                alt="dakggLogo"
              />
            </a>
          </Link>
          <div className="mt-4 flex w-full flex-col gap-1 text-xs font-medium text-white">
            <div className="flex items-center gap-1 text-slate-300">
              <span className="cursor-pointer hover:underline">이용약관</span>
              <span>|</span>
              <span className="cursor-pointer hover:underline">
                개인정보취급방침
              </span>
            </div>
            <div className="text-slate-300">
              <span>© All Rights Reserved. Hosted by PlayXP Inc.</span>
            </div>
            <div className="text-slate-500">
              <span>
                (주)플레이엑스피 대표: 윤석재 사업자등록번호: 406-86-00726
              </span>
            </div>
          </div>
        </footer>
      </div>
      {/* language modal */}
      <AnimatePresence exitBeforeEnter>
        {isLanguageDropdown ? (
          <div className="fixed top-0 left-0 h-full w-full overflow-hidden">
            {/* modal bg and click to escape */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="h-full w-full cursor-pointer bg-transparent filter backdrop-blur-sm"
              onClick={() => setIsLanguageDropdown(false)}
            ></motion.div>
            {/* language modal */}
            <motion.div
              initial={{ y: window.outerHeight }}
              animate={{ y: 0 }}
              exit={{
                y: window.outerHeight,
              }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-0 left-0 w-full rounded-t-3xl bg-white p-10"
            >
              <div className="flex w-full items-center justify-center gap-3 border-b pb-3">
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
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                <h1 className="text-center text-xl font-medium">
                  사용할 언어를 선택해 주세요!
                </h1>
              </div>
              {/* language select buttons */}
              <div className="mt-3 flex flex-col items-center gap-2">
                <button
                  onClick={() => handleLanguage("KO")}
                  className={`relative w-full rounded-md p-3 text-center transition-all duration-200 hover:bg-slate-100 ${
                    language === "KO"
                      ? "bg-slate-200 hover:bg-slate-200"
                      : "bg-white"
                  }`}
                >
                  {language === "KO" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-1/2 left-3 aspect-square w-8 -translate-y-1/2 transform fill-teal-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : null}
                  <span>한국어</span>
                </button>
                <button
                  onClick={() => handleLanguage("EN")}
                  className={`relative w-full rounded-md p-3 text-center transition-all duration-200 hover:bg-slate-100 ${
                    language === "EN"
                      ? "bg-slate-200 hover:bg-slate-200"
                      : "bg-white"
                  }`}
                >
                  <span>English</span>
                  {language === "EN" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-1/2 left-3 aspect-square w-8 -translate-y-1/2 transform fill-teal-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : null}
                </button>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </Layout>
  );
};

export default Home;
