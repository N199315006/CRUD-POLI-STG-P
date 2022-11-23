package co.edu.poli.proyecto.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import co.edu.poli.proyecto.model.Mail;
import co.edu.poli.proyecto.service.MailService;


@CrossOrigin(origins = "http://127.0.0.1:4200")
@RestController
public class MailController {
	
	
	@Autowired
	private MailService notificationService;
	
	/* JSON email...
	{
	    "mailTo": "wsoto@poligran.edu.co",
	    "mailSubject": "hola mundo",
	    "mailContent": "bienvenidos",
	    "attachments" : ["/Users/wilsonsoto/Downloads/TransaccionPNCBANK.pdf"]
	}
	*/
	@RequestMapping(value = "/api/v1/msg", method=RequestMethod.GET)
	public String sendEmail(@RequestBody Mail mail){
		notificationService.sendEmail(mail);
		return "Email sent successfully";
	}
	
	

}
