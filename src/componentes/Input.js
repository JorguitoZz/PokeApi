import { useField } from "formik";

const Input = ({ ...props }) => {

    const [field] = useField(props)

    return(
        <>
        
        <input {...props} {...field} />
        </>
    )

}

export default Input