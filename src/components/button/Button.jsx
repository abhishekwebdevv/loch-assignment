import PropTypes from "prop-types";

export function Button({ onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="bg-black text-white rounded-lg w-full py-4"
    >
      Get started
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

Button.defaultPropTypes = {
  onClick: () => {},
};
