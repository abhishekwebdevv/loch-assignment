import PropTypes from "prop-types";

export function Input({ placeholder, small, value, onChange, error }) {
  return (
    <input
      type="email"
      value={value}
      onChange={onChange}
      className={`border border-gray-100 outline-none hover:border-gray-400 transition-all ${
        small ? "py-2 px-3" : "py-5 px-6"
      } rounded-lg placeholder:fontmedium placeholder:text-base shadow-input w-full block ${
        error
          ? "animate-shake border-red-500 focus:border-red-500 hover:border-red-500"
          : "focus:border-black "
      }`}
      placeholder={placeholder ? "Enter email address" : ""}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.bool,
  small: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

Input.defaultProps = {
  placeholder: true,
  small: false,
  value: "",
  onChange: () => {},
  error: "",
};
