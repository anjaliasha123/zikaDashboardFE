import axios from "axios";

const getAllReports = async ()=>{
    const response =  await axios.get('http://localhost:8080/zikaDashboard/');
    return response;
}

export default getAllReports;