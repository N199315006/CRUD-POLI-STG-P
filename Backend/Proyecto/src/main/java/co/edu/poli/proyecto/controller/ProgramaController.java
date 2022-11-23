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

import co.edu.poli.proyecto.model.Programa;
import co.edu.poli.proyecto.repository.ProgramaRepository;
import io.swagger.annotations.Api;

@CrossOrigin(origins = "http://localhost:4200")
@Api(tags = {"Class: ProgramaController"}) //tag defined in SwaggerConfig.java
@RestController // Defines that this class is a spring bean
@RequestMapping("/api/v1/")
public class ProgramaController {
	
	@Autowired
	ProgramaRepository programaRepository;
	
	@GetMapping("/Programa")
	public List<Programa> getAllPrograma(){
		return programaRepository.findAll();
	}
	
	
	@GetMapping("/Programa/{codigo}")
	public Programa getProgramaByID(@PathVariable String codigo) {
		return programaRepository.findById(codigo).get();
	}
	
	@PostMapping("/Programa")
	public Programa savePrograma(@RequestBody Programa programa){
		return programaRepository.save(programa);
	}
	
	@PostMapping("/ProgramaList")
	public List<Programa> saveListPrograma(@RequestBody List<Programa> programa) {
		return programaRepository.saveAll(programa);
	}
	
	@DeleteMapping("/Programa/Borrar/{codigp}")
	public Programa deleteProgramaById(@PathVariable String codigo) {
		Programa _programa = programaRepository.findById(codigo).get();
		programaRepository.deleteById(codigo);
		return _programa;
	}
	@DeleteMapping("/ProgramaList")
	public void deleteAll() {
		programaRepository.deleteAll();
	}


}

