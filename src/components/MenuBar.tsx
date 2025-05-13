import { Home, Search, Archive, Tag, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

interface MenuItemProps {
  icon: React.ReactNode
  label: string
  isActive?: boolean
  onClick?: () => void
  showDivider?: boolean
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, isActive, onClick, showDivider }) => (
  <div className="flex items-center">
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center gap-1 px-4 py-3 transition-colors relative",
        "hover:bg-gray-100 dark:hover:bg-gray-800",
        isActive && "text-blue-600 dark:text-blue-400"
      )}
    >
      <div className="w-5 h-5">{icon}</div>
      <span className="text-xs font-medium sm:block hidden">{label}</span>
    </button>
    {showDivider && (
      <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-8 sm:block hidden" />
    )}
  </div>
)

export const MenuBar = () => {
  const menuItems = [
    { icon: <Home className="w-full h-full" />, label: "Home" },
    { icon: <Search className="w-full h-full" />, label: "Search" },
    { icon: <Archive className="w-full h-full" />, label: "Archived" },
    { icon: <Tag className="w-full h-full" />, label: "Tags" },
    { icon: <Settings className="w-full h-full" />, label: "Settings" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-around">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              label={item.label}
              isActive={index === 0}
              showDivider={index < menuItems.length - 1}
            />
          ))}
        </div>
      </div>
    </nav>
  )
}
