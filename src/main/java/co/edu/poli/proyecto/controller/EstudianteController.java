package co.edu.poli.proyecto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.edu.poli.proyecto.model.Estudiante;
import co.edu.poli.proyecto.repository.EstudianteRepository;
import io.swagger.annotations.Api;


@CrossOrigin(origins = "http://127.0.0.1:4200")
@Api(tags = {"Class: EstudianteController"}) //tag defined in SwaggerConfig.java
@RestController // Defines that this class is a spring bean
@RequestMapping("/api/v1/")
public class EstudianteController {
	
	
	@Autowired
	EstudianteRepository estudianteRepository;
	
	@GetMapping("/Estudiante")
	public List<Estudiante> getAllEstudiante(){
		return estudianteRepository.findAll();
	}
	
	
	@GetMapping("/Estudiante/{id}")
	public Estudiante getEstudianteByID(@PathVariable String id) {
		return estudianteRepository.findById(id).get();
	}
	
	@PostMapping("/Estudiante")
	public Estudiante saveEstudiante(@RequestBody Estudiante estudiante){
		return estudianteRepository.save(estudiante);
	}
	
	@PostMapping("/EstudianteList")
	public List<Estudiante> saveListEstudiante(@RequestBody List<Estudiante> estudiante) {
		return estudianteRepository.saveAll(estudiante);
	}
	
	@DeleteMapping("/Estudiante/Borrar/{id}")
	public Estudiante deleteEstudianteById(@PathVariable String id) {
		Estudiante _estudiante = estudianteRepository.findById(id).get();
		estudianteRepository.deleteById(id);
		return _estudiante;
	}
	@DeleteMapping("/EstudianteList")
	public void deleteAll() {
		estudianteRepository.deleteAll();
	}

}
