import { CoreInstance, FileInstance, FormInstance } from "../../config/axiosInstance";
import axios from "axios";

const initialState = {
    cabinets: [],
    typeBuy: [],
    Category: [],
    applicant: [],
    Deparments: [],
    DocumentId: {},

};

const GET_ALL_BUSINESS_CORE = "GET_ALL_BUSINESS_CORE";
const GET_ALL_BUSINESS_ERRORS_CORE = "GET_ALL_BUSINESS_ERRORS_CORE";
const GET_ALL_TYPE_BUY_CORE = "GET_ALL_TYPE_BUY_CORE";
const GET_ALL_TYPE_BUY_ERRORS_CORE = "GET_ALL_TYPE_BUY_ERRORS_CORE";
const GET_ALL_CATEGORY_CORE = "GET_ALL_CATEGORY_CORE";
const GET_ALL_CATEGORY_ERROR_CORE = "GET_ALL_CATEGORY_ERROR_CORE";
const GET_ALL_APLICANT_CORE = "GET_ALL_APLICANT_CORE";
const GET_ALL_APLICANT_ERRORS_CORE = "GET_ALL_APLICANT_ERRORS_CORE";
const GET_ALL_DEPARMENT_CORE = "GET_ALL_DEPARMENT_CORE";
const GET_ALL_DEPARMENT_ERRORS_CORE = "GET_ALL_DEPARMENT_ERRORS_CORE";
const SUCCESS_SAVE_DATA_CORE = "SUCCESS_SAVE_DATA_CORE";

export default function DataReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_BUSINESS_CORE:
        case GET_ALL_BUSINESS_ERRORS_CORE:
        case GET_ALL_TYPE_BUY_CORE:
        case GET_ALL_TYPE_BUY_ERRORS_CORE:
        case GET_ALL_CATEGORY_CORE:
        case GET_ALL_CATEGORY_ERROR_CORE:
        case GET_ALL_APLICANT_CORE:
        case GET_ALL_APLICANT_ERRORS_CORE:
        case GET_ALL_DEPARMENT_CORE:
        case GET_ALL_DEPARMENT_ERRORS_CORE:
        case SUCCESS_SAVE_DATA_CORE:
            return action.payload;
        default:
            return state;
    }
};

//traer empresas
export const getAllBusinessCore = () => async (dispatch, getState) => {
    try {
        const res = await CoreInstance.get("GetBusiness");
        const { core } = getState();
        dispatch({
            type: GET_ALL_BUSINESS_CORE,
            payload: { ...core, cabinets: res.data },
        });
    } catch (error) {
        dispatch({
            type: GET_ALL_BUSINESS_ERRORS_CORE,
            payload: { ...core, cabinets: [], responsableMessageError: "ERROR INTERNO, COMUNIQUESE CON SOPORTE" },
        });
    }

};

//traer tipo de compra
export const getAllTypesBuyCore = () => async (dispatch, getState) => {
    try {
        const res = await CoreInstance.get("GetTypeBuys");
        const { core } = getState();
        dispatch({
            type: GET_ALL_TYPE_BUY_CORE,
            payload: { ...core, typeBuy: res.data },
        });
    } catch (error) {
        dispatch({
            type: GET_ALL_TYPE_BUY_ERRORS_CORE,
            payload: { ...core, typeBuy: [], responsableMessageError: "ERROR INTERNO, COMUNIQUESE CON SOPORTE" },
        });
    }

};

//traer tipo categorias de compras
export const getAllCategoryCore = () => async (dispatch, getState) => {
    try {
        const res = await CoreInstance.get("GetCategoriesBuys");
        const { core } = getState();
        if (res.status == 200) {
            dispatch({
                type: GET_ALL_CATEGORY_CORE,
                payload: { ...core, Category: res.data },
            })
        }
    } catch (error) {
        dispatch({
            type: GET_ALL_CATEGORY_ERROR_CORE,
            payload: { ...core, Category: [], responsableMessageError: "ERROR INTERNO, COMUNIQUESE CON SOPORTE" }
        })

    }

}

//traer listado de solicitantes
export const getAllApplicantCore = () => async (dispatch, getState) => {
    try {
        const res = await CoreInstance.get("GetApplicant");
        const { core } = getState();
        dispatch({
            type: GET_ALL_APLICANT_CORE,
            payload: { ...core, applicant: res.data },
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_APLICANT_ERRORS_CORE,
            payload: { ...core, applicant: [], responsableMessageError: "ERROR INTERNO, COMUNIQUESE CON SOPORTE" },
        })
    }

}

// traer tipo de departamente 
export const getAllDepartmentCore = () => async (dispatch, getState) => {
    try {
        const res = await CoreInstance.get("GetDepartamentConsumer");
        const { core } = getState();
        dispatch({
            type: GET_ALL_DEPARMENT_CORE,
            payload: { ...core, Deparments: res.data },
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_DEPARMENT_ERRORS_CORE,
            payload: { ...core, Deparments: [], responsableMessageError: "ERROR INTERNO, COMUNIQUESE CON SOPORTE" },
        })
    }
};



/*<---------------------------Envio de Form-------------------------------->*/
export const CreateFormNew = (FormEnv) =>
    (dispatch, getState) => {
        console.log(FormEnv);
        const { core } = getState();
        axios({
            url: `${FormInstance}Document/InsertData`,
            method: "POST",
            data: FormEnv,
            headers: {
                "Content-Type": "application/json-patch+json",
            },
        })
            .then(function (response) {
                console.log(response)
                // console.log(response.data)
                if (response.status == 200){
                dispatch({
                    type: SUCCESS_SAVE_DATA_CORE,
                    payload: { ...core, DocumentId: response.data}
                })
            }
            }).catch(function (error) {
                console.log(error)
            })
    };

/*<-----------------------------Envio para file--------------------------> */
export const CreatedFormNew = (FileRequire, id) => (dispatch, getState) => {
    // console.log(FileRequire.get("Requerimiento"));
    // console.log(FileRequire.get("cotizacion1"));
    // console.log(FileRequire.get("cotizacion2"));
    // console.log(FileRequire.get("cotizacion3"));
    // console.log(id);
    const { core } = getState();
    axios({
        url: `${FileInstance}File/300/${id}`,
        method: "POST",
        data: FileRequire,
        headers: {
            Accept: 'application/json',
            "Content-Type": "multipart/form-data",
        },
    })
        .then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        })
}
