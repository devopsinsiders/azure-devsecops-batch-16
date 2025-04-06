# Create a table in your mysql Database

CREATE TABLE Courses (
    CourseId INT AUTO_INCREMENT PRIMARY KEY,
    CourseName VARCHAR(255) NOT NULL,
    InstructorName VARCHAR(255) NOT NULL,
    Lessons JSON NOT NULL
);
