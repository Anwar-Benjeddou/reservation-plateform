/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState,useModal,LoadingSpinner} from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import './login.css';

import { Modal, Space } from 'antd';
import 'antd/dist/antd.css';
// core components
// axios.defaults.baseURL = "http://localhost:8000";

function SectionLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);

  const showModal1 = () => {
    setIsModalVisible1(true);
  };

  const handleOk1 = () => {
    setIsModalVisible1(false);
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };
  const [isModalVisible2, setIsModalVisible2] = useState(false);

  const showModal2 = () => {
    setIsModalVisible2(true);
  };

  const handleOk2 = () => {
    setIsModalVisible2(false);
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };
  const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );
  // form validation rules 
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Le champ "Nom" est obligatoire'),
    lastName: Yup.string()
        .required('Le champ "Prénom" est obligatoire'),
    clientType: Yup.string()
        .required('Le champ "Type du client" est obligatoire'),
    description: Yup.string()
        .required('Le champ "description" est obligatoire'),
    dateFrom: Yup.string()
        .required('Le champ "Date de" est obligatoire')
        .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, '"Date de" doit ètre valide au format YYYY-MM-DD'),
    duration: Yup.number()
        .typeError('Le budget minimal doit ètre un numérique non null')
        .required('Le champ "Budget de" est obligatoire'),
    budgetFrom: Yup.number()
        .typeError('Le budget minimal doit ètre un numérique non null')
        .required('Le champ "Budget de" est obligatoire')
        .positive('Le champ doit ètre positif'),
    budgetTo: Yup.number()
        .typeError('Le budget maximal doit ètre un numérique non null')
        .required('Le champ "Budget à" est obligatoire')
        .positive('Le champ doit ètre positif'),
    email: Yup.string()
        .required('Le champ "email" est obligatoire')
        .email('Email non valide'),
    phone: Yup.string().matches(/^\d{8}$/,'Forme du numéro de téléphone non valide')
        .required('Le champ "téléphone" est obligatoire')
});
const formOptions = { resolver: yupResolver(validationSchema) };
const [dataErrors, setData] = useState([]);
// get functions to build form with useForm() hook
const { register, handleSubmit, reset, formState } = useForm(formOptions);
const { errors } = formState;

function onSubmit(data) {
    // display form data on success
    const payload={
      "first_name":data.firstName,
      "last_name":data.lastName,
      "description":data.description,
      "date_from":data.dateFrom,
      "client_type":data.clientType,
      "duration":data.duration,
      "budget_from":data.budgetFrom,
      "budget_to":data.budgetTo,
      "phone":data.phone,
      "email":data.email,
      "transport_include":data.transportInclude
  }
  setIsLoading(true);
axios.post('http://localhost:8000/api/reservation/register', payload)
.then(function (response) {
  console.log("response=>"+response.data);
  setIsLoading(false);
    setStatus({ type: 'success' });
    reset();
    showModal2();
})
.catch(function (error) {
  setIsLoading(false);
  setStatus({ type: 'error' });
  console.log("failed");
  if(error.response.data.code=="fails_validation"){
    console.log("fails")
    
    setData(error.response.data.error_message);
    console.log("data =>",typeof(dataErrors));
    showModal1();
  }
console.log("ERROR::",JSON.stringify(error.response.data.error_message));
});  
    return false;
}
  // const {isShowing, toggle} = useModal();
  const [status, setStatus] = useState(undefined);
  const [state , setState] = useState({
    firstName : "",
    lastName : "",
    description : "",
    dateFrom : "",
    duration : "",
    BudgetFrom : "",
    BudgetTo : "",
    clientType:"",
    transportInclude:"",
    phone : "",
    email : ""
  })  
  // const handleChange = (e) => {
  //   const {id , value} = e.target   
  //   setState(prevState => ({
  //       ...prevState,
  //       [id] : value
  //   }))
  // }

  // const handleSubmitClick = (e) => {
  //   e.preventDefault();
  // if(state.fullName.length && state.dateFrom.length && 
  //   state.dateTo.length && state.description.length &&
  //   state.budgetFrom.length && state.budgetTo.length &&
  //   state.phone.length || state.email.length) {
  //     const payload={
  //         "full_name":state.fullName,
  //         "description":state.description,
  //         "date_from":state.dateFrom,
  //         "date_to":state.dateTo,
  //         "budget_from":state.budgetFrom,
  //         "budget_to":state.budgetTo,
  //         "phone":state.phone,
  //         "email":state.email
  //     }
      
//   } else {
//      alert('Please enter valid data')    
//   }
  
