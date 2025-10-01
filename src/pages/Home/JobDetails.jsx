import { useLoaderData } from "react-router";
import { Briefcase, MapPin, DollarSign, Calendar } from "lucide-react";
import { Link } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();

  if (!job) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        Job details not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 my-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
        <img
          src={job.company_logo}
          alt={job.company}
          className="w-24 h-24 rounded-xl object-contain border border-gray-200 bg-gray-50 p-2"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
          <p className="text-gray-500 text-sm mt-1">{job.company}</p>
        </div>
      </div>

      {/* Info Pills */}
      <div className="flex flex-wrap gap-3 mb-6">
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
        <span className="flex items-center gap-1 px-3 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
          <DollarSign className="w-4 h-4" />{" "}
          {job.salaryRange.min.toLocaleString()} -{" "}
          {job.salaryRange.max.toLocaleString()}{" "}
          {job.salaryRange.currency.toUpperCase()}
        </span>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Job Description
        </h2>
        <p className="text-gray-600">{job.description}</p>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Requirements
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {job.requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Responsibilities
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {job.responsibilities.map((res, i) => (
            <li key={i}>{res}</li>
          ))}
        </ul>
      </div>

      {/* HR Info */}
      <div className="mb-6 border-t pt-4 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="text-sm text-gray-500 mb-3 md:mb-0">
          <p className="font-medium">{job.hr_name}</p>
          <a
            href={`mailto:${job.hr_email}`}
            className="text-blue-600 hover:underline"
          >
            {job.hr_email}
          </a>
        </div>

        {/* Apply Now Button */}
        <Link
          to={`/jobApply/${job._id}`}
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:shadow-lg hover:scale-105 transition-transform duration-200 text-center"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
