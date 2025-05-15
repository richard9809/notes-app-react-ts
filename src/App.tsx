import { useState } from "react";
import { DesktopHeader } from "./components/DesktopHeader";
import { MenuBar } from "./components/MenuBar";
import { NoteMenu } from "./components/NoteMenu";
import { PageHeader } from "./components/PageHeader";
import { SettingsPage } from "./components/settings/SettingsPage";
import { Sidebar } from "./components/Sidebar";
import { Toast } from "./components/ui/Toast";
import { Button } from "./components/ui/button";

function App() {
  // This will be replaced with proper routing later
  const [currentPage, setCurrentPage] = useState<"notes" | "settings">("notes");
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
              title={currentPage === "settings" ? "Settings" : "All Notes"}
              onSettingsClick={() => setCurrentPage("settings")} 
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            {currentPage === "settings" ? (
              <SettingsPage />
            ) : (
              <div className="px-4 py-8">
                {/* Test buttons */}
                <div className="flex gap-4">
                  <Button
                    variant="modalAction"
                    className="bg-emerald-500 hover:bg-emerald-600"
                    onClick={() => setSaveToastOpen(true)}
                  >
                    Save Note
                  </Button>
                  <Button
                    variant="modalAction"
                    className="bg-gray-500 hover:bg-gray-600"
                    onClick={() => setIsMenuOpen(true)}
                  >
                    Open Menu
                  </Button>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-4">Notes list will appear here</p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Menu Bar - hidden on desktop */}
      <div className="xl:hidden">
        <MenuBar />
      </div>

      {/* Right Menu */}
      <NoteMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onArchive={() => {
          setIsMenuOpen(false);
          setArchiveToastOpen(true);
        }}
        onDelete={() => {
          setIsMenuOpen(false);
          console.log('Delete note');
        }}
      />

      {/* Toasts */}
      <Toast
        message="Note saved successfully!"
        isOpen={saveToastOpen}
        onClose={() => setSaveToastOpen(false)}
      />
      <Toast
        message="Note archived."
        isOpen={archiveToastOpen}
        onClose={() => setArchiveToastOpen(false)}
        action={{
          label: "Archived Notes",
          onClick: () => {
            console.log('Navigate to archived notes');
            setArchiveToastOpen(false);
          }
        }}
      />
    </div>
  );
}

export default App;
