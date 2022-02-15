import { ErrorMessage, Field, Form, Formik } from 'formik'
import styled from 'styled-components'
import * as Yup from 'yup'

const Modal = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PostForm = styled(Form)`
  width: 40%;
  border: solid 1px;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  position: absolute;
  transition:3s;
}
`

const Cancel = styled.span`
  position: absolute;
  top: -6px;
  right: 6px;
  font-size: 20px;
  cursor: pointer;
`

const Error = styled.div`
  color: red;
`

const initialValues = {
  userId: '1',
  title: '',
  body: '',
}

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(53, 'Too Long!')
    .required('Required'),
  body: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
})

const ModalNewPost = (props) => {
  return (
    <Modal>
      <Formik
        initialValues={initialValues}
        onSubmit={props.onSubmit}
        validationSchema={validationSchema}
        validateOnMount   
        dirty
        isValid
      >{props=>{
        return(
          <PostForm>
          <Cancel onClick={() => props.setIsModalActive(false)}>x</Cancel>
          <Field type="text" placeholder="add title" name="title"></Field>
          <Error>
            <ErrorMessage name="title" />
          </Error>
          <Field as="textarea" placeholder="add text" name="body"></Field>
          <Error>
            <ErrorMessage name="body" />
          </Error>
          <button type="submit" disabled = {!props.isValid}>Submit</button>
        </PostForm>
        )
      }}
       
      </Formik>
    </Modal>
  )
}

export default ModalNewPost
