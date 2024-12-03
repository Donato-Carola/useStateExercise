import PropTypes from "prop-types";

const ButtonReload = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-2 rounded rounded-2xl  bg-sky-700"
    >
      <h1>Reload</h1>
    </div>
  );
};

export default ButtonReload;

// Validazione PropTypes
ButtonReload.propTypes = {
  onClick: PropTypes.func.isRequired, // `onClick` deve essere una funzione ed è obbligatorio
};