// }
// const [showModal, setShowModal] = useState(false);
// const handleShow = () => setShowModal(true);
// const handleClose = () => setShowModal(false);
  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage:
            "url(" + require("assets/img/login-image.jpg").default + ")",
        }}
        
      >
        {/* <Button type="primary" onClick={showModal1}>
      Open Modal
    </Button> */}
    <Modal title="Réservation" visible={isModalVisible1} onOk={handleOk1} onCancel={handleCancel1}>
      
      <ul style={{listStyleType:"none"}}>
        {Object.keys(dataErrors).map(function(keyName, keyIndex) {
          return (
              <li key={keyName}><i class="fa fa-exclamation-triangle" style={{color:"red"}}></i>
              {keyName=="date_from"?"date de référence":keyName} :
                       {dataErrors[keyName]}
                </li>
          )
      })}
    </ul>
      {/* {dataErrors.map((item, i) => (
        <p className="input-label">key: {i} Name: {dataErrors[item]}</p>
      ))} */}
    </Modal>
    <Modal title="Réservation" visible={isModalVisible2} onOk={handleOk2} onCancel={handleCancel2}>
      
      <ul style={{listStyleType:"none"}}>
        <span><i class="fa fa-check" style={{color:"green"}}></i>La demande de réservation a été enregistré avec succès.</span>
    </ul>
      {/* {dataErrors.map((item, i) => (
        <p className="input-label">key: {i} Name: {dataErrors[item]}</p>
      ))} */}
    </Modal>
        <Container>
          <Row>
            <Col className="mx-auto" lg="7" md="6">
              <Card className="card-register-login">
                <h3 className="title mx-auto">Bienvenu</h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mt-0"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter"/>
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mt-0 ml-1"
                    color="whatsapp"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-whatsapp"  style={{color:"green"}}/>
                  </Button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="form-group col">
                            <label className="login-label">Nom </label>
                            <input name="firstName" type="text" {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.firstName?.message}</div>
                        </div>
                        <div className="form-group col">
                            <label className="login-label">Prénom</label>
                            <input name="lastName" type="text" {...register('lastName')} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.lastName?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                    <div className="form-group col">
                            <label className="login-label">Type du client</label>
                            <input name="clientType" type="text" {...register('clientType')} className={`form-control ${errors.clientType ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.clientType?.message}</div>
                        </div>
                        <div className="form-group col">
                            <label className="login-label">Téléphone</label>
                            <input name="phone" type="text" {...register('phone')} className={`form-control ${errors.phone ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.phone?.message}</div>
                        </div>
                        </div>
                    <div className="form-row">
                        <div className="form-group col">
                            <label className="login-label">Date référence</label>
                            <input name="dateFrom" type="date" {...register('dateFrom')} className={`form-control ${errors.dateFrom ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.dateFrom?.message}</div>
                        </div>
                        <div className="form-group col">
                            <label className="login-label">durée de séjour</label>
                            <input name="duration" type="number" min="1" style={{width:70}} {...register('duration')} className={`form-control ${errors.duration ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.duration?.message}</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            <label className="login-label">Budget de</label>
                            <input name="budgetFrom" type="text" {...register('budgetFrom')} className={`form-control ${errors.budgetFrom ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.budgetFrom?.message}</div>
                        </div>
                        <div className="form-group col">
                            <label className="login-label">Budget à</label>
                            <input name="budgetTo" type="text" {...register('budgetTo')} className={`form-control ${errors.budgetTo ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.budgetTo?.message}</div>
                        </div>
                    </div>
                    
                    <div className="form-row">
                    <div className="form-group col">
                            <label className="login-label">Description</label>
                            <textarea name="description" type="text" {...register('description')} className={`form-control ${errors.description ? 'is-invalid' : ''}`}></textarea>
                            <div className="invalid-feedback">{errors.description?.message}</div>
                        </div>
                        
                        <div className="form-group col">
                            <label className="login-label">addresse email</label>
                            <input name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
                    </div>
                    <div className="form-group col">
                      <label className="login-label" style={{display:"block"}}>Transport inclu 
                      <input name="transportInclude" type="checkbox" style={{marginLeft:10,width:20,height:20}} {...register('transportInclude')}  /></label>
                      <div className="invalid-feedback">{errors.transportInclude?.message}</div>
                    </div>
                    {/* {isLoading ? (
        <p><img src={require('assets/img/spinner-green.gif')} class="center"/></p>
      ) : ""} */}
                    <div className="form-group buttons-login">
                        <button type="submit" className="btn btn-primary mr-1">Enregistrer</button>
                        <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button>
                    </div>
                </form>
                {/* <div>
                {dataErrors.map((item, i) => (
                  <li className="travelcompany-input" key={i}>
                  <span className="input-label">key: {i} Name: {dataErrors[item]}</span>
                 </li>
                ))}
                
              </div> */}
                {status?.type === 'error' && (
                  <p style={{"textAlign":"center"}} className="login-label">"Une erreur c'est produite lors de l'enregistrement de la demande!"</p>
                  
                )}
                 {/* <Modal
                  isShowing={isShowing}
                  hide={toggle}
                /> */}
              </Card>
            </Col>
          </Row>
        </Container>
        
      </div>{" "}
      
    </>
  );
}

export default SectionLogin;
