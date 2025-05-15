import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import { SettingsLayout } from "./SettingsLayout"
import { MobileSettingsMenu } from "./MobileSettingsMenu"
import { Button } from "../ui/button"

type SettingSection = "color-theme" | "font-theme" | "change-password" | null

export const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState<SettingSection>(null)

  const renderSectionContent = () => {
    switch (activeSection) {
      case "color-theme":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Color Theme</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">Choose your color theme:</p>
            </div>
            {/* Add color theme settings here */}
          </div>
        )
      case "font-theme":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Font Theme</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">Choose your font theme:</p>
            </div>
            {/* Add font theme settings here */}
          </div>
        )
      case "change-password":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Change Password</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">Update your password:</p>
            </div>
            {/* Add password change form here */}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="h-full">
      {/* Desktop Layout - Only visible on xl screens */}
      <div className="hidden xl:block h-full">
        <SettingsLayout
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        >
          {renderSectionContent()}
        </SettingsLayout>
      </div>

      {/* Mobile/Tablet Layout - Hidden on xl screens */}
      <div className="xl:hidden h-full bg-white dark:bg-[#2B303B]">
        {activeSection ? (
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center h-14 px-4">
              <Button
                variant="back"
                onClick={() => setActiveSection(null)}
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="text-base font-medium">Settings</span>
              </Button>
            </div>

            {/* Content */}
            <div className="flex-1 px-4">
              {renderSectionContent()}
            </div>
          </div>
        ) : (
          <MobileSettingsMenu onNavigate={setActiveSection} />
        )}
      </div>
    </div>
  )
}
