package fr.gestionBibliotheque.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import fr.gestionBibliotheque.demo.dao.LivreRepository;
import fr.gestionBibliotheque.demo.entity.Livre;

@RestController
@CrossOrigin("http://localhost:4200/")
public class LivreController {
	@Autowired
	private LivreRepository lR;
	
//	@GetMapping("/afficheLivres/{id}")
//	public List<Livre> getLivres(@PathVariable("id") Long id){
//		System.out.println("************* coucou livreController!!! ************");
//		return lR.findByBibliotheque(id);
//		
//	}
	@GetMapping("/cherchesLivresEntre/{min},{max}")
	public List<Livre> getLivreParQte(@PathVariable int min,@PathVariable int max){
		System.out.println(min);
		System.out.println(max);
		return lR.findByQuantiteBetween(min, max);
		
	}
	
	
	@GetMapping("/allLivres")
	public List<Livre> getAllLivre(){
		return lR.findAll();
	}
	
	@GetMapping("/livresParBibliotheque/{id}")
	public List<Livre> getLivreByBiblioId(@PathVariable("id") Long id){
		return lR.findByBibliothequeId(id);
		
	}
	
	
}
