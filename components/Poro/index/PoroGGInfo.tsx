const PoroGGInfo = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center gap-5 rounded-t-md bg-zinc-100 p-10 font-medium text-black">
      <div
        style={{
          backgroundImage: `url('https://poro.gg/images/logo/logo-porogg-bk-r.png')`,
        }}
        className="h-10 w-full bg-contain bg-center bg-no-repeat"
      ></div>
      <h1 className="text-center">
        리그 오브 레전드의 모든 게임모드 통계를 포로지지에서 확인하세요.
      </h1>
      <span className="text-center">
        소환사의 협곡, 칼바람 나락, 우르프, 돌격 넥서스, 궁극기 주문서 모드 등
        리그 오브 레전드의 모든 게임 모드 챔피언 분석과 소환사 전적검색을
        제공합니다.
      </span>
      <div className="w-10 rounded-full bg-zinc-200 p-1"></div>
      <span className="text-center">
        각 게임 모드에서 좋은 성능을 보이는 챔피언의 티어, 승률, 픽률 정보를
        최신 버전에 맞춰 제공합니다.
      </span>
      <span className="text-center">
        포로지지에서 어떤 챔피언이 OP 챔피언 인지 확인하고 랭크 승률을
        높여보세요!
      </span>
      <span className="text-3xl font-bold text-zinc-400">PORO.GG</span>
      <aside className="absolute top-full left-0 grid h-5 w-full grid-cols-10">
        {Array.from(Array(10).keys()).map((_, i) => (
          <div
            key={i}
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }}
            className="h-full w-full bg-zinc-100"
          ></div>
        ))}
      </aside>
    </div>
  );
};

export default PoroGGInfo;
