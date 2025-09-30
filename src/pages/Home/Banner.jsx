import { anticipate } from "motion/react";
import { motion } from "motion/react";
import image from "../../assets/img1.jpg";
import image2 from "../../assets/img2.jpg";
import { Link } from "react-router";

const Banner = () => {
  const floatVariants = {
    animate: (axis) => ({
      [axis]: [0, 20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };
  return (
    <div>
      <section className="">
        <div className="container flex flex-col  p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm   lg:text-left">
            <motion.h1
              animate={{ x: [0, 10, 0] }}
              transition={{
                delay: 5,
                duration: 60,
                repeat: Infinity,
                ease: anticipate,
              }}
              className="text-3xl font-bold leading-none sm:text-5xl"
            >
              Find Your{" "}
              <span className="text-[#2563EB] ">
                <motion.span
                  animate={{
                    color: [
                      "#3B82F6",
                      "#9333EA",
                      "#F59E0B",
                      "#10B981",
                      "#EF4444",
                    ],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-[#b91c1ccc]"
                >
                  Dream Job{" "}
                </motion.span>
              </span>
              Today
            </motion.h1>

            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Explore thousands of opportunities and connect with top companies
              <br className="hidden md:inline lg:hidden" />
              to take your career to the next level.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                href="#_"
                className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative">Brows Jobs</span>
              </a>

              <Link
                to={"/postJob"}
                className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative">Post a Job</span>
              </Link>
            </div>
          </div>
          <div className="relative w-full py-20 flex justify-center items-center">
            <div className="relative flex gap-8 flex-wrap justify-center max-w-6xl">
              {/* Left Orbiter */}
              <motion.div
                custom="x"
                animate={floatVariants.animate("y")}
                whileHover={{ scale: 1.07, rotate: -1 }}
                className="w-[240px] h-[320px] rounded-[30px] overflow-hidden border-[3px] border-[#3b82f6] shadow-[0_20px_60px_-15px_rgba(59,130,246,0.5)] hover:shadow-blue-500/40 transition"
              >
                <img
                  src={image}
                  alt="first iamge"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Center Orbiter */}
              <motion.div
                custom="y"
                animate={floatVariants.animate("x")}
                whileHover={{ scale: 1.1 }}
                className="z-10 w-[270px] h-[350px] rounded-[30px] overflow-hidden border-[3px] border-[#9333ea] shadow-[0_25px_70px_-10px_rgba(147,51,234,0.4)] hover:shadow-purple-500/50 transition"
              >
                <img
                  src={image2}
                  alt="team2"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Right Orbiter */}
              <motion.div
                custom="y"
                animate={floatVariants.animate("y")}
                whileHover={{ scale: 1.07, rotate: 1 }}
                className="w-[240px] h-[320px] rounded-[30px] overflow-hidden border-[3px] border-[#10b981] shadow-[0_20px_60px_-15px_rgba(16,185,129,0.4)] hover:shadow-emerald-400/40 transition"
              >
                <img
                  src={image}
                  alt="team3"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
