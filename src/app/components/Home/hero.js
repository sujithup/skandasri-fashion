
const Hero = () => {
  return (
    <div className="pointer-events-none relative h-[470px] select-none md:h-[calc(100vh_-_80px)]">
      <video
        playsInline
        muted
        loop
        autoPlay
        preload="auto"
        className="absolute h-full w-full object-cover"
      >
        <source src="/videos/clothing-shoot.webm" type="video/webm" />
      </video>
      {/* <Logo size="lg" className="absolute bottom-4 right-4 md:bottom-8 md:right-8" /> */}
    </div>
  );
};

export default Hero;