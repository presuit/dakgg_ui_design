import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const CircleInput = () => {
  const [isLogOpen, setIsLogOpen] = useState(false);
  const logContainerAnimation = useAnimation();

  useEffect(() => {
    if (isLogOpen) {
      (async () => {
        await logContainerAnimation.start({
          translateY: "0%",
          transition: { duration: 0.5, type: "tween" },
        });
      })();
    } else {
      logContainerAnimation.start({
        translateY: "100%",
        transition: { duration: 0.5, type: "tween" },
      });
    }
  }, [isLogOpen]);

  return (
    <div className="aspect-square w-full flex-col overflow-hidden rounded-full bg-black">
      {/* 검은색 원 */}
      <div className="relative flex h-full w-full items-center justify-center p-10">
        <div className="relative flex w-full flex-col gap-2">
          <input
            className="w-full rounded-md bg-zinc-800 p-3 text-sm text-zinc-100 outline-none"
            placeholder="챔피언, 소환사명 검색"
          />
          <div className="flex w-full gap-2">
            <button
              onClick={() => setIsLogOpen(true)}
              className="flex-1 rounded-md bg-zinc-900 text-sm text-zinc-100"
            >
              기록
            </button>
            <button className="w-1/3 rounded-md bg-rose-500 p-2 px-5 text-sm text-zinc-100">
              검색
            </button>
          </div>
        </div>
        <motion.aside
          onClick={() => setIsLogOpen(false)}
          initial={{ translateY: "100%" }}
          animate={logContainerAnimation}
          className="absolute top-0 left-0 h-full w-full cursor-pointer rounded-full bg-zinc-800 p-5"
        >
          <div className="h-full w-full overflow-hidden rounded-full border border-zinc-700 p-14">
            <div className="flex h-full w-full flex-col gap-3">
              <span className="block w-full rounded-full bg-zinc-700 p-2 text-center text-sm odd:bg-zinc-600">
                유저1
              </span>
              <span className="block w-full rounded-full bg-zinc-700 p-2 text-center text-sm odd:bg-zinc-600">
                유저2
              </span>
              <span className="block w-full rounded-full bg-zinc-700 p-2 text-center text-sm odd:bg-zinc-600">
                유저3
              </span>
              <span className="block w-full rounded-full bg-zinc-700 p-2 text-center text-sm odd:bg-zinc-600">
                유저4
              </span>
              <span className="block w-full rounded-full bg-zinc-700 p-2 text-center text-sm odd:bg-zinc-600">
                유저5
              </span>
              <span className="block w-full rounded-full bg-zinc-700 p-2 text-center text-sm odd:bg-zinc-600">
                유저6
              </span>
            </div>
          </div>
        </motion.aside>
      </div>
    </div>
  );
};

export default CircleInput;
