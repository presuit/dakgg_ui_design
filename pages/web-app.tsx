import { NextPage } from "next";

const WebApp: NextPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <button
        onClick={() => {
          const link = document.createElement("a");
          link.download = "test_web_app_download.webp";
          link.href = "/champs/BlitzcrankSquare.webp";
          link.click();
        }}
        className="rounded-md bg-zinc-100 p-5"
      >
        Click Me
      </button>
    </div>
  );
};

export default WebApp;
