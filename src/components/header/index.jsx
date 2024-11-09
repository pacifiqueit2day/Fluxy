import { Link } from "react-router-dom"
import DropdownMessage from "./DropdownMessage"
import DropdownNotification from "./DropdownNotification"
import DropdownUser from "./DropdownUser"
import DarkModeSwitcher from "./DarkModeSwitcher"
import { useEffect, useMemo, useState } from "react"
import LangSwitcher from "./LangSwitcher"
import * as Icon from "react-bootstrap-icons";
import useLocalStorage from "../../hooks/useLocalStorage"
import Divider from "@mui/material/Divider";
import { Badge } from "primereact/badge"

const Header = props => {
  const [selectedLanguage, setSelectedLanguage] = useLocalStorage("lang", "fr")
  const [currentDate, setCurrentDate] = useState(new Date())

  // Update currentDate every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="sticky top-0 z-90 flex w-full bg-background drop-shadow-1 dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-1.5 shadow-2 md:px-6 2xl:px-8">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={e => {
              e.stopPropagation()
              props.setSidebarOpen(!props.sidebarOpen)
            }}
            className="z-99999 block lg:hidden"
          >
            <Icon.List size={22} className="text-gray-900 dark:text-white" />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            {/* <img src={LogoIcon} alt="Logo" /> */}
          </Link>
        </div>

        <div className="hidden sm:block text-gray-900 dark:text-white">
          {currentDate
            .toLocaleString(selectedLanguage === "en" ? "en-US" : "fr-FR", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
            })
            .replace(/^./, (char) => char.toUpperCase())
            .replace("à", " ")
            .replace("at ", " ")}
        </div>

        <div className="hidden sm:block">

        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            
            {/* <!-- Language Toggler --> */}
            <LangSwitcher selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}/>
            {/* <!-- Language Toggler --> */}

            {/* <!-- Dark Mode Toggler --> */}
            <DarkModeSwitcher />
            {/* <!-- Dark Mode Toggler --> */}

            <Divider
              orientation="vertical"
              flexItem
              className=" bg-muted-foreground mx-1"
            />

            {/* <!-- Chat Notification Area --> */}
            <DropdownMessage />
            {/* <!-- Chat Notification Area --> */}

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  )
}

export default Header
