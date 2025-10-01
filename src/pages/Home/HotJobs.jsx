import { use } from "react";
import JobCard from "../Shared/JobCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard job={job} key={job._id} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
