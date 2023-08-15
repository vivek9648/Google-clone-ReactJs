import axios from "axios";

const Base_URL="https://www.googleapis.com/customsearch/v1"
const params={
    key:'AIzaSyArFHPUN3B0veNev0jAcMLNskyaPW_qOSo',
    cx:'f64b006a4a29a4f81'
}

export const fetchDataFromApi = async (payload) => {

    const {data}=await axios.get(Base_URL,{
        params:{...params,...payload}
    })
    return data;
};
