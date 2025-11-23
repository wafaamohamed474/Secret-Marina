import Image from "next/image";
import FooterLinks from "../molecules/FooterLinks";
import FooterLogoImg from "@/assets/images/footer.png";
import AppleStore from "@/assets/images/AppleStore.png";
import GooglePlay from "@/assets/images/googleplay.png";

export default function Footer() {
  return (
    <footer className="w-full  py-20 bg-(--primary) flex justify-center items-center ">
      <div className="container-custom ">
        <div className="grid md:grid-cols-4  lg:grid-cols-3">
          <div className="flex flex-col md:col-span-2  lg:col-span-1 justify-center">
            <div className="flex lg:justify-start">
              <Image
                src={FooterLogoImg}
                alt="Logo"
                className="w-full lg:w-full h-auto"
              />
            </div>

            <p className="text-(--background) text-base font-medium text-center lg:text-left">
              Your trusted gateway to exceptional sea experiences across Saudi
              Arabia.
            </p>
            <div className="flex justify-center lg:justify-start w-full gap-4 py-5">
              <div>
                <Image
                  src={AppleStore}
                  width={100}
                  alt="Apple Store"
                  className="h-full"
                />
              </div>
              <div>
                <Image
                  src={GooglePlay}
                  width={100}
                  alt="Google Play"
                  className="h-full"
                />
              </div>
            </div>
          </div>

          {/* Links Column (2/3) */}
          <div className="flex  justify-start items-center md:col-span-2  lg:col-span-2">
            <FooterLinks />
          </div>
        </div>

        <div className="text-center pt-10">
          <p className="text-(--background)">
            © 2025 Secret Marina. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
