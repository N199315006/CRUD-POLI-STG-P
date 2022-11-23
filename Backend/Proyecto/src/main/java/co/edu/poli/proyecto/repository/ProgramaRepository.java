package co.edu.poli.proyecto.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import co.edu.poli.proyecto.model.Programa;

public interface ProgramaRepository extends MongoRepository<Programa, String>{

}