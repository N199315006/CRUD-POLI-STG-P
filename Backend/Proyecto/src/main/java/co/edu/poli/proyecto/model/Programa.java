package co.edu.poli.proyecto.model;

public class Programa {
	
	
	private Long codigo;
	
	private String escuela;
	private String tPrograma;
	
	
	
	
	public Programa(Long codigo, String escuela, String tPrograma) {
		super();
		this.codigo = codigo;
		this.escuela = escuela;
		this.tPrograma = tPrograma;
	}
	public Long getCodigo() {
		return codigo;
	}
	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}
	public String getEscuela() {
		return escuela;
	}
	public void setEscuela(String escuela) {
		this.escuela = escuela;
	}
	public String gettPrograma() {
		return tPrograma;
	}
	public void settPrograma(String tPrograma) {
		this.tPrograma = tPrograma;
	}
	
	
	
	
	
	

}
