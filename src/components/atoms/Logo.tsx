import Image from "next/image";
import logoImg from "@/assets/images/logo.png";  

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src={logoImg}
        alt="Secret Marina Logo"
        width={120}   
        height={40}   
        priority/>
    </div>
  );
}
