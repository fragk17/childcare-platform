import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);  // Go back to the previous page
  };

  return (
    <div className="absolute top-32 right-10">
      <button 
        onClick={handleBack}
        className="bg-gray-500 text-white px-9 py-2 rounded-md shadow hover:bg-gray-600 transition"
      >
        Πίσω
      </button>
    </div>
  );
};

export default BackButton;
