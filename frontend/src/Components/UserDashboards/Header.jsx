
import { Menu, X } from "lucide-react";
import {useState} from "react"

export const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className=" border-b flex justify-between  bg-gray-100 shadow-lg py-5 px-5 ">
      <div className="flex space-x-3  items-center"> 
        <div >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className="bg-blue-500 text-white size-11 rounded-lg  " >
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </div>
        <div className=" font-semibold">CivicReport</div>
      </div>
      <div className="flex items-center">
        <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 bg-yellow-300 rounded-lg size-8 " >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </div>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {
            menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {menuOpen && (
            <div className="rounded-md absolute top-14 right-6  shawdow-lg pt-3 px-4 bg-gray-50 w-40 z-10">
              <ul className=" space-y-5 text-gray-700 p-3">
                <li className="border-b border-gray-200 p-3 w-full bg-green-400 rounded-lg">About</li>
                <li className="border-b border-gray-200 p-3 w-full">How it works</li>
                <li className="border-b border-gray-200 p-3 w-full">Sign In</li>
                <li className="border-b border-gray-200 p-3 w-full bg-blue-500 rounded-lg text-white ">Get Started</li>
              </ul>
            </div>
          )
          }
      </div>
    </div>
  );
};
