import UnderlineTitle from "@/components/atoms/UnderlineTitle";
import img1 from "@/assets/images/01.jpg";
import img2 from "@/assets/images/02.jpg";
import img3 from "@/assets/images/03.jpg";
import img4 from "@/assets/images/04.jpg";
import img5 from "@/assets/images/05.jpg";
import img6 from "@/assets/images/06.jpg";
import CategoryCard from "./CategoreyCard";

export default function TopCategory() {
  return (
    <section className="py-20 border border-y  border-(--primary)">
      <div className="container-custom">
        <UnderlineTitle bgColor="bg-(--primary)" textColor="text-(--primary)">
          Secret Marina Top Category
        </UnderlineTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-[80%] mx-auto py-12">
          <CategoryCard title="Yacht" img={img1} />
          <CategoryCard title="Boat" img={img2} />
          <CategoryCard title="Special Offers" img={img3} />
          <CategoryCard title="Chalets" img={img4} />
          <CategoryCard title="Camping" img={img5} />
        </div>
      </div>
    </section>
  );
}
