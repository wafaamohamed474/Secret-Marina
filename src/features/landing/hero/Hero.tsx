import heroImg from "@/assets/images/landing.jpg";

export default function Hero() {
  return (
    <section
      className="pb-20 pt-32  min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImg.src})`,
      }}
    >
      {/* Hero Content */}
      <div className=" container-custom">
        <div className="w-full lg:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-(--background) leading-12 md:leading-20 ">
            Your gateway to unforgettable sea journeys
          </h1>

          <p className="text-base md:text-lg  md:leading-8 text-(--background) py-4">
            Simple booking trusted service and unforgettable memories
          </p>
        </div>
      </div>
    </section>
  );
}
