import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { DesktopHeader } from "@/components/DesktopHeader";
import { MenuBar } from "@/components/MenuBar";
import { NoteMenu } from "@/components/NoteMenu";
import { PageHeader } from "@/components/PageHeader";
import { SettingsPage } from "@/components/settings/SettingsPage";
import { Sidebar } from "@/components/Sidebar";
import { Toast } from "@/components/ui/Toast";

export const DashboardLayout = () => {
  const [saveToastOpen, setSaveToastOpen] = useState(false);
  const [archiveToastOpen, setArchiveToastOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-svh bg-white dark:bg-[#2B303B]">
      {/* Mobile/Tablet Header */}
      <PageHeader />

      <div className="flex">
        {/* Sidebar - only visible on desktop */}
        <Sidebar />

        {/* Main content area */}
        <main className="flex-1 flex flex-col">
          {/* Desktop Header */}
          <div className="hidden xl:block">
            <DesktopHeader 
              title="All Notes"
              onSettingsClick={() => {}} 
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <Routes>
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/" element={
                <div className="px-4 py-8">
                  <p className="text-gray-500 dark:text-gray-400">
                    Notes list will appear here
                  </p>
                </div>
              } />
            </Routes>
          </div>
        </main>
      </div>

      {/* Mobile Menu Bar */}
      <div className="fixed bottom-0 left-0 right-0 xl:hidden">
        <MenuBar />
      </div>

      {/* Note Menu */}
      <NoteMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onArchive={() => {
          setIsMenuOpen(false);
          setArchiveToastOpen(true);
        }}
        onDelete={() => {
          setIsMenuOpen(false);
        }}
      />

      {/* Save Toast */}
      <Toast
        message="Note saved successfully"
        isOpen={saveToastOpen}
        onClose={() => setSaveToastOpen(false)}
      />
      <Toast
        message="Note archived successfully"
        isOpen={archiveToastOpen}
        onClose={() => setArchiveToastOpen(false)}
      />
    </div>
  );
};
