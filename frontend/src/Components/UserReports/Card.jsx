import { Home, MapPin, Globe, User, Plus } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { formatDate } from "../../lib/utils";
export const Card = () => {
  const { myReports } = useContext(UserContext);
  const [reportsList, setreport] = useState([]);

  useEffect(() => {
    const fetchAllReports = async () => {
      const data = await myReports();
      setreport(data || {});
      console.log(data);
      
    };
    fetchAllReports();
  }, []);


    const getStatusBadge = (status) => {
      switch (status) {
        case "Pending":
          return (
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-600 border border-red-200">
              Pending
            </span>
          );
        case "In Progress":
          return (
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-600 border border-yellow-200">
              In Progress
            </span>
          );
        case "Resolved":
          return (
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-600 border border-green-200">
              Resolved
            </span>
          );
        case "Assigned":
          return (
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-600 border border-blue-200">
              Assigned
            </span>
          );
        default:
          return (
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-600 border border-gray-200">
              {status}
            </span>
          );
      }
    };


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
      {reportsList.map((report) => {
        return (
          <div
            key={report._id}
            className="border  shadow-lg  border-2 p-2 rounded-lg border-gray-200   "
          >
            <div className="flex justify-between text-gray-600">
              <span>{report.reportId}</span>
              <div>
                <h1 className="font-bold">{report.title}</h1>
              </div>
              <div>
                  {report.status? getStatusBadge(report.status): ""}
              </div>
            </div>

            <div className=" justify-between items-center mt-3 ml-16 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {report?.location?.address}
              </div>
              <div>
                {!report.createdAt ? "--" : formatDate(report.createdAt)}
              </div>
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <div>👍 1 upvotes</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
