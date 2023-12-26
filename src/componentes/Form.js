import { Formik, Form } from "formik"
import Input from './Input'
import styled from "styled-components"

const StyledInput = styled(Input)`
    width: 70%;
    max-width: 400px;
    border-radius: 20px;
    border:none;
    padding: 10px
`;

const StyledForm = styled(Form)`
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: center;
    gap:5px
`
const Button = styled.button`
    color: #fff;
    background: #000;
    border: none;
    padding: 10px 15px;
    border-radius: 20px;
    cursor: pointer;
`

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
            <StyledForm>
                <StyledInput type='text' name='busqueda'/>
                <Button type="submit">Buscar</Button>
            </StyledForm>
        </Formik>
    )
}


export { Formulario, Button }