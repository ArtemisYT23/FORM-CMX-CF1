import { FormSuccess, FooterImage, FormSuccess2 } from "../../styles/Requeriment";
import Comex from "../../../assets/images/LogoComex.png";
import Central from "../../../assets/images/LogoCentral.png";
import "./Parrafo.css";
import { useSelector, useDispatch } from "react-redux";
const Cotizaciones = () => {

  const { uploader } = useSelector((store) => store);
  const { selected } = uploader;
  
  return (
    <>
      <FormSuccess>
        <div className="Iam">
          <p>Formulario Enviado Con Éxito</p>
          <b>
            <div className="innerIam">
              SOMOS CENTRALFILE
              <br />
              Su Aliado en 
              <br />
              Soluciones Informátivas,
              <br />
              Digitalización
              <br />
              MailRoom
            </div>
          </b>
        </div>
        </FormSuccess>
        <FormSuccess2>
        {selected === "Comexport" && <FooterImage src={Comex} />}
        {selected === "Central" && <FooterImage src={Central} />}
        </FormSuccess2>
    </>
  );
};

export default Cotizaciones;
