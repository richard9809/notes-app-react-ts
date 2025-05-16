import { Feather } from "lucide-react"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Feather className="h-6 w-6 text-blue-600" />
      <h1 
        className="text-[23px] font-normal text-[#0e121b] dark:text-white" 
        style={{ fontFamily: 'Pacifico, cursive' }}
      >
        Notes
      </h1>
    </div>
  )
}
