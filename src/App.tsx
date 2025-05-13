import { MenuBar } from "./components/MenuBar";

function App() {
  return (
    <div className="min-h-svh bg-gray-50 dark:bg-gray-900">
      {/* Main content area with padding for the menu bar */}
      <main className="pb-16">
        {/* Your app content goes here */}
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">My Notes</h1>
          {/* Add your notes list or other content here */}
        </div>
      </main>

      {/* Menu Bar */}
      <MenuBar />
    </div>
  );
}

export default App;
