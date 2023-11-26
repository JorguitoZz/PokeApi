import { Formik, Form } from "formik"
import Input from './Input'


const Formulario = ({ setBusqueda }) => {
    return(
        <Formik
            initialValues={{
                busqueda: '',
            }}
            
            onSubmit={(data, { resetForm }) => {
                setBusqueda(data.busqueda)  
                resetForm()
            }}
        >
            <Form>
                <Input type='text' name='busqueda'/>
                <button type="submit">Buscar</button>
            </Form>
        </Formik>
    )
}

export default Formulario