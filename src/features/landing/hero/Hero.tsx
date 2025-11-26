import heroImg from "@/assets/images/landing.jpg";

export default function Hero() {
  return (
    <section
      className="relative pb-20 pt-11 min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImg.src})`,
      }}
    >
      {/* Hero Content */}
      <div className="container-custom">
        <div className="w-full lg:w-3/4 xl:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-(--background) leading-12 md:leading-20">
            Your gateway to unforgettable sea journeys
          </h1>

          <p className="text-base md:text-lg md:leading-8 text-(--background) py-4">
            Simple booking trusted service and unforgettable memories
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[25%] overflow-hidden">
        {/* Bottom S-Wave Layer */}
        <svg
          className="absolute bottom-0 w-full h-full z-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#38bdf8" // لون الطبقة السفلى
            fillOpacity="1"
            d="M0,40 C360,-80 1080,400 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
        {/* middle wave */}

        <svg
          className="absolute bottom-0 w-full h-full z-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff" // لون الطبقة السفلى
            fillOpacity="0.7"
            d="M0,40 C360,-80 1080,400 1440,160 L1440,320 L0,320 Z"
          />
        </svg>

        {/* Top S-Wave Layer */}
        <svg
          className="absolute bottom-0 w-full h-[70%] z-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff" // لون الطبقة العليا
            fillOpacity="1" // شفاف شويه لتظهر الطبقة السفلى
            d="M0,40 C360,-80 1080,400 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </section>
  );
}
