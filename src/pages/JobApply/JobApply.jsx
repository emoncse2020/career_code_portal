import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      coverLetter: form.coverLetter.value,
    };
    // console.log("Applying for job:", jobId, formData);
    const application = {
      jobId,
      applicant: user.email,
      formData,
    };
    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    alert("Application submitted!");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow my-10">
      <h1 className="text-xl font-bold mb-4">Apply for this Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          defaultValue={user?.name || ""}
          placeholder="Full Name"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          defaultValue={user?.email || ""}
          placeholder="Email"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <textarea
          name="coverLetter"
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
