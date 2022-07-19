import { CoreInstance } from "../../config/axiosInstance";

const initialState = {
    selected: "",
    businessName: "",
    TipoCompra: "",
    cateCompra: "",
    Appli: "",
    MailSol: "",
    SelectDepart: "",
    require: "",
    fileUploader: null,
    fileCotider: null,
    fileCotider1: null,
    fileCotider2: null,
    responsableMessageError: "",
    elementError: "",

};

const SELECTED_NONE_BUSINESS = "SELECTED_NONE_BUSINESS";
const SELECTED_BUSINESS_COMEX = "SELECTED_BUSINESS_COMEX";
const SELECTED_BUSINESS_CENTRAL = "SELECTED_BUSINESS_CENTRAL"; const SELECTED_TYPE_BUY_CORE = "SELECTED_TYPE_BUY_CORE";
const SELECTE_NONE_TYPE_BUY = "SELECTE_NONE_TYPE_BUY";
const SELECTED_CATEGORY_CORE = "SELECTED_CATEGORY_CORE";
const SELECTE_NONE_CATEGORY = "SELECTE_NONE_CATEGORY";
const SELECTED_APLICANT_CORE = "SELECTED_APLICANT_CORE";
const SELECTED_NONE_APLICANT = "SELECTED_NONE_APLICANT";
const GET_SUCCESS_APLICANTMAIL = "GET_SUCCESS_APLICANTMAIL";
const GET_ERRORS_APLICANTMAIL = "GET_ERRORS_APLICANTMAIL";
const SELECTED_DEPARMENT_CORE = "SELECTED_DEPARMENT_CORE";
const SELECTE_NONE_DEPARMENT = "SELECTE_NONE_DEPARMENT";
const SELECT_REQUIREMENT_CORE = "SELECT_REQUIREMENT_CORE";
const SELECTED_FILE_UPLOADER = "SELECTED_FILE_UPLOADER";
const SELECTED_FILE_COTI_UPLOADER = "SELECTED_FILE_COTI_UPLOADER";
const SELECTED_FILE_COTI2_UPLOADER = "SELECTED_FILE_COTI2_UPLOADER";
const SELECTED_FILE_COTI3_UPLOADER = "SELECTED_FILE_COTI3_UPLOADER";
const CLEAR_MESSAGE_ERROR = "CLEAR_MESSAGE_ERROR";
const SELECTED_FILE_COTI_NOT_UPLOADER = "SELECTED_FILE_COTI_NOT_UPLOADER";
const SELECTED_FILE_COTI2_NOT_UPLOADER = "SELECTED_FILE_COTI2_NOT_UPLOADER";
const SELECTED_FILE_COTI3_NOT_UPLOADER = "SELECTED_FILE_COTI3_NOT_UPLOADER";
const SELECTED_FILE_UPLOADER_NOT = "SELECTED_FILE_UPLOADER_NOT";


export default function FileReducer(state = initialState, action) {
    switch (action.type) {
        case SELECTED_NONE_BUSINESS:
        case SELECTED_BUSINESS_COMEX:
        case SELECTED_BUSINESS_CENTRAL:
        case SELECTED_TYPE_BUY_CORE:
        case SELECTE_NONE_TYPE_BUY:
        case SELECTED_CATEGORY_CORE:
        case SELECTE_NONE_CATEGORY:
        case SELECTED_APLICANT_CORE:
        case SELECTED_NONE_APLICANT:
        case GET_SUCCESS_APLICANTMAIL:
        case GET_ERRORS_APLICANTMAIL:
        case SELECTED_DEPARMENT_CORE:
        case SELECTE_NONE_DEPARMENT:
        case SELECT_REQUIREMENT_CORE:
        case SELECTED_FILE_UPLOADER:
        case SELECTED_FILE_COTI_UPLOADER:
        case SELECTED_FILE_COTI2_UPLOADER:
        case SELECTED_FILE_COTI3_UPLOADER:
        case CLEAR_MESSAGE_ERROR:
        case SELECTED_FILE_COTI_NOT_UPLOADER:
        case SELECTED_FILE_COTI2_NOT_UPLOADER:
        case SELECTED_FILE_COTI3_NOT_UPLOADER:
        case SELECTED_FILE_UPLOADER_NOT:
            return action.payload;
        default:
            return state;
    }
};


