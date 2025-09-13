import { MapPin } from "lucide-react";

export const ReportNewIssue = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-12  ">
        {/* Header */}
        <div className="bg-white shadow-lg w-full p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <div>
            <h2 className="text-3xl font-bold">Report New Issue</h2>
            <p className="text-gray-400">Step 2 of 3</p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full mb-8 p-3">
          <img
            src="https://picsum.photos/200"
            alt="Broken Pipe"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        {/* Issue Detail */}
        <div className="border border-2 border-gray-400 mx-4 rounded-lg p-4 space-y-5">
          <h3 className="text-xl font-bold">Issue Detail</h3>
          <div className="space-y-1">
            <h1 className="text-md font-semibold">Issue Category</h1>
            <select className="rounded-lg border border-2 border-gray-300 mx-1 px-2 py-1">
              <option>Select Issue Category</option>
            </select>
          </div>

          <div className="space-y-1">
            <h1 className="text-md font-semibold">Location</h1>
            <div className="space-y-2">
              <button className="rounded-lg border border-2 border-gray-300 mx-1 px-2 py-2 flex space-x-2">
                <MapPin />
                <div>Enter address or describe location</div>
              </button>
              <button className="rounded-lg border border-2 border-gray-300 mx-1 px-2 py-2 flex space-x-2">
                <MapPin />
                <div>Use current location</div>
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="p-4">
          <h1>Description</h1>
          <div className="border border-2 border-gray-400 rounded-lg p-4 space-y-5">
            Describe the issue in detail
          </div>
          <button className="bg-green-700 text-white text-center rounded-lg px-4 py-2 mt-4">
            Voice Note
          </button>
        </div>
      <div className=" p-4 shadow-lg">
        <button className="w-full bg-blue-300 text-center p-4 rounded-lg">
          Submit Report
        </button>
      </div>
      </div>

      {/* Fixed Submit Button */}
    </div>
  );
};
