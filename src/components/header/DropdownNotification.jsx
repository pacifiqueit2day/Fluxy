import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Badge } from "primereact/badge";
import { Bell } from "react-bootstrap-icons";

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [notifying, setNotifying] = useState(true)

  const trigger = useRef(null)
  const dropdown = useRef(null)

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

  const notifications = [
    {
      title: 'Edit your information in a swipe',
      description: 'Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim',
      date: '12 May, 2025'
    },
    {
      title: 'Edit your information in a swipe',
      description: 'Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim',
      date: '12 May, 2025'
    },
    {
      title: 'Edit your information in a swipe',
      description: 'Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim',
      date: '12 May, 2025'
    },
    {
      title: 'Edit your information in a swipe',
      description: 'Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim',
      date: '12 May, 2025'
    },
    {
      title: 'Edit your information in a swipe',
      description: 'Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim',
      date: '12 May, 2025'
    },
    {
      title: 'Edit your information in a swipe',
      description: 'Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim',
      date: '12 May, 2025'
    },
  ]

  return (
    <li className="relative">
      <Link
        ref={trigger}
        onClick={() => {
          setNotifying(false)
          setDropdownOpen(!dropdownOpen)
        }}
        to="#"
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full text-foreground"
      >
        <div className="absolute -top-1 -right-1 z-1 bg-primary rounded-full text-white text-xs font-bold w-5.5 h-5.5 leading-6 flex items-center justify-center">
          6
        </div>
        <Bell size={22} />
      </Link>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-10 mt-1.5 flex h-90 w-75 flex-col rounded-md border border-border bg-background text-foreground shadow-default sm:right-0 sm:w-80 ${dropdownOpen === true ? "block" : "hidden"
          }`}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-medium">Notification</h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          {notifications.map((notif, index) => (
            <li key={index}>
              <Link
                className="flex flex-col gap-0.5 border-t border-border px-4.5 py-2 text-foreground  hover:bg-muted"
                to="#"
              >
                <p className="text-sm font-semibold my-0">
                  {notif.title}
                </p>
                <p className="text-xs my-0">
                  {notif.description}
                </p>
                <p className="text-xs">{notif.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default DropdownNotification
