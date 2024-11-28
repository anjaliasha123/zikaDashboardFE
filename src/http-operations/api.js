import axios from "axios";

const PORT_NUMBER = 9090
const getAllReports = async ()=>{
    const response =  await axios.get(`http://localhost:${PORT_NUMBER}/zikaDashboard/`);
    return response;
}

export default getAllReports;