import Image from "next/image";
import { IPatchNoteChamp } from "./PatchNote";

interface IPatchNoteSliderItem {
  champInfo: IPatchNoteChamp;
}

const PatchNoteSliderItem: React.FC<IPatchNoteSliderItem> = ({ champInfo }) => {
  return (
    <div className="relative flex flex-col items-center gap-2">
      <div className="relative aspect-square w-40">
        <Image
          src={champInfo.image}
          alt={champInfo.name}
          objectFit="cover"
          objectPosition={"center"}
          layout="fill"
        />
        <span className="absolute bottom-0 right-0 aspect-square rounded-full bg-amber-300 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="aspect-square w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </span>
      </div>
      <span className="font-medium text-zinc-100">{champInfo.name}</span>
    </div>
  );
};

export default PatchNoteSliderItem;
