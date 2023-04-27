import { useState } from 'react';
import { nanoid } from 'nanoid';
import { assignments } from '../components/assignment'
import React from 'react';
import { GlobalStyle } from '@/lib/Wrap';
import ViewAllPapers from './viewallAssignment';

const AddAssignmentForm = (classCode) => {
  const [formAssignment, setFormAssignment] = useState(assignments);

  function handleInputChange1(event) {
    setFormAssignment({
      ...formAssignment,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit1(event) {
    event.preventDefault();
   
    const newAssignment = {
      id: nanoid(),
      classCode:classCode,
      ...formAssignment
    };
    assignments.push(newAssignment);
    setFormAssignment({
      classCode : '',
      subjectName: '',
      subjectCode : '',
      link: '',
      deadline:'',
      description:''
    });
    setShowForm(false);
  }

  return (
    <>
    <GlobalStyle/>
    <section className='quiz quiz-small'>
      <h1> Pastpaper </h1>
      <div className="button-container">
          <div className="form-container">
    <form onSubmit={handleSubmit1}>
      <div>
        <label htmlFor="classCode">Class Code:</label>
        <input
          type="text"
          id="classCode"
          value={formAssignment.classCode}
          onChange={handleInputChange1}
        />
      </div>
      <div>
        <label htmlFor="subjectName">Subject Name:</label>
        <input
          type="text"
          id="subjectName"
          value={formAssignment.subjectName}
          onChange={handleInputChange1}
        />
      </div>
      <div>
        <label htmlFor="subjectCode">Subject Code:</label>
        <input
          type="text"
          id="subjectCode"
          value={formAssignment.subjectCode}
          onChange={handleInputChange1}
        />
      </div>
      <div>
        <label htmlFor="link">Link:</label>
        <input
          type="text"
          id="link"
          value={formAssignment.link}
          onChange={handleInputChange1}
        />
      </div>
      <div>
        <label htmlFor="deadline">Deadline:</label>
        <input
          type="date"
          id="deadline"
          value={formAssignment.deadline}
          onChange={handleInputChange1}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={formAssignment.description}
          onChange={handleInputChange1}
        />
      </div>
      <button type="submit">Add Assignment</button>
    </form>
          </div>
      </div>
      </section>
    {/* <div className="container">
       <ViewAllPapers/>
    </div> */}
    </>
  );
};

export default AddAssignmentForm;