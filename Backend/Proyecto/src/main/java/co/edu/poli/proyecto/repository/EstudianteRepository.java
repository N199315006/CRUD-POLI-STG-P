package co.edu.poli.proyecto.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import co.edu.poli.proyecto.model.Estudiante;

public interface EstudianteRepository extends MongoRepository<Estudiante, String>{

}
