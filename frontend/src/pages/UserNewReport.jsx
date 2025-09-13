
import { Home, MapPin, Globe, User, Plus } from "lucide-react";


export const UserNewReport = () => {
    return (
        <div className="">

            <div className="mb-5">
                <div className="bg-white shadow-lg w-full p-4 flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    <div>

                        <h2 className="text-2xl font-bold">Report New Issue </h2>
                        <p className="text-gray-400">Step 1 of 3</p>
                    </div>
                </div>
            </div>
            <div className="mt-41 shadow-lg rounded-lg border border-2 border-gray-300 mx-3">
                <div className="p-4 text-y-4   text-center">
                    <div  className="flex justify-center size-22 w-full">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className="text-blue-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                        </svg>
                    </div>

                    <h1>Upload Photo</h1>
                    <p className="text-gray-400">Take a photo or select from your gallery to document the issue </p>
                    <button className="p-4 bg-blue-400 text-white text-center rounded-lg mt-4 w-full">Take photo / Select Image </button>
                </div>
            </div>


            <div className="fixed bottom-12    left-0 w-full flex justify-around items-center border-t py-3 ">
        <div className="flex flex-col items-center text-blue-500">
          <Home className="w-5 h-5" />
          <span className="text-xs">Home</span>
        </div>
        <div className="flex flex-col items-center text-blue-500">
          <MapPin className="w-5 h-5" />
          <span className="text-xs">My Reports</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <Globe className="w-5 h-5" />
          <span className="text-xs">Explore</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <User className="w-5 h-5" />
          <span className="text-xs">Profile</span>
        </div>
      </div>


        </div>
    )
}


