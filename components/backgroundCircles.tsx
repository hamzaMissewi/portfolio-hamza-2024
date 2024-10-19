function BackgroundCircles() {
  return (
    <div className={"relative flex items-center justify-center"}>
      <div
        className={
          "absolute mt-52 h-[200px] w-[200px] animate-ping rounded-full border border-[#333333]"
        }
      />
      <div
        className={
          "absolute mt-52 h-[300px] w-[300px] animate-ping rounded-full border border-[#333333]"
        }
      />
      <div
        className={
          "absolute mt-52 h-[500px] w-[500px] animate-ping rounded-full border border-[#333333]"
        }
      />
      <div
        className={
          "absolute mt-52 h-[650px] w-[650px] animate-ping border border-[#F7AB0A] opacity-20"
        }
      />
    </div>
  );
}

export default BackgroundCircles;
