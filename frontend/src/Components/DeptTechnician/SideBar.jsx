

 import { BarChart2, FileText, Users, MessageSquare, Settings } from 'lucide-react';
 import { useState } from 'react';
export const SideBar = ( ) => {

    const [active, setActive] = useState("Dashboard Overview");


    const menuItems = [
        {name: "Dashboard Overview", icon: <BarChart2/>},
        {name: "My Department Report", icon: <FileText size={20}/>},
        {name: "My Technicians", icon: <Users/>},
        {name: "Citizen Feedback", icon: <MessageSquare/>},
        {name: "Profile & Settings", icon: <Settings/>},
    ];


    return (
        <div className="h-screen w-[17%] p-3  pt-5">
            <div className="flex space-x-2 items-center">
                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" className='size-9' stroke-linejoin="round" class="lucide lucide-chart-area-icon lucide-chart-area"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/></svg> </div>
                <div>
                    <h1 className="text-gray-800 text-lg font-semibold">City Services</h1>
                    <p className="text-gray-400">Admin Dashboard</p>
                </div>
            </div>
            <div className="mt-14 flex-1 space-y-4 ">
                {menuItems.map((item) => {
                    return(

                        <button onClick={() => {setActive(item.name)}} className= {`text-gray-400 flex space-x-3 px-6 py-3 cursor-pointer transition-colors rounded-lg ${active === item.name ? "bg-blue-100 text-gray-800": null}`}>
                            {item.icon}
                            <span>{item.name}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}