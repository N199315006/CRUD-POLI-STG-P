package co.edu.poli.proyecto.model;

import java.util.Date;

public class Sustentacion {
	
	
	
	private Long id_s;
	private Date fecha;
	
	
	
	
	public Sustentacion(Long id_s, Date fecha) {
		super();
		this.id_s = id_s;
		this.fecha = fecha;
	}
	public Long getId_s() {
		return id_s;
	}
	public void setId_s(Long id_s) {
		this.id_s = id_s;
	}
	public Date getFecha() {
		return fecha;
	}
	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	
	
	

	

}
