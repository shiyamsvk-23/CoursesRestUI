import React from 'react';
import CourseServices from '../services/CourseServices';
import { Container, Row, Button } from 'react-bootstrap';

class CourseComponents extends React.Component
{

    constructor(props)
    {
        super(props)
        this.state={
            Courses:[]
        }
    }
    
    componentDidMount(){
        CourseServices.getShowAllCourses().then((response)=>{
            this.setState({ Courses: response.data})
        });
    }
   
    render(){
        return (
            <div>
            <Container>
                
                <table className ="table table-striped text-center">
                    <thead>
             
                        <tr>
                            <td>click </td>
                            <td>Course ID</td><td></td>
                            <td>Course Name</td><td></td>
                            <td>Teacher Name</td><td></td>
                            <td>Class</td><td></td>
                            <td>Created By</td><td></td>
                            <td>Modified By</td><td></td>
                            <td>Created Date</td><td></td>
                            <td>Modified Date</td><td></td>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           this.state.Courses.map(
                               course=>
                               <tr key={course.courseId}>
                                   <td><input type="checkbox"/></td>
                                   <td>{course.courseId}</td><td></td>
                                   <td>{course.course_Name}</td><td></td>
                                   <td>{course.teacher_Name}</td><td></td>
                                   <td>{course.class1}</td><td></td>
                                   <td>{course.createdby}</td><td></td>
                                   <td>{course.modifiedby}</td><td></td>
                                   <td>{course.created_date}</td><td></td>
                                   <td>{course.modified_date}</td><td></td>
                               </tr>
                           )
                       } 
                    </tbody>
        
                </table>
                </Container>
            </div>
        )
    }
}

export default CourseComponents;