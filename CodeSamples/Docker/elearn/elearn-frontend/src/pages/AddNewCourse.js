import React, { useState } from 'react';
import axios from 'axios';

const AddNewCourse = () => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [lessons, setLessons] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert comma-separated lessons into a JSON array
    const lessonsArray = lessons.split(',').map(item => item.trim());
    
    const courseData = {
      courseName,
      instructorName,
      lessons: JSON.stringify(lessonsArray)
    };

    axios.post('http://localhost:8082/api/Course', courseData)
      .then(response => {
        setMessage('Course added successfully!');
        setCourseName('');
        setInstructorName('');
        setLessons('');
      })
      .catch(err => {
        console.error("Error adding course", err);
        setMessage('Error adding course');
      });
  };

  return (
    <div className="container">
      <h2>Add New Course</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Course Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={courseName} 
            onChange={(e) => setCourseName(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Instructor Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={instructorName} 
            onChange={(e) => setInstructorName(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Lessons (comma-separated)</label>
          <input 
            type="text" 
            className="form-control" 
            value={lessons} 
            onChange={(e) => setLessons(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Course</button>
      </form>
    </div>
  );
};

export default AddNewCourse;
