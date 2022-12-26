import { Heartbeat } from "phosphor-react"
export default function Header(){
    return(
        <div className="h-10 w-[100%] mb-20 bg-bl-100 flex items-center justify-center">
        <header className="flex gap-1 items-center">
            <span>Alterdata</span><span className="text-orange-500">Service</span><span className="text-orange-500">Status</span><Heartbeat size={22} color="#00875F"/>
        </header>
        <nav>
            
        </nav>
        </div>
    )
}