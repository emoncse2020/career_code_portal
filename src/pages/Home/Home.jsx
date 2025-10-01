import { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const Home = () => {
  const jobsPromise = fetch("http://localhost:3000/jobs").then((res) =>
    res.json()
  );
  return (
    <div className="container mx-auto">
      <Banner />
      <Suspense fallback={"Loading..."}>
        <HotJobs jobsPromise={jobsPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
