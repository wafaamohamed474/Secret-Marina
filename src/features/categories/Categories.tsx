import UnderlineTitle from "@/components/atoms/UnderlineTitle";

import { categories } from "@/types/types";
import React from "react";
import SectionLink from "@/components/atoms/SectionLink";
import CategoryCard from "../home/topCategorey/CategoreyCard";

interface TopCategoryProps {
  categories?: categories[];
}

const CategoriesSection: React.FC<TopCategoryProps> = ({ categories }) => {
  return (
    <section className="w-full">
      <div className="container-custom pb-20 pt-32">
        <UnderlineTitle bgColor="bg-(--primary)" textColor="text-(--primary)">
          Secret Marina Top Category
        </UnderlineTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:w-[90%] xl:w-[80%] mx-auto py-12">
          {categories?.map((cat) => (
            <CategoryCard key={cat.id} img={cat.image} title={cat.title} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default CategoriesSection;
