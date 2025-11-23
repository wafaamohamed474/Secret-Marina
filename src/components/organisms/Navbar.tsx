import Logo from "@/components/atoms/Logo";
import MenuLinks from "./MenuLinks";

export default function Navbar() {
  return (
    <header className="fixed z-1000 bg-(--background) w-full right-0 left-0 shadow-md">
      <div className="container-custom flex justify-between items-center py-5">
        <Logo />
        <MenuLinks />
      </div>
    </header>
  );
}
