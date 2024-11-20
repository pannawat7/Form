import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100">
      <div className="container max-w-lg bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-6">แบบฟอร์มภาษีเงินได้</h1>
        <p className="text-gray-500 text-center mb-6">
          ------------------------------------------------------------
        </p>
        <form onSubmit={submitForm}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">เงินเดือน :</label>
            <input
              type="text"
              name="salary"
              id="salary"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">โบนัส :</label>
            <input
              type="text"
              name="bonus"
              id="bonus"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">หักประกันสังคมต่อเดือน :</label>
            <input
              type="text"
              name="social"
              id="social"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">จำนวนบุตร :</label>
            <input
              type="text"
              name="children"
              id="children"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">ค่าเบี้ยประกันชีวิต :</label>
            <input
              type="text"
              name="life"
              id="life"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            ตกลง
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormData;
