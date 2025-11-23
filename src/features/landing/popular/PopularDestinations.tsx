import UnderlineTitle from "@/components/atoms/UnderlineTitle";
import PopularCard from "./PopularCard";
import img1 from "@/assets/images/01.jpg";
import img2 from "@/assets/images/02.jpg";
import img3 from "@/assets/images/03.jpg";
import img4 from "@/assets/images/04.jpg";
import img5 from "@/assets/images/05.jpg";
import img6 from "@/assets/images/06.jpg";

export default function PopularDestinations() {
  return (
    <section className="w-full py-20  bg-(--primary)">
      <div className="container-custom">
        <UnderlineTitle>Discover Popular Destinations</UnderlineTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 w-[80%] mx-auto py-12">
          <PopularCard title="Jeddah Islands" img={img1} />
          <PopularCard title="Jeddah Islands" img={img2} />
          <PopularCard title="Jeddah Islands" img={img3} />
          <PopularCard title="Jeddah Islands" img={img4} />
          <PopularCard title="Jeddah Islands" img={img5} />
          <PopularCard title="Jeddah Islands" img={img6} />
        </div>
      </div>
    </section>
  );
}
