class Enrollment < ApplicationRecord
  belongs_to :user,
    class_name: 'User',
    # prerequisite: 'prereq_id',
    foreign_key: :student_id,
    primary_key: :id
  

  belongs_to :course,
    class_name: 'Course',
    # prerequisite: 'prereq_id',
    foreign_key: :course_id,
    primary_key: :id 
  
end
