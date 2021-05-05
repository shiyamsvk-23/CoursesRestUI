import axios from "axios";

const FETCH_URL = "http://localhost:9090/api/showAllCourses";

class NewComp {
  
  getData() {
    return axios.get(FETCH_URL);
  }

  deleteData(id) {
    return axios.delete(`http://localhost:9090/api/deleteById?courseId=${id}`);
  }
  
  saveMultipleData(data) {
    console.log("Inside service class=", data);
    return axios.post("http://localhost:9090/api/addAllDetails", data);
  }

  saveData(data) {
    console.log("Hiiiiiiii",JSON.stringify(data));
    const temp = JSON.stringify(data);
    return axios.post("http://localhost:9090/api/addDetails", data);
  }
 
  deleteMultipleData(data) {
    console.log("Inside request data=", data);
    return axios.delete("http://localhost:9090/api/deleteAllDetails", {
      data: data,
    });
  }

  updateData(data) {
    return axios.put("http://localhost:9090/api/update", data);
  }
}

export default new NewComp();