class User < ApplicationRecord
  has_many :enrollments,
    class_name: 'Enrollment',
    # prerequisite: 'prereq_id',
    foreign_key: :student_id,
    primary_key: :id
  

  has_many :enrolled_courses,
    class_name: 'Course',
    # prerequisite: 'prereq_id',
    foreign_key: :course_id,
    primary_key: :id 
  
end
