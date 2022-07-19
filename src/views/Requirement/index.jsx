import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Title,
  Container1Col,
  FooterImage,
  MessageError,
  SendButton,
} from "../../styles/Requeriment";
import {
  Input,
  LabelInput,LabelInputTitle,
  Selected,
} from "../../styles/Requeriment/InputRequirement";
import {
  getAllBusinessCore,
  getAllTypesBuyCore,
  getAllCategoryCore,
  getAllApplicantCore,
  getAllDepartmentCore,
  CreateFormNew,
  CreatedFormNew,
} from "../../store/Datos";

import {
  SelectedBusinessAction,
  SelectedTypeBuyAction,
  SelectedCategoryAction,
  setApplicantActionCore,
  ActionMailApli,
  SelectedDeparmentAction,
  setRequirementAction,
  clearResponsableMessageErrorAction
} from "../../store/Files";
import Comex from "../../../assets/images/LogoComex.png";
import Central from "../../../assets/images/LogoCentral.png";
import fondoCentral from "../../../assets/icons/fondoCentral.png";
import fondoComex from "../../../assets/icons/fondoComex.png";
import Calderon from "../../../assets/icons/FondoCalderon.png";
import Introduction from "../../components/Introduction";
import FileUploader from "../../components/FileUploader";

const Requirement = () => {
  const dispatch = useDispatch();
  const requiredChar = "*";
  const hoy = new Date();
  const r = document.querySelector(":root");
  const { core, uploader } = useSelector((store) => store);
  const { cabinets, typeBuy, Category, applicant, Deparments, DocumentId } = core;
  const {
    selected,
    TipoCompra,
    cateCompra,
    Appli,
    MailSol,
    SelectDepart,
    require,
    fileUploader,
    fileCotider,
    fileCotider1,
    fileCotider2,
    responsableMessageError,
  } = uploader;

  const [motivo, setMotivo] = useState("");
  const [Docu, setDocum] = useState("");
  const [file, setFile] = useState("");
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    if (messageError) {
      !fileUploader && setFile("");
      setTimeout(() => {
        setMessageError("");
        dispatch(clearResponsableMessageErrorAction());
      }, 3000);
    }
  }, [messageError, dispatch, fileUploader]);
  

  useEffect(() => {
    responsableMessageError && setMessageError(responsableMessageError);
  }, [responsableMessageError]);

  useEffect(() => {
    cabinets.length === 0 && dispatch(getAllBusinessCore());
    typeBuy.length === 0 && dispatch(getAllTypesBuyCore());
    Category.length === 0 && dispatch(getAllCategoryCore());
    applicant.length === 0 && dispatch(getAllApplicantCore());
    Deparments.length === 0 && dispatch(getAllDepartmentCore());
  }, []);

  useEffect(() => {
    !selected || selected === "Comexport"
      ? (r.style.setProperty("--PrimaryColor", "#4c607f"),
        (document.body.style.backgroundImage =
          `url('${fondoComex}')`))
      : (r.style.setProperty("--PrimaryColor", "#F68A20"),
        (document.body.style.backgroundImage =
          `url('${fondoCentral}')`));
  }, [selected]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormDatos, [name]: value });
  };

  const handleSubmit = async (e) => {
    if (MailSol != "") {
      const mailApplicant = {
        mailApplicant: MailSol.name,
      };
      
      const FormEnvio = Object.assign(mailApplicant, FormDatos);
      dispatch(CreateFormNew(FormEnvio));
    }
  };

  const handleSubSumit = async(e) => {
    if(DocumentId){
      const file = {
        file: fileUploader,
      };
  
      const fileCot = {
        file: fileCotider,
      };

      const fileCot1 = {
        file: fileCotider1
      };

      const fileCot2 = {
        file: fileCotider2
      };
  
      const formFile = new FormData();
        file.file && formFile.append("Requerimiento", file.file);
        if(fileCotider != null){
          fileCot.file && formFile.append("cotizacion1", fileCot.file)
        };
        if(fileCotider1 != null){
          fileCot1.file && formFile.append("cotizacion2", fileCot1.file)
        };
        if(fileCotider2 != null){
          fileCot2.file && formFile.append("cotizacion3", fileCot2.file)
        };
      dispatch(CreatedFormNew(formFile, DocumentId.code));
    }
  }

  const [FormDatos, setFormData] = useState({
    businessName: "",
    typeBuy: "",
    categoriesBuy: "",
    applicant: "",
    mailProvider: "",
    departamentConsumer: "",
    request: "",
    approvedBudget: false,
    selectedProvider: false,
    cost: 0,
    approved: false,
    purchaseorder: "",
    rucProvider: "",
    mailAreaManager: "",
    observations: "",
  });

  const navigate = useNavigate();

  const resData = () =>{
    navigate("/Success");
  } 

  return (
    <>
      <Form onSubmit={handleSubSumit}>
        <Title>
          {selected === "" && <FooterImage src={Calderon} />}
          {selected === "Comexport" && <FooterImage src={Comex} />}
          {selected === "Central" && <FooterImage src={Central} />}
        </Title>
        <LabelInputTitle>ADQUISICIONES</LabelInputTitle>

        <Introduction />
        <Container1Col>
        <LabelInput>FECHA DEL REQUERIMIENTO{requiredChar}</LabelInput>
          <Input value={hoy.toLocaleDateString()} disabled />
        </Container1Col>

        <Container1Col>
          <LabelInput>NOMBRE DE LA EMPRESA {requiredChar}</LabelInput>

          <Selected
            name="businessName"
            onChange={(e) => {
              dispatch(SelectedBusinessAction(e.target.value)), handleChange(e);
            }}
          >
            <option hidden>Seleccione Una Empresa</option>
            {cabinets ? (
              cabinets.map((cabinets, index) => (
                <option key={index} value={cabinets.name}>
                  {cabinets.name}
                </option>
              ))
            ) : (
              <></>
            )}
          </Selected>
        </Container1Col>

        {selected != "" && (
          <Container1Col>
            <LabelInput htmlFor="responsableBuy">
              TIPO DE COMPRA{requiredChar}
            </LabelInput>

            <Selected
              name="typeBuy"
              onChange={(e) => {
                dispatch(SelectedTypeBuyAction(e.target.value)),
                  handleChange(e);
              }}
            >
              <option hidden>Seleccione Un Tipo</option>
              {typeBuy ? (
                typeBuy.map((type, index) => (
                  <option key={index} value={type.name}>
                    {type.name}
                  </option>
                ))
              ) : (
                <></>
              )}
            </Selected>
          </Container1Col>
        )}

        {TipoCompra != "" && selected != "" ? (
          <Container1Col>
            <LabelInput>CATEGORIZACIÓN DE COMPRA{requiredChar}</LabelInput>
            <Selected
              name="categoriesBuy"
              onChange={(e) => {
                dispatch(SelectedCategoryAction(e.target.value)),
                  handleChange(e);
              }}
            >
              <option hidden>Seleccione Una Categoria</option>
              {Category ? (
                Category.map((category, index) => (
                  <option key={index} value={category.name}>
                    {category.name}
                  </option>
                ))
              ) : (
                <></>
              )}
            </Selected>
          </Container1Col>
        ) : (
          <></>
        )}

        {cateCompra != "" && selected != "" ? (
          <Container1Col>
            <LabelInput>SOLICITANTE{requiredChar}</LabelInput>
            <Selected
              name="applicant"
              onChange={(e) => {
                dispatch(setApplicantActionCore(e.target.value)),
                  handleChange(e),
                  dispatch(ActionMailApli(e.target.value));
              }}
            >
              <option hidden>Seleccione El Solicitante</option>
              {applicant ? (
                applicant.map((apli, index) => (
                  <option key={index} value={apli.name}>
                    {apli.name}
                  </option>
                ))
              ) : (
                <></>
              )}
            </Selected>
          </Container1Col>
        ) : (
          <></>
        )}

        {selected != "" && Appli != "" ? (
          <Container1Col>
            <LabelInput>CORREO SOLICITANTE{requiredChar}</LabelInput>
            <Input
              type="text"
              id="mailAplicant"
              value={MailSol.name}
              disabled
            />
          </Container1Col>
        ) : (
          <></>
        )}

        {selected != "" && MailSol != "" ? (
          <Container1Col>
            <LabelInput htmlFor="responsableBuy">
              DEPARTAMENTO CONSUMIDOR{requiredChar}
            </LabelInput>
            <Selected
              name="departamentConsumer"
              onChange={(e) => {
                dispatch(SelectedDeparmentAction(e.target.value)),
                  handleChange(e);
              }}
            >
              <option hidden>SELECCIONE UN DEPARTAMENTO</option>
              {Deparments ? (
                Deparments.map((category, index) => (
                  <option key={index} value={category.name}>
                    {category.name}
                  </option>
                ))
              ) : (
                <></>
              )}
            </Selected>
          </Container1Col>
        ) : (
          <></>
        )}

        {selected != "" && SelectDepart != "" ? (
          <Container1Col>
            <LabelInput htmlFor="responsableRequirement">
              MOTIVO DE REQUERIMIENTO{requiredChar}
            </LabelInput>
            <Input
              name="request"
              value={motivo}
              onChange={(e) => {
                setMotivo(e.target.value), handleChange(e);
              }}
              onBlur={(e) => {dispatch(setRequirementAction(e.target.value)), handleSubmit(e)}}
            />
          </Container1Col>
        ) : (
          <></>
        )}

        {selected != "" && require != "" ? <FileUploader /> : <></>}

        {selected != "" && fileUploader != null ? (
          <SendButton onClick={(e) => {resData(), handleSubSumit()}}>ENVIAR</SendButton>
        ) : (
          <></>
        )}
      </Form>
      {messageError ? <MessageError>{messageError}</MessageError> : <></>}
    </>
  );
};

export default Requirement;
