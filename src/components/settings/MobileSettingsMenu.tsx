import { LogOut, Palette, Text, Lock } from "lucide-react"

interface MobileSettingsItemProps {
  icon: React.ReactNode
  label: string
  onClick?: () => void
}

const MobileSettingsItem = ({ icon, label, onClick }: MobileSettingsItemProps) => (
  <button
    onClick={onClick}
    className="flex items-center w-full px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
  >
    <div className="flex items-center gap-3">
      <div className="w-5 h-5">{icon}</div>
      <span className="text-base font-medium">{label}</span>
    </div>
  </button>
)

interface MobileSettingsMenuProps {
  onNavigate: (section: "color-theme" | "font-theme" | "change-password") => void
}

export const MobileSettingsMenu = ({ onNavigate }: MobileSettingsMenuProps) => {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#2B303B]">
      {/* Settings Menu Items */}
      <div className="flex-1 md:px-4">
        <div className="py-2">
          <MobileSettingsItem
            icon={<Palette className="w-full h-full" />}
            label="Color Theme"
            onClick={() => onNavigate("color-theme")}
          />
          <MobileSettingsItem
            icon={<Text className="w-full h-full" />}
            label="Font Theme"
            onClick={() => onNavigate("font-theme")}
          />
          <MobileSettingsItem
            icon={<Lock className="w-full h-full" />}
            label="Change Password"
            onClick={() => onNavigate("change-password")}
          />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700/25 my-2" />

        {/* Logout */}
        <div className="py-2">
          <MobileSettingsItem
            icon={<LogOut className="w-full h-full" />}
            label="Logout"

            onClick={() => {/* TODO: Implement logout */}}
          />
        </div>
      </div>
    </div>
  )
}
