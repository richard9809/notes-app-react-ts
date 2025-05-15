import { ChevronRight, LogOut, Palette, Text, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

interface SettingsMenuItemProps {
  icon: React.ReactNode
  label: string
  isActive?: boolean
  onClick?: () => void
  showChevron?: boolean
}

const SettingsMenuItem = ({ icon, label, isActive, onClick, showChevron = true }: SettingsMenuItemProps) => (
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
    {showChevron && isActive && (
      <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
    )}
  </button>
)

interface SettingsLayoutProps {
  activeSection: "color-theme" | "font-theme" | "change-password" | null
  onSectionChange: (section: "color-theme" | "font-theme" | "change-password" | null) => void
  children: React.ReactNode
}

export const SettingsLayout = ({ activeSection, onSectionChange, children }: SettingsLayoutProps) => {
  return (
    <div className="flex h-full">
      {/* Settings Sidebar */}
      <div className="w-72 border-r border-gray-200 dark:border-gray-700/25 pl-8 pr-4 py-4">
        <div className="space-y-2">
          <SettingsMenuItem
            icon={<Palette className="w-full h-full" />}
            label="Color Theme"
            isActive={activeSection === "color-theme"}
            onClick={() => onSectionChange("color-theme")}
          />
          <SettingsMenuItem
            icon={<Text className="w-full h-full" />}
            label="Font Theme"
            isActive={activeSection === "font-theme"}
            onClick={() => onSectionChange("font-theme")}
          />
          <SettingsMenuItem
            icon={<Lock className="w-full h-full" />}
            label="Change Password"
            isActive={activeSection === "change-password"}
            onClick={() => onSectionChange("change-password")}
          />
          
          {/* Divider */}
          <div className="my-2 border-t border-gray-200 dark:border-gray-700/25" />
          
          <SettingsMenuItem
            icon={<LogOut className="w-full h-full" />}
            label="Logout"
            showChevron={false}
            onClick={() => {/* TODO: Implement logout */}}
          />
        </div>
      </div>

      {/* Settings Content */}
      <div className="flex-1 p-6">
        {children}
      </div>
    </div>
  )
}
