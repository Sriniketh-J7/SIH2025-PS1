import { Home, MapPin, Globe, User, Plus } from "lucide-react";
export const Card = () => {
  const reports = [
    {
      id: 1,
      title: "Broken Water Pipe",
      category: "Water & Plumbing",
      address: "123 Main Street, Downtown",
      date: "Jan 15, 2024",
      status: "In Progress",
      color: "bg-yellow-100 text-yellow-700",
      upvotes: 12,
      icon: "💧",
    },
    {
      id: 2,
      title: "Pothole on Oak Avenue",
      category: "Roads & Paving",
      address: "456 Oak Avenue, Midtown",
      date: "Jan 14, 2024",
      status: "Pending",
      color: "bg-red-100 text-red-700",
      upvotes: 8,
      icon: "🚧",
    },
    {
      id: 3,
      title: "Broken Street Light",
      category: "Street Lighting",
      address: "789 Pine Street, Uptown",
      date: "Jan 11, 2024",
      status: "Resolved",
      color: "bg-green-100 text-green-700",
      upvotes: 15,
      icon: "💡",
    },
  ];

  return (
    <div className="space-y-5 bg-white overflow-y-auto">
      {reports.map((report) => {
        return (
          <div className="border  shadow-lg  border-2 p-2 rounded-lg border-gray-200   ">
            <div className="flex justify-between text-gray-600">
              <span>{report.icon}</span>
              <div>
                <h1 className="font-bold">{report.title}</h1>
                <p>{report.category}</p>
              </div>
              <div>
                <span className={` p-2 rounded-lg ${report.color}`}>    
                  {report.status}
                </span>
              </div>
            </div>

            <div className=" justify-between items-center mt-3 ml-16 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {report.address}
              </div>
              <div>{report.date}</div>
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <div>👍 {report.upvotes} upvotes</div>
              </div>
            </div>
          </div>
        );
      })}
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
  );
};
