import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyApplications = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    accepted: 0,
    rejected: 0,
  });

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/applications?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setApplications(data);

        // Compute simple stats
        const total = data.length;
        const pending = data.filter((a) => a.status === "Pending").length;
        const accepted = data.filter((a) => a.status === "Accepted").length;
        const rejected = data.filter((a) => a.status === "Rejected").length;

        setStats({ total, pending, accepted, rejected });
      })
      .catch((err) => console.error(err));
  }, [user?.email]);

  return (
    <div className="max-w-5xl mx-auto my-10 px-4 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        My Applications
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total", value: stats.total, color: "bg-blue-500" },
          { label: "Pending", value: stats.pending, color: "bg-yellow-400" },
          { label: "Accepted", value: stats.accepted, color: "bg-green-500" },
          { label: "Rejected", value: stats.rejected, color: "bg-red-500" },
        ].map((stat) => (
          <div
            key={stat.label}
            className={`${stat.color} text-white p-6 rounded-lg shadow text-center`}
          >
            <h2 className="text-sm font-medium">{stat.label}</h2>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {applications.map((app) => (
          <div
            key={app._id}
            className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition duration-200 flex justify-between items-start"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {app.formData.name}
              </h2>
              <p className="text-gray-500 text-sm mt-1">{app.formData.email}</p>
              <p className="text-gray-500 text-sm">{app.formData.phone}</p>
              <p className="text-gray-600 mt-2">{app.formData.coverLetter}</p>
            </div>
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                app.status === "Pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : app.status === "Accepted"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {app.status || "Pending"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyApplications;
