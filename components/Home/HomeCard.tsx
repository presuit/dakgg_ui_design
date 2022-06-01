import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
const HomeCard = () => {
  const container = useRef<HTMLDivElement | null>(null);

  return (
    <motion.div
      onMouseEnter={() => {}}
      ref={container}
      style={{
        backgroundImage: `url('https://dak.gg/images/services/bannerbig-lol.jpg')`,
      }}
      className="w-full h-full bg-cover bg-center bg-teal-500 rounded-3xl overflow-hidden"
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        className="w-full h-full bg-teal-500 flex justify-center items-center"
      >
        <span className="text-white text-lg font-bold">리그 오브 레전드</span>
      </motion.div>
    </motion.div>
  );
};

export default HomeCard;
