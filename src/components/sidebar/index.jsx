import React, { useEffect, useRef, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import SidebarLinkGroup from "./SidebarLinkGroup"
import { BoxArrowLeft, ColumnsGap, Gear, Grid, X, XLg } from "react-bootstrap-icons"
import { useTranslation } from "react-i18next"
import Logo from "../../assets/images/logo_fluxy.png"


const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const location = useLocation()
    const { pathname } = location

    const { t } = useTranslation()

    const trigger = useRef(null)
    const sidebar = useRef(null)

    const storedSidebarExpanded = localStorage.getItem("sidebar-expanded")
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
    )

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return
            setSidebarOpen(false)
        }
        document.addEventListener("click", clickHandler)
        return () => document.removeEventListener("click", clickHandler)
    })

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return
            setSidebarOpen(false)
        }
        document.addEventListener("keydown", keyHandler)
        return () => document.removeEventListener("keydown", keyHandler)
    })

    useEffect(() => {
        localStorage.setItem("sidebar-expanded", sidebarExpanded.toString())
        if (sidebarExpanded) {
            document.querySelector("body")?.classList.add("sidebar-expanded")
        } else {
            document.querySelector("body")?.classList.remove("sidebar-expanded")
        }
    }, [sidebarExpanded])

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 z-99 flex rounded-xl h-screen w-67.5 flex-col overflow-y-hidden bg-blue-400 dark:bg-background text-white duration-300 ease-linear  lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
        >
            {/* <!-- SIDEBAR HEADER --> */}
            <div className="flex items-center justify-between gap-2 px-4 py-2 lg:py-3.5 ">
                <NavLink to="/" className="flex items-center gap-2 text-white font-bold">
                    <img src={Logo} alt="Logo" className="w-10 h-auto rounded-lg" />Fluxy
                </NavLink>

                <button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="block lg:hidden"
                >
                    <X size={24} />
                </button>
            </div>
            {/* <!-- SIDEBAR HEADER --> */}

            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                {/* <!-- Sidebar Menu --> */}
                <nav className="mt-1 py-2 px-2 lg:mt-1 lg:px-2">
                    {/* <!-- Menu Group --> */}
                    <div>
                        <ul className="mb-6 flex flex-col gap-1">

                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium text-secondary-foreground duration-300 ease-in-out  bg-secondary"
                                            : "group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium hover:text-secondary-foreground duration-300 ease-in-out hover:bg-secondary"
                                    }
                                >
                                    <ColumnsGap size={18} />
                                    {t('Home')}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/Booking"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium text-secondary-foreground duration-300 ease-in-out  bg-secondary"
                                            : "group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium hover:text-secondary-foreground duration-300 ease-in-out hover:bg-secondary"
                                    }
                                >
                                    <ColumnsGap size={18} />
                                    {t('Booking')}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/Host"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium text-secondary-foreground duration-300 ease-in-out  bg-secondary"
                                            : "group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium hover:text-secondary-foreground duration-300 ease-in-out hover:bg-secondary"
                                    }
                                >
                                    <ColumnsGap size={18} />
                                    {t('Host')}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/stock"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium text-secondary-foreground duration-300 ease-in-out  bg-secondary"
                                            : "group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium hover:text-secondary-foreground duration-300 ease-in-out hover:bg-secondary"
                                    }
                                >
                                    <ColumnsGap size={18} />
                                    {t('Stock')}
                                </NavLink>
                            </li>

                            {/* <li>
                                <NavLink
                                    to="#"
                                    className={`group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 
                                        ${(pathname.includes("conge")) &&
                                        "text-secondary-foreground bg-secondary"}`
                                    }
                                    onClick={e => {
                                        e.preventDefault()
                                        sidebarExpanded
                                            ? handleClick()
                                            : setSidebarExpanded(true)
                                    }}
                                >
                                    <Grid size={18} />
                                    RH
                                    <svg
                                        className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open &&
                                            "rotate-180"}`}
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                            fill=""
                                        />
                                    </svg>
                                </NavLink>
                                {/* <!-- Dropdown Menu Start --> */}
                            {/* <div
                                    className={`translate transform overflow-hidden ${!open &&
                                        "hidden"}`}
                                >
                                    <ul className="mt-2 mb-3 flex flex-col gap-1 pl-6">
                                        <li>
                                            <NavLink
                                                to="/conge"
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium text-secondary-foreground duration-300 ease-in-out bg-secondary"
                                                        : "group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium hover:text-secondary-foreground duration-300 ease-in-out hover:bg-secondary"
                                                }
                                            >
                                                Congé
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>  */}

                        </ul>
                    </div>

                </nav>
                {/* <!-- Sidebar Menu --> */}
            </div>
            <div className="mt-auto py-2 px-2 lg:px-2">
                <ul className="flex flex-col gap-1">
                    <li>
                        <NavLink
                            to="/entreprise"
                            className={`group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium hover:text-secondary-foreground duration-300 ease-in-out hover:bg-secondary 
                                ${(pathname.includes("configuration") || pathname.includes("entreprise")) &&
                                "text-secondary-foreground bg-secondary"}`}
                        >
                            <Gear size={20} />
                            {t('settings')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive
                                    ? "group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium secondary-foreground duration-300 ease-in-out bg-secondary"
                                    : "group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium text-bodydark1 hover:text-secondary-foreground duration-300 ease-in-out hover:bg-secondary"
                            }
                        >
                            <BoxArrowLeft size={20} />
                            Deconnexion
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar
