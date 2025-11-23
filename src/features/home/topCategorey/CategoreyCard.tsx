import Image, { StaticImageData } from "next/image";

type CategoryCardProps = {
  title: string;
  img: string | StaticImageData;
};

export default function CategoryCard({ title, img }: CategoryCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden bg-(--primary) py-4 gap-4 flex justify-center flex-col items-center">
      <div className="relative w-32 h-32 rounded-full overflow-hidden ">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>

      <h3 className="text-xl font-bold text-center text-(--background)">
        {title}
      </h3>
    </div>
  );
}