//Guardar String Data de Empresas
export const SelectedBusinessAction = (name) => async (dispatch, getState) => {
    const { uploader } = getState();
    if (name.length == 0) {
        dispatch({
            type: SELECTED_NONE_BUSINESS,
            payload: {
                ...uploader,
                selected: "",
            }
        });
        return;
    }
    if (name == "COMEXPORT_S.A.") {
        dispatch({
            type: SELECTED_BUSINESS_COMEX,
            payload: { ...uploader, selected: "Comexport", businessName: name }
        });
        return;
    }

    dispatch({
        type: SELECTED_BUSINESS_CENTRAL,
        payload: { ...uploader, selected: "Central", businessName: name }
    });
}

//Guardar String Data de TipoCompra
export const SelectedTypeBuyAction = (name) => async (dispatch, getState) => {
    const { uploader } = getState();
    if (name == 0) {
        dispatch({
            type: SELECTE_NONE_TYPE_BUY,
            payload: { ...uploader, elementError: "Ninguno seleccionado", TipoCompra: "" }
        })
    }
    if (name != 0) {
        dispatch({
            type: SELECTED_TYPE_BUY_CORE,
            payload: { ...uploader, TipoCompra: name, elementError: "" }
        })
    }
};


//Seleccionar Categoria de compras
export const SelectedCategoryAction = (name) => async (dispatch, getState) => {
    const { uploader } = getState();
    if (name == 0) {
        dispatch({
            type: SELECTE_NONE_CATEGORY,
            payload: { ...uploader, elementError: "Ninguno seleccionado", cateCompra: "" }
        })
    }
    if (name != 0) {
        dispatch({
            type: SELECTED_CATEGORY_CORE,
            payload: { ...uploader, cateCompra: name, elementError: "" }
        })
    }
};


//nombre del solicitante
export const setApplicantActionCore = (id) => async (dispatch, getState) => {
    const { uploader } = getState();
    if (id.length === 0) {
        dispatch({
            type: SELECTED_NONE_APLICANT,
            payload: { ...uploader, elementError: "Ninguno seleccionado", cateCompra: "" }
        })
    }
    if (id.length != 0) {
        dispatch({
            type: SELECTED_APLICANT_CORE,
            payload: { ...uploader, Appli: id, elementError: "" }
        })
    }
};

//Consultar y Traer Correo de Solicitante
export const ActionMailApli = (aplicant) => async (dispatch, getState) => {
    const res = aplicant.replace(' ', '%20');
    const { uploader } = getState();
    try {
        const response = await CoreInstance.get(`GetMailApplicant?nameApplicant=${res}`);
        if (response.status == 200) {
            dispatch({
                type: GET_SUCCESS_APLICANTMAIL,
                payload: { ...uploader, MailSol: response.data },
            })
        }
    } catch (error) {
        dispatch({
            type: GET_ERRORS_APLICANTMAIL,
            payload: { ...uploader, MailSol: "", responsableMessageError: error }
        })
    }
};

//Seleccionar Departamento
export const SelectedDeparmentAction = (id) => async (dispatch, getState) => {
    const { uploader } = getState();
    if (id == 0) {
        dispatch({
            type: SELECTE_NONE_DEPARMENT,
            payload: { ...uploader, elementError: "Ninguno seleccionado", cateCompra: "" }
        })
    }
    if (id != 0) {
        dispatch({
            type: SELECTED_DEPARMENT_CORE,
            payload: { ...uploader, SelectDepart: id, elementError: "" }
        })
    }
};


