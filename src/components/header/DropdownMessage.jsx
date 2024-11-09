import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Badge } from "primereact/badge";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import { ChatLeft } from "react-bootstrap-icons";
import User from "../../assets/images/user.png"

const DropdownMessage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [notifying, setNotifying] = useState(true)

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
    <li className="relative">
      <Link
        ref={trigger}
        onClick={() => {
          setNotifying(false)
          setDropdownOpen(!dropdownOpen)
        }}
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full text-foreground"
        to="#"
      >
        <div className="absolute -top-1 -right-1 z-1 bg-primary rounded-full text-white text-xs font-bold w-5.5 h-5.5 leading-6 flex items-center justify-center">
          1
        </div>
        <ChatLeft size={22}/>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-16 mt-1.5 flex h-90 w-75 flex-col rounded-md border border-border bg-background text-foreground shadow-default sm:right-0 sm:w-80 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-medium ">Messages</h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          <li>
            <Link
              className="flex gap-0.5 border-t border-border px-4 py-2 text-foreground  hover:bg-muted"
              to="/messages"
            >
              <div className="h-12.5 w-12.5 rounded-full">
                <img src={User} alt="User" className="h-12.5 w-12.5 rounded-full"/>
              </div>

              <div>
                <h6 className="text-sm font-medium ">
                  Mugisho Lwango
                </h6>
                <p className="text-xs">I like your confidence 💪</p>
                <p className="text-xs">2min ago</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
    </li>
  )
}

export default DropdownMessage
