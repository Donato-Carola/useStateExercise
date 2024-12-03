import PropTypes from "prop-types";


const ButtonDeleteAll = ({onClick}) => {
  return (
    <div  onClick={onClick} className="border-red-700 border text-red-700 rounded-2xl px-4 py-2">
      <h1 className="uppercase">delete all</h1>
    </div>
  );
}

export default ButtonDeleteAll;

// Validazione PropTypes
ButtonDeleteAll.propTypes = {
  onClick: PropTypes.func.isRequired, // `onClick` deve essere una funzione ed è obbligatorio
};



