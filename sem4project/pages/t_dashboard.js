import React, { useState } from "react";
import {classes} from '../components/class'
import CreateClass from "./teacherCreateClass";
import Assignment from "./teacherAssignment";
import Quiz from "./teacherQuiz"
import { nanoid } from 'nanoid';
import { assignments } from "@/components/assignment";
import AddClassForm from "./addClass";
import AddAssignmentForm1 from "./addAssignment1";
import AddQuizForm from "./addQuiz";
import { quizs } from "@/components/quiz";

function TeacherDashboards() {


  const handleDeleteClass = (classCodeToDelete) => {
    classes.filter((classItem) => classItem.classCode !== classCodeToDelete);
  };

  const [selectedClass, setSelectedClass] = useState(null);
  // const [selectedAssignment, setSelectedAssignment] = useState(null);
  const handleSelectClass = (classCode) => {
    const selected = classes.find((classItem) => classItem.classCode === classCode);
    const selectedAssignments = assignments.filter((assignment) => assignment.classCode === classCode);
    const selectedQuizs = quizs.filter((quiz) => quiz.classCode === classCode);
    setSelectedClass({...selected, assignments: selectedAssignments, quizs:selectedQuizs});
  };
  // setSelectedAssignment(assignments.find((assignmentItem) => assignmentItem.classCode===classCode));
  return (
    <div>
      <h2>Teacher Dashboard - Class List</h2>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => setSelectedClass(null)}>
              View All Classes
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setSelectedClass("create")}>
              Create New Class
            </a>
          </li>
        </ul>
      </nav>
      <hr />
     
      {selectedClass === "create" && <AddClassForm />}
      {selectedClass && selectedClass !== "create" && (
        <div>
          <h3>{selectedClass.className}</h3>
          <p>
            <strong>Subject: </strong>
            {selectedClass.subject}
          </p>
          <p>
            <strong>Description: </strong>
            {selectedClass.description}
          </p>
          <p>
            <strong>Class Code: </strong>
            {selectedClass.classCode}
          </p>
          <ul>
            <h4>Assignments</h4>
            {selectedClass.assignments.map((assignment) => (
              <li key={assignment.id}>
                {assignment.title}
               {assignment.description}
             
              </li>
            ))}
          
          </ul>
          <ul>
          <h4>Quizzes</h4>
          <li>
              {selectedClass.quizs.map((quiz) => (
              <li key={quiz.id}>
               
                {/* <a href={quiz.quizLink} target="_blank" rel="noreferrer">
                  Quiz 
                </a>
               {' - '}
                Deadline: {quiz.duedate.toLocaleString()} */}
                <a href="quiz.quizlink"> {quiz.title}</a>
              </li>
            ))}
            </li>
            </ul>
          <nav>
            <ul>
              <li>
                <a href="#" onClick={() => setSelectedClass({ ...selectedClass, action: "assignment" })}>
                  Add Assignment
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setSelectedClass({ ...selectedClass, action: "quiz" })}>
                  Add Quiz
                </a>
              </li>
            </ul>
          </nav>
          <hr />
          
          <button onClick={() => handleDeleteClass(selectedClass.classCode)}>Delete Class</button>
          
       
          {selectedClass.action === "assignment" && <AddAssignmentForm1 classCode={selectedClass.classCode}  />}
          {selectedClass.action === "quiz" && <AddQuizForm/>}
        </div>
      )}
    
      {!selectedClass && (
        <div>
          <h3>My Classes</h3>
          <ul>
            {classes.map((classItem) => (
              <li key={classItem.classCode}>
                <h4>{classItem.className}</h4>
                <p>
                  <strong>Subject: </strong>
                  {classItem.subject}
                </p>
                <p>
                  <strong>Description: </strong>
                  {classItem.description}
                </p>
                <p>
                  <strong>ClassCode: </strong>
                  {classItem.classCode}
                </p>
                <button onClick={() => handleSelectClass(classItem.classCode)}>View Details</button>
              </li>
            ))}
          </ul>
          <ul>
          </ul>
        </div>
      )}
    </div>
  );
}
export default TeacherDashboards;