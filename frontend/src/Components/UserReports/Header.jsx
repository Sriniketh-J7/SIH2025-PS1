import { Home, MapPin, Globe, User, Plus } from "lucide-react";

export const Header = ({lable_1, lable_2}) => {
    return (
        <div className="px-3 py-6 flex justify-between shadow-lg">
            <div className="">
                <h1 className="text-2xl font-bold ">{lable_1}</h1>
                <p className="text-gray-400">{lable_2}</p>
            </div>
            <button className="p-4 bg-blue-500 text-white flex items-center gap-2 rounded-lg"> 
                <Plus className="w-4 h-4" />  
                Report New Issue
            </button>
        </div>
    )
}

