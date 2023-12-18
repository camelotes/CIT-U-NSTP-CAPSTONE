package nstpcapstone1.sims.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nstpcapstone1.sims.Entity.StudentEntity;
import nstpcapstone1.sims.Repository.StudentRepository;

@Service

public class StudentService {
	
	@Autowired
	private StudentRepository studentRepository;
	public void createUser(StudentEntity studentEntity) {
        studentRepository.save(studentEntity);
    }
    public boolean existsByStudentID(String studentID) {
        return studentRepository.existsByStudentID(studentID);
    }
    public StudentEntity findByStudentID(String studentID) {
        if (studentRepository.findByStudentID(studentID) != null)
            return studentRepository.findByStudentID(studentID);
        else
            return null;
    }
}
