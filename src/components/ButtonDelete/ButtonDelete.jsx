// eslint-disable-next-line react/prop-types
const ButtonDelete = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Elimina
    </button>
  );
};

export default ButtonDelete;
