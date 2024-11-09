import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import User from "../../assets/images/user.png"
import { BoxArrowLeft, Gear, Lock, Person } from "react-bootstrap-icons"
import { useTranslation } from "react-i18next"

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const { t } = useTranslation()

  const trigger = useRef(null)
  const dropdown = useRef(null)

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setDropdownOpen(false)
    }
    document.addEventListener("click", clickHandler)
    return () => document.removeEventListener("click", clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return
      setDropdownOpen(false)
    }
    document.addEventListener("keydown", keyHandler)
    return () => document.removeEventListener("keydown", keyHandler)
  })

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2"
        to="#"
      >
        <span className="h-10 w-10 rounded-full">
          <img src={User} alt="User" className="h-10 w-10 rounded-full" />
        </span>
        <span className="hidden text-start lg:block">
          <span className="block text-sm font-medium text-foreground">
            Mushagalusa Byamungu Pacifique
          </span>
          <span className="block text-xs text-secondary-foreground">Full Stack Developper</span>
        </span>

        <svg
          className="hidden fill-foreground sm:block"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-1 flex w-62.5 flex-col rounded-md text-foreground border border-border bg-background shadow-default  ${dropdownOpen === true ? "block" : "hidden"
          }`}
      >

        <ul className="flex flex-col gap-4 border-b border-border px-6 py-3  text-foreground">

          <span className="block lg:hidden text-start">
            <span className="block text-sm font-medium text-foreground">
              Chris Cedrick
            </span>
            <span className="block text-xs text-secondary-foreground">Full Stack Developper</span>
          </span>

          <li>
            <Link
              to="/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-md"
            >
              <Person size={18} />
              {t('profile')}
            </Link>
          </li>
          <li>
            <Link
              to="/pages/settings"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-md"
            >
              <Lock size={18} />
              {t('change-password')}
            </Link>
          </li>
        </ul>
        <button className="flex items-center gap-3.5 px-6 py-3 text-sm text-foreground font-medium duration-300 ease-in-out hover:text-primary lg:text-md">
          <BoxArrowLeft size={18} />
          Deconnexion
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  )
}

export default DropdownUser
