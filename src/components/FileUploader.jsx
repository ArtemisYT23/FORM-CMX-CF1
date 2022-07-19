import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ennablingsType,
  ennablingsCotizacion,
  ennablingsCotizacions,
  ennablingsCotizacionss,
} from "../types/ennablingsType";
import {
  addEnablingFileAction,
  addCotizationFileAction,
  addCotization2FileAction,
  addCotization3FileAction,
  addCotizationNotFileAction,
  addCotization2NotFileAction,
  addCotization3NotFileAction
} from "../store/Files";
import { Input, Selected } from "../styles/Requeriment/InputRequirement";
import {
  ActionFile,
  TypeFileContainer,
  FileContainer,
} from "../styles/Requeriment/File";
import FileHeaderContainer from "../styles/Requeriment/FileEnabling";
import addIcon from "../../assets/icons/Crear.svg";
import removeIcon from "../../assets/icons/Eliminar.svg";

const FileUploader = () => {
  const [Coti, setCoti] = useState(false);
  const [Coti2, setCoti2] = useState(false);
  const [Coti3, setCoti3] = useState(false);
  const dispatch = useDispatch();

  const changeFile = () => {
    setCoti(true);
  };

  const setFile = (e) => {
    const file = e.target.files[0];
    dispatch(addEnablingFileAction(file));
  };

  const setFileTwo = (e) => {
    const file = e.target.files[0];
    dispatch(addCotizationFileAction(file));
  };

  const setFileThree = (e) => {
    const file = e.target.files[0];
    dispatch(addCotization2FileAction(file));
  };

  const setFileFour = (e) => {
    const file = e.target.files[0];
    dispatch(addCotization3FileAction(file));
  };

  const changeFileTwo = () => {
    setCoti2(true);
  };

  const changeFileThree = () => {
    setCoti3(true);
  };

  return (
    <TypeFileContainer>
      <FileHeaderContainer>
        ADJUNTAR ARCHIVOS
        <ActionFile onClick={(e) => changeFile(e)}>
          <img width="100%" src={addIcon} alt="addIcon"></img>
        </ActionFile>
      </FileHeaderContainer>
      <FileContainer>
        <Selected marginTop="0">
          {Object.keys(ennablingsType).map((key, i) => (
            <option key={i} value={key}>
              {ennablingsType[key]}
            </option>
          ))}
        </Selected>
        <br />
        <Input accept=".xlsx" type="file" onInput={(e) => setFile(e)} />
      </FileContainer>

      {Coti && (
        <>
          <FileHeaderContainer>
            <ActionFile onClick={(e) => changeFileTwo(e)}>
              <img width="100%" src={addIcon} alt="addIcon"></img>
            </ActionFile>
          </FileHeaderContainer>
          <FileContainer>
            <Selected marginTop="0">
              {Object.keys(ennablingsCotizacion).map((key, i) => (
                <option key={i} value={key}>
                  {ennablingsCotizacion[key]}
                </option>
              ))}
            </Selected>
            <ActionFile
              onClick={(e) => {
                setCoti(false), dispatch(addCotizationNotFileAction());
              }}
            >
              <img width="100%" src={removeIcon} alt="removeIcon"></img>
            </ActionFile>
            <br />
            <Input accept=".pdf" type="file" onInput={(e) => setFileTwo(e)} />
          </FileContainer>
        </>
      )}

      {Coti2 && (
        <>
          <FileHeaderContainer>
            <ActionFile onClick={(e) => changeFileThree(e)}>
              <img width="100%" src={addIcon} alt="addIcon"></img>
            </ActionFile>
          </FileHeaderContainer>
          <FileContainer>
            <Selected marginTop="0">
              {Object.keys(ennablingsCotizacions).map((key, i) => (
                <option key={i} value={key}>
                  {ennablingsCotizacions[key]}
                </option>
              ))}
            </Selected>
            <ActionFile onClick={(e) => {setCoti2(false), dispatch(addCotization2NotFileAction())}}>
              <img width="100%" src={removeIcon} alt="removeIcon"></img>
            </ActionFile>
            <br />
            <Input accept=".pdf" type="file" onInput={(e) => setFileThree(e)} />
          </FileContainer>
        </>
      )}

      {Coti3 && (
        <FileContainer>
          <Selected marginTop="0">
            {Object.keys(ennablingsCotizacionss).map((key, i) => (
              <option key={i} value={key}>
                {ennablingsCotizacionss[key]}
              </option>
            ))}
          </Selected>
          <ActionFile onClick={(e) => {setCoti3(false), dispatch(addCotization3NotFileAction())}}>
            <img width="100%" src={removeIcon} alt="removeIcon"></img>
          </ActionFile>
          <br />
          <Input accept=".pdf" type="file" onInput={(e) => setFileFour(e)} />
        </FileContainer>
      )}
    </TypeFileContainer>
  );
};

export default FileUploader;
