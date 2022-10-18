package co.edu.poli.proyecto.model;

public class Trabajo {
	
	
	private Long id_t;
	
	private String tesis;
	private String pasantia;
	private String titulo;
	
	
	
	
	
	public Trabajo(Long id_t, String tesis, String pasantia, String titulo) {
		super();
		this.id_t = id_t;
		this.tesis = tesis;
		this.pasantia = pasantia;
		this.titulo = titulo;
	}
	public Long getId_t() {
		return id_t;
	}
	public void setId_t(Long id_t) {
		this.id_t = id_t;
	}
	public String getTesis() {
		return tesis;
	}
	public void setTesis(String tesis) {
		this.tesis = tesis;
	}
	public String getPasantia() {
		return pasantia;
	}
	public void setPasantia(String pasantia) {
		this.pasantia = pasantia;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	
	
	
	
}
