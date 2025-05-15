import { Search, Settings } from "lucide-react"
import { Input } from "./ui/input"

interface DesktopHeaderProps {
  title: string
  onSettingsClick: () => void
}

export const DesktopHeader = ({ title, onSettingsClick }: DesktopHeaderProps) => {
  return (
    <header className="flex items-center justify-between h-[72px] px-6 border-b border-gray-200 dark:border-gray-700/25 bg-white dark:bg-[#2B303B]">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h1>
      
      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Search by title, content, or tags..."
          leftIcon={<Search className="w-4 h-4" />}
          className="w-[300px]"
        />
        
        <button 
          onClick={onSettingsClick}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}
