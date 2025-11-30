import Image, { StaticImageData } from "next/image";

type PopularCardProps = {
  title: string;
  img: string | StaticImageData;
  color?:string
};

export default function PopularCard({ title, img , color = "bg-white/50 " }: PopularCardProps) {
  return (
    <div className={`rounded-2xl overflow-hidden p-4 shadow-lg  backdrop-blur ${color}  `}>
      <div className="relative w-full h-48 rounded-2xl overflow-hidden">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>

      <h3 className="text-xl font-bold text-center mt-4 text-(--background)">
        {title}
      </h3>
    </div>
  );
}
