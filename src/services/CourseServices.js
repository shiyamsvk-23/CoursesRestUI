import axios from 'axios'

const ADD_REST_API_URL='http://localhost:9090/api/addDetails';
const SEARCHID_REST_API_URL='http://localhost:9090/api/coursesByCourseId/{courseId}';
const SEARCHALL_REST_API_URL='http://localhost:9090/api/showAllCourse';
const UPDATE_REST_API_URL='http://localhost:9090/api/update/{course}';
const DELETE_REST_API_URL='http://localhost:9090/api/delete/{courseId}';


class CourseServices
{
    getAddDetails()
    {
       return axios.get(ADD_REST_API_URL);
    }
    getcoursesByCourseId()
    {
        return axios.getSEARCHALL_REST_API_URL(SEARCHID_REST_API_URL);
    }
    

}

export default new CourseServices();