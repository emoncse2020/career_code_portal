import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Applying for job:", jobId, formData);
    alert("Application submitted!");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow my-10">
      <h1 className="text-xl font-bold mb-4">Apply for this Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <textarea
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleChange}
          placeholder="Cover Letter"
          rows="4"
          className="w-full border px-3 py-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Apply Now
        </button>
      </form>
    </div>
  );
};

export default JobApply;
