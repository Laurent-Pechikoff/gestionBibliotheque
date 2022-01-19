package fr.gestionBibliotheque.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import fr.gestionBibliotheque.demo.entity.Livre;

@CrossOrigin("http://localhost:4200/")
@RestController
public interface LivreRepository extends JpaRepository<Livre, Long>{
//	public List<Livre> findByBibliotheque(Long id);
	
//	@RestResource(path="/byQuantite")
	public List<Livre> findByQuantiteBetween(int minQuantite,int maxQuantite);
	
	public List<Livre> findByBibliothequeId(Long id);
	
	
}
