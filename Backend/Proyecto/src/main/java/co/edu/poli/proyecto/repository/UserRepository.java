package co.edu.poli.proyecto.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import co.edu.poli.proyecto.model.User;

public interface UserRepository extends MongoRepository<User, Integer> {

	//Spring Data Derived findBy Query Methods
	//Retrieve all records from the database based on the UserName
	//https://www.websparrow.org/spring/spring-data-derived-findby-query-methods-example
	User findByUserName(String userName);

}
