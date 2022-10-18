package co.edu.poli.proyecto.model;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "Estudiante")
public class Estudiante {
	
	
	
	
	//@Id
	private String id;
	
	private String name;
	private String apellido;
	private List<Programa> programa;
	private List<Sustentacion> sustentacion;
	private List<Trabajo> trabajo;
	
	
	
	
	
	public Estudiante(String id, String name, String apellido, List<Programa> programa, List<Sustentacion> sustentacion,
			List<Trabajo> trabajo) {
		super();
		this.id = id;
		this.name = name;
		this.apellido = apellido;
		this.programa = programa;
		this.sustentacion = sustentacion;
		this.trabajo = trabajo;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public List<Programa> getPrograma() {
		return programa;
	}
	public void setPrograma(List<Programa> programa) {
		this.programa = programa;
	}
	public List<Sustentacion> getSustentacion() {
		return sustentacion;
	}
	public void setSustentacion(List<Sustentacion> sustentacion) {
		this.sustentacion = sustentacion;
	}
	public List<Trabajo> getTrabajo() {
		return trabajo;
	}
	public void setTrabajo(List<Trabajo> trabajo) {
		this.trabajo = trabajo;
	}
	
	
	
	
	
	
	
	
}
