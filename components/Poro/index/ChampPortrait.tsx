import Image, { StaticImageData } from "next/image";

interface IChampPortrait {
  image: StaticImageData;
  tier: any;
  name: string;
}

const ChampPortrait: React.FC<IChampPortrait> = ({ image, name, tier }) => {
  return (
    <>
      <div className="h-full w-full overflow-hidden rounded-full ring ring-rose-300">
        <Image
          src={image}
          alt="kayleSquare"
          objectFit="cover"
          objectPosition={"center"}
        />
      </div>
      {/* 티어 */}
      <div className="absolute top-[50%] left-[70%] aspect-square w-5 bg-cover bg-center">
        <Image
          src={tier}
          alt="tier"
          objectFit="cover"
          objectPosition={"center"}
        />
      </div>
      {/* 호버시 등장하는 말풍선 */}
      <div className="absolute top-0 left-0 w-28 -translate-x-1/3 -translate-y-[120%] transform rounded-md bg-black p-2 text-center font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
        {/* 컨텐츠 */}
        <span className="text-xs">{name}</span>
        {/* 말풍선 아래 꼭지점  */}
        <div
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
          }}
          className="absolute top-full left-1/2 aspect-square w-2 -translate-x-1/2 transform bg-black"
        ></div>
      </div>
    </>
  );
};

export default ChampPortrait;