//Llenar Requerimiento
export const setRequirementAction = (require) => async (dispatch, getState) => {
    const { uploader } = getState();
    dispatch({
        type: SELECT_REQUIREMENT_CORE,
        payload: { ...uploader, require: require }
    })
};

//Tomar Archivo Requerimiento
export const addEnablingFileAction = (file) => (dispatch, getState) => {
    const { uploader } = getState();
    if (file.size >= 26214400) {
        dispatch({
            type: SELECTED_FILE_UPLOADER_NOT,
            payload: { ...uploader, fileUploader: null, responsableMessageError: "INGRESE UN ARCHIVO MENOR A 25MB, NO SOPORTADO" }
        });
    } else {
        dispatch({
            type: SELECTED_FILE_UPLOADER,
            payload: { ...uploader, fileUploader: file }
        })
    }
};

//Tomar archivo para cotizacion 1
export const addCotizationFileAction = (file) => (dispatch, getState) => {
    const { uploader } = getState();
    if (file.size >= 26214400) {
        dispatch({
            type: SELECTED_FILE_UPLOADER_NOT,
            payload: { ...uploader, fileCotider: null, responsableMessageError: "INGRESE UN ARCHIVO MENOR A 25MB, NO SOPORTADO" }
        });
    } else {
        dispatch({
            type: SELECTED_FILE_COTI_UPLOADER,
            payload: { ...uploader, fileCotider: file }
        })
    }
};

//Limpiar archivo de cotizacion 1
export const addCotizationNotFileAction = () => (dispatch, getState) => {
    const { uploader } = getState();
    dispatch({
        type: SELECTED_FILE_COTI_NOT_UPLOADER,
        payload: { ...uploader, fileCotider: null }
    })
};



//Tomar archivo para cotizacion 2
export const addCotization2FileAction = (file) => (dispatch, getState) => {
    const { uploader } = getState();
    if (file.size >= 26214400) {
        dispatch({
            type: SELECTED_FILE_UPLOADER_NOT,
            payload: { ...uploader, fileCotider1: null, responsableMessageError: "INGRESE UN ARCHIVO MENOR A 25MB, NO SOPORTADO" }
        });
    } else {
        dispatch({
            type: SELECTED_FILE_COTI2_UPLOADER,
            payload: { ...uploader, fileCotider1: file }
        })
    }
};

//Limpiar archivo de cotizacion 2
export const addCotization2NotFileAction = () => (dispatch, getState) => {
    const { uploader } = getState();
    dispatch({
        type: SELECTED_FILE_COTI2_NOT_UPLOADER,
        payload: { ...uploader, fileCotider1: null }
    })
};

//Tomar archivo para cotizacion 3
export const addCotization3FileAction = (file) => (dispatch, getState) => {
    const { uploader } = getState();
    if (file.size >= 26214400) {
        dispatch({
            type: SELECTED_FILE_UPLOADER_NOT,
            payload: { ...uploader, fileCotider2: null, responsableMessageError: "INGRESE UN ARCHIVO MENOR A 25MB, NO SOPORTADO" }
        });
    } else {
        dispatch({
            type: SELECTED_FILE_COTI3_UPLOADER,
            payload: { ...uploader, fileCotider2: file }
        })
    }
}

//Limpiar archivo para cotizacion 3
export const addCotization3NotFileAction = () => (dispatch, getState) => {
    const { uploader } = getState();
    dispatch({
        type: SELECTED_FILE_COTI3_NOT_UPLOADER,
        payload: { ...uploader, fileCotider2: null }
    })
};


//Limpiar datos de error de mensaje
export const clearResponsableMessageErrorAction = () => (dispatch, getState) => {
    const { uploader } = getState();
    dispatch({
        type: CLEAR_MESSAGE_ERROR,
        payload: { ...uploader, responsableMessageError: "" },
    })
};



