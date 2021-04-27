import axios from "axios";

const FETCH_URL = "http://localhost:9090/api/showAllCourses";

class NewComp {
  
  getData() {
    return axios.get(FETCH_URL);
  }
  
  deleteData(id) {
    console.log("-----------",id);
    return axios.delete(`http://localhost:9090/api/deleteById?courseId=${id}`);
  }

  saveData(data) {
    console.log("Hiiiiiiii",data);
    const temp = JSON.stringify(data);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: temp,
    };

    return axios.post("http://localhost:9090/api/addDetails", data);
  }
  saveAllData(data) {
    console.log("Hiiiiiiii",data);
    const temp = JSON.stringify(data);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: temp,
    };

    return axios.post("http://localhost:9090/api/addAllDetails", data);
  }

  deleteMultipleData(data) {
    console.log("Inside request data=", data);
    return axios.delete("http://localhost:9090/api/deleteAllDetails", {
      data: data,
    });
  }
}

export default new NewComp();