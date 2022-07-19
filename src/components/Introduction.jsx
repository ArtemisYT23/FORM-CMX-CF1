import { Introducction, AditionalInformation } from "../styles/Requeriment";

const Introduction = () => {
    const requiredChar = "*";
    return(
        <>
        <Introducction>
          El presente formulario permite que se genere un requerimiento o
          instrumentación{" "}
          <strong> cotización, aprobación, o compra, </strong>
          <strong>
            {" "}
            es importante llenar toda la información para que su requerimiento
            pueda procesarse inmediatamente,{" "}
          </strong>
          por registro interno todos los instrumentos legales tendrán un
          administrador
          <strong>
            {" "}
            por lo que es necesario que coloque los nombres y correo correctamente.
          </strong>
        </Introducction>

        <AditionalInformation>
          Todos los campos {requiredChar} son obligatorios
        </AditionalInformation>
        </>
    );
}

export default Introduction;