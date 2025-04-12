import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseCard from '../components/CourseCard';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your backend API URL if different
    axios.get('http://192.168.1.5:8085/api/Course')
      .then(response => {
        setCourses(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching courses", err);
        setError('Error fetching courses');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="row">
      {courses.map(course => (
        <div className="col-md-4" key={course.courseId}>
          <CourseCard course={course} />
        </div>
      ))}
    </div>
  );
};

export default Home;
