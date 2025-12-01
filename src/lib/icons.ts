import { BsFan, BsThreeDots } from "react-icons/bs";
import { GiCaptainHatProfile, GiPalmTree } from "react-icons/gi";
import { LuMicrowave } from "react-icons/lu";
import { MdOutdoorGrill } from "react-icons/md";
import { IoBed } from "react-icons/io5";
import { FaBox, FaSnowflake, FaSun, FaTv } from "react-icons/fa";
import { Coffee, LifeBuoy, Music } from "lucide-react";

export const facilityIcons: Record<string, React.ElementType> = {
  "A/C": BsFan,
  "TV": FaTv,
  "BBQ Grill": MdOutdoorGrill,
  "Microwave": LuMicrowave,
  "Fridge": FaSnowflake,
  "Tan area": FaSun,
  "Ice box": FaBox,
  "Life jacket": LifeBuoy,
  "Sound system": Music,
  "Coffee machine": Coffee,
  "Outdoor area": GiPalmTree,
};
