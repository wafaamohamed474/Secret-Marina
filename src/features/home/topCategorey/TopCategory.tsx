import UnderlineTitle from "@/components/atoms/UnderlineTitle";
import CategoryCard from "./CategoreyCard";
import { categories } from "@/types/types";
import React from "react";
import SectionLink from "@/components/atoms/SectionLink";

interface TopCategoryProps {
  categories?: categories[];
}

const TopCategory: React.FC<TopCategoryProps> = ({ categories }) => {
  return (
    <section className="py-20 border border-y  border-(--primary)">
      <div className="container-custom">
        <UnderlineTitle bgColor="bg-(--primary)" textColor="text-(--primary)">
          Secret Marina Top Category
        </UnderlineTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:w-[90%] xl:w-[80%] mx-auto py-12">
          {categories?.slice(0, 5).map((cat) => (
            <CategoryCard key={cat.id} img={cat.image} title={cat.title} />
          ))}
        </div>
        <SectionLink/>
      </div>
    </section>
  );
};

export default TopCategory;
