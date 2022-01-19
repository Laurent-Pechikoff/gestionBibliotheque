package fr.gestionBibliotheque.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import fr.gestionBibliotheque.demo.entity.Bibliotheque;


@CrossOrigin("http://localhost:4200/")
@RestController
public interface BibiothequeRepository extends JpaRepository<Bibliotheque, Long>{

	//@RestResource(path = "/byName")
			//public List<Bibliotheque> findByNomContains(@Param("name") String blabla);
		
			public List<Bibliotheque> findByNomContaining(String nom);
			
			@RestResource(path= "/byAdherent")
			public List<Bibliotheque> findByAdherentBetween(@Param("minAdh") int minAdh,@Param("maxAdh") int maxAdh);
	
}
