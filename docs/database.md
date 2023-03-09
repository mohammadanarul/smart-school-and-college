# Database Model and Relations

1. Institute
   1. Name
   2. domain
   3. phone_number
   4. address
   5. date of birth
   6. logo
   7. eiin
   8. banner_images
2. Institute code(Institute)
   1. scholl/College
   2. code
3. Institute Doner(Institute)
   1. name
   2. address
   3. image
   4. profession
4. User
   1. Full name | String
   2. phone_number | String
   3. father name
   4. mother name
   5. gender
   6. blood group
   7. religion
   8. maritial_status
   9. date of birth
   10. mobile_number
   11. email
   12. status
   13. present_address
   14. parmanent_address
   15. email
   16. type
       1. Teacher
       2. Student
       3. Guediand
       4. staff
       5. admin
5. Teacher(User)
   1. salary
   2. designation
   3. subjects
   4. type
      1. Permanent
      2. part-time
      3. others
   5. join_date
6. Student(User)
   1. unique_id
   2. classes[]
   3. group
   4. school_type
      1. ssc
      2. hsc
      3. psc
   5. join_date
   6. end_date
   7. certificate
   8. results[]

7. Education Qualification (Employee)
   1. user
   2. education_type
   3. group
   4. board
   5. gpa
   6. passing_year
   7. file

8. Attendance
   1. student
   2. create_teacher
   3. entry_date_time
   4. out_date_time
9. Assignment
   1. Sngle Assignment
      1. teacher
      2. class
      3. student
      4. subject
      5. assignment_pdf
      6. upload_file
      7. assignment_point
      8. end_date
   2. Group Assignment
      1. teacher
      2. class
      3. subject
      4. studens[]
      5. assignment_pdf
      6. upload_file
      7. assignment_point
      8. end_date

10. Admission
    1. full_name
    2. father_name
    3. mother_name
    4. Division
    5. District
    6. sub_district
    7. area
    8. class
    9. 