import Image from "next/image";
import img1 from "@/assets/images/img1.jpg";
import img2 from "@/assets/images/img2.jpg";
import img3 from "@/assets/images/img3.jpg";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="container-custom w-full  py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
      {/* Left: Images (2 stacked rows) */}
      <div className="grid grid-cols-2 h-full gap-4">
        <div className="flex flex-col h-full gap-4">
          <Image
            src={img1}
            alt="img1"
            className="w-full h-1/2   object-cover "
          />
          <Image
            src={img2}
            alt="img2"
            className="w-full h-1/2  object-cover "
          />
        </div>

        {/* Right: Single tall image */}
        <div className="h-full">
          <Image
            src={img3}
            alt="img3"
            className="w-full h-full object-cover  "
          />
        </div>
      </div>

      {/* Optional Right Side Text */}
      <div className="flex flex-col justify-start h-full">
        <h3 className="text-2xl md:text-2xl font-medium title-gradient mb-4 ">
          About Secret Marina
        </h3>
        <p className="text-base md:text-xl font-normal text-(--text-primary) mb-4 leading-7">
          Secret Marina is a premium platform designed to make your sea
          adventures simple, safe, and unforgettable. We connect you with
          verified yacht providers and experienced captains, offering seamless
          booking, transparent pricing, and luxurious experiences across Saudi
          Arabia’s most beautiful marine destinations. Whether you’re planning a
          private yacht trip, a family outing, or a diving adventure, Secret
          Marina brings the Red Sea closer to you — with just a few clicks.
        </p>
        <span className="text-(--text-black) md:text-xl font-[var(--font-oleo)] mb-4">
          Join thousands of sea lovers exploring with Secret Marina today.
        </span>
        <div className="flex justify-start">
          <Button variant="gradient" className="w-auto px-10 py-6">
            Explore Now
          </Button>
        </div>
      </div>
    </section>
  );
}
