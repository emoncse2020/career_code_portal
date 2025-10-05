import { useNavigate } from "react-router";

const AddJob = () => {
  const navigate = useNavigate();

  const handleAddJob = async (e) => {
    e.preventDefault();
    const form = e.target;

    const jobData = {
      title: form.title.value,
      location: form.location.value,
      jobType: form.jobType.value,
      category: form.category.value,
      applicationDeadline: form.applicationDeadline.value,
      salaryRange: {
        min: parseInt(form.minSalary.value),
        max: parseInt(form.maxSalary.value),
        currency: form.currency.value,
      },
      description: form.description.value,
      company: form.company.value,
      requirements: form.requirements.value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      responsibilities: form.responsibilities.value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      status: "active",
      hr_email: form.hr_email.value,
      hr_name: form.hr_name.value,
      company_logo: form.company_logo.value,
    };

    const res = await fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobData),
    });

    if (res.ok) {
      alert("✅ Job added successfully!");
      form.reset();
      navigate("/jobs");
    } else {
      alert("❌ Failed to add job");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Add a New Job
      </h2>

      <form
        onSubmit={handleAddJob}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Left Side */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Title
            </label>
            <input
              name="title"
              type="text"
              required
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Software Engineer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              name="company"
              type="text"
              required
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Favorite IT"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              name="location"
              type="text"
              required
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Halishohor, Chittagong"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Type
            </label>
            <select
              name="jobType"
              required
              className="w-full mt-1 p-2 border rounded-md"
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              name="category"
              type="text"
              required
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Engineering"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Application Deadline
            </label>
            <input
              name="applicationDeadline"
              type="date"
              required
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Min Salary
              </label>
              <input
                name="minSalary"
                type="number"
                required
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Max Salary
              </label>
              <input
                name="maxSalary"
                type="number"
                required
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Currency
              </label>
              <input
                name="currency"
                type="text"
                defaultValue="bdt"
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              HR Name
            </label>
            <input
              name="hr_name"
              type="text"
              required
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Farhan Rahman"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              HR Email
            </label>
            <input
              name="hr_email"
              type="email"
              required
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="hr@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Logo URL
            </label>
            <input
              name="company_logo"
              type="url"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="https://i.ibb.co/..."
            />
          </div>
        </div>

        {/* Full Width Fields */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            required
            className="w-full mt-1 p-2 border rounded-md"
            rows="3"
            placeholder="Job responsibilities, role summary, etc."
          ></textarea>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Requirements (comma-separated)
            </label>
            <input
              name="requirements"
              required
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="React, Node.js, MongoDB"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Responsibilities (comma-separated)
            </label>
            <input
              name="responsibilities"
              required
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Develop features, Test code, etc."
            />
          </div>
        </div>

        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow hover:shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Add Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
