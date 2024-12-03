import PropTypes from "prop-types";

const ButtonJoinNow = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`bg-orange-500 text-white rounded-3xl shadow-md px-8 py-2 flex items-center text-base ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

ButtonJoinNow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ButtonJoinNow;
