import { Briefcase, MapPin, DollarSign, Calendar } from "lucide-react";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={job.company_logo}
          alt={job.company}
          className="w-16 h-16 rounded-xl object-contain border border-gray-200 bg-gray-50 p-2"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
          <p className="text-sm text-gray-500">{job.company}</p>
        </div>
      </div>

      {/* Info Pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="flex items-center gap-1 px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
          <Briefcase className="w-4 h-4" /> {job.jobType}
        </span>
        <span className="flex items-center gap-1 px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
          <MapPin className="w-4 h-4" /> {job.location}
        </span>
        <span className="flex items-center gap-1 px-3 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">
          <Calendar className="w-4 h-4" />{" "}
          {new Date(job.applicationDeadline).toLocaleDateString()}
        </span>
      </div>

      {/* Salary */}
      <div className="flex items-center gap-2 text-gray-700 font-medium mb-3">
        <DollarSign className="w-5 h-5 text-green-600" />
        {job.salaryRange.min.toLocaleString()} -{" "}
        {job.salaryRange.max.toLocaleString()}{" "}
        {job.salaryRange.currency.toUpperCase()}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
        {job.description}
      </p>

      <div className="border-t pt-3 flex-1">
        {/* Requirements */}
        <h3 className="text-sm font-semibold text-gray-700 mb-2">
          Requirements
        </h3>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-3 space-y-1">
          {job.requirements.slice(0, 3).map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>

        {/* Responsibilities */}
        <h3 className="text-sm font-semibold text-gray-700 mb-2">
          Responsibilities
        </h3>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-3 space-y-1">
          {job.responsibilities.slice(0, 3).map((res, i) => (
            <li key={i}>{res}</li>
          ))}
        </ul>
      </div>

      {/* HR + Button */}
      <div className="mt-4 border-t pt-3 flex items-center justify-between">
        <div className="text-xs text-gray-500">
          <p className="font-medium">{job.hr_name}</p>
          <a
            href={`mailto:${job.hr_email}`}
            className="text-blue-600 hover:underline"
          >
            {job.hr_email}
          </a>
        </div>

        {/* Apply Button */}
        <Link
          to={`/jobs/${job._id}`}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow hover:shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Show Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
