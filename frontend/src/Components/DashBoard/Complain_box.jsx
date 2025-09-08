import { IoLocationOutline } from "react-icons/io5";

export const ComplainBox = (props) => {
  console.log(props.Heading);

  return (
    <div className="p-4 space-y-4 bg-white rounded-lg shadow">
      {/* Heading and Progress */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="font-md font-medium text-black">{props.Heading}</div>
        <div className="bg-gray-200 p-2 rounded-lg font-medium text-sm mt-2 sm:mt-0 sm:ml-4">
          {props.Progress}
        </div>
      </div>

      {/* Location */}
      <div className="text-sm text-gray-400 flex items-center space-x-1">
        <IoLocationOutline />
        <span>{props.Location}</span>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-4 space-y-2 sm:space-y-0">
        <button className="w-full sm:w-auto px-6 py-2 rounded-md text-white bg-orange-300 hover:bg-orange-400 transition">
          Start Work
        </button>
        <button className="w-full sm:w-auto px-6 py-2 rounded-md bg-gray-100 text-gray-400 hover:bg-gray-200 transition">
          Mark Resolved
        </button>
      </div>
    </div>
  );
};
