import { useField } from "formik";

const Input = ({ ...props }) => {

    const [field, meta] = useField(props);

    return (
      <>
        <input {...props} {...field} />
        {meta.touched && meta.error ? (
          <div className="error-message">{meta.error}</div>
        ) : null}
      </>
    );
    
}

export default Input