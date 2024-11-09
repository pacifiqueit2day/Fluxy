import { useState } from "react";
import useColorMode from "../../hooks/useColorMode"
import { BrightnessLowFill, MoonFill } from "react-bootstrap-icons";

const DarkModeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode()

  const darkSide = colorMode === "dark";

  const toggleDarkMode = () => {
    setColorMode(darkSide ? "light" : "dark");
  };

  return (
    <li>
      <div
        onClick={()=>toggleDarkMode()}
        className={`relative m-0 h-8.5 w-8.5 cursor-pointer rounded-full bg-secondary flex justify-center items-center`}
      >
        <span className="dark:hidden duration-300 ease-linear">
          <BrightnessLowFill size={24} className="text-foreground"/>
        </span>
        <span className="hidden dark:inline-block duration-300 ease-linear">
          <MoonFill size={20} className="text-foreground"/>
        </span>
      </div>
    </li>
  )
}

export default DarkModeSwitcher
