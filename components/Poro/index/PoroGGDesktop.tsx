const PoroGGDesktop = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center gap-5 rounded-t-md bg-zinc-100 p-10 font-medium text-black">
      <div className="flex items-center gap-5  border-zinc-500">
        <div
          style={{
            backgroundImage: `url('https://poro.gg/images/img-urf-oval.png')`,
          }}
          className="aspect-square w-20 bg-contain bg-center bg-no-repeat"
        ></div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-rose-500">PORO.GG</span>
          <span className="text-2xl font-light text-zinc-500">DESKTOP APP</span>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-3 rounded-md bg-zinc-200 p-3">
        <span className="text-center font-light">
          포로지지 앱에서 칼바람, 우르프 룬을 자동으로 선택하세요!
        </span>
        <a
          href="https://www.overwolf.com/app/PlayXP_Inc.-PORO.GG"
          target={"_blank"}
          rel="noreferrer"
          className="h-10 w-1/2"
        >
          <div
            style={{
              backgroundImage: `url("https://poro.gg/_nuxt/img/img-ow-app.b98e16c.png")`,
            }}
            className="h-full w-full rounded-md bg-contain bg-center bg-no-repeat"
          ></div>
        </a>
      </div>

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

export default PoroGGDesktop;
