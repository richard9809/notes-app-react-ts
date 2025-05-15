import { Logo } from "./ui/logo"

export const PageHeader = () => {
  return (
    <header className="flex items-center px-4 md:px-8 py-3 bg-[#F3F5F8] dark:bg-[#2B303B] lg:hidden">
      <Logo />
    </header>
  )
}
