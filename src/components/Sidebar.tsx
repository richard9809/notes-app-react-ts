import { Home, Archive, Tag, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "./ui/logo"

interface NavItemProps {
  icon: React.ReactNode
  label: string
  isActive?: boolean
  onClick?: () => void
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center w-full px-4 py-2 rounded-lg transition-colors text-gray-700 dark:text-gray-300",
      "hover:bg-gray-100 dark:hover:bg-gray-800",
      isActive && "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
    )}
  >
    <div className="flex items-center gap-3 flex-1">
      <div className="w-5 h-5">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </div>
    {isActive && (
      <ChevronRight className="w-4 h-4" />
    )}
  </button>
)

interface TagItemProps {
  label: string
  isActive?: boolean
  onClick?: () => void
}

const TagItem: React.FC<TagItemProps> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center w-full px-4 py-2 rounded-lg transition-colors text-gray-700 dark:text-gray-300",
      "hover:bg-gray-100 dark:hover:bg-gray-800",
      isActive && "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
    )}
  >
    <div className="flex items-center gap-3 flex-1">
      <Tag className="w-5 h-5" />
      <span className="text-sm font-medium">{label}</span>
    </div>
    {isActive && (
      <ChevronRight className="w-4 h-4" />
    )}
  </button>
)

export const Sidebar = () => {
  const tags = [
    "Cooking",
    "Dev",
    "Fitness",
    "Health",
    "Personal",
    "React",
    "Recipes",
    "Shopping",
    "Travel",
    "TypeScript"
    
  ]

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-gray-200 dark:border-gray-700/25 h-screen bg-white dark:bg-[#2B303B]">
      <div className="flex flex-col h-full">
        <div className="p-4 flex-none">
          <div className="mb-8">
            <Logo />
          </div>

          <nav className="space-y-1">
            <NavItem
              icon={<Home className="w-full h-full" />}
              label="All Notes"
              isActive
            />
            <NavItem
              icon={<Archive className="w-full h-full" />}
              label="Archived Notes"
            />
          </nav>

          <div className="h-px bg-gray-200 dark:bg-gray-800 my-6" />

          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 px-4 mb-2">Tags</h2>
        </div>

        <div className="flex-1 overflow-y-auto px-4">
          <div className="space-y-1 pb-4">
            {tags.map((tag) => (
              <TagItem key={tag} label={tag} />
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
