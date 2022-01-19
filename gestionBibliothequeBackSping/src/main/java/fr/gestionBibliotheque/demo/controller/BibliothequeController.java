package fr.gestionBibliotheque.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fr.gestionBibliotheque.demo.dao.BibiothequeRepository;
import fr.gestionBibliotheque.demo.entity.Bibliotheque;
import net.bytebuddy.utility.RandomString;

@RestController
@CrossOrigin("http://localhost:4200/")

public class BibliothequeController {
	@Autowired
	private BibiothequeRepository brp;
	//	@Autowired
	//	private RepositoryRestConfiguration rrc;
	//	

	@GetMapping("/getbibliotheques")
	public List<Bibliotheque> getBibliotheques(){
		System.out.println("je suis passé par get");
		System.out.println(brp.findAll());
		return brp.findAll();

	}
	//a tester avec @GetMapping("/afficheBiblio/{id}")
	//@GetMapping("/bibliotheques/{id}")
	@GetMapping("/afficheBiblio/{id}")
	public Bibliotheque getBibliotheque(@PathVariable("id") Long id) {

		return brp.findById(id).orElse(null);

	}

	@PostMapping("/savebibliotheques")
	public boolean addBibliotheque(@RequestBody Bibliotheque bibliotheque) {
		boolean response = false;
		brp.save(bibliotheque);
		if (brp.existsById(bibliotheque.getId())) {
			response = true;
			
		}
		return response;
	}
	@DeleteMapping("/delBibliotheques/{id}")
	public boolean deleteBibliotheque(@PathVariable Long id) {
		boolean response = false;
		brp.deleteById(id);
		if(!brp.existsById(id)) {
			response = true;
		}
			
		return response;
	}

	//@RequestMapping(value = "/bibliotheques/{id}", method = RequestMethod.PUT)
	@PutMapping("/putBibliotheques/{id}")
	public void putBibliotheque(@PathVariable Long id,
			@RequestBody Bibliotheque bibliothequeInfos){		
		bibliothequeInfos.setId(id);
		brp.save(bibliothequeInfos);

	}
	//edit nom v1
	@PatchMapping("/editNom/{id}/{nom}")
	public void editNomBibliotheque(@PathVariable("id") Long id,
			@PathVariable String nom) {
		Bibliotheque bibi = brp.findById(id).orElse(null);
		bibi.setNom(nom);
		brp.save(bibi);
	}

	//edit nom v2
	@PatchMapping("/editNom/{id}")
	public void editNom2Bibliotheque(@PathVariable("id") Long id,
			@RequestBody Bibliotheque bibiEdit) {
		Bibliotheque bibi = brp.findById(id).orElse(null);
		bibi.setNom(bibiEdit.getNom());
		brp.save(bibi);
	}

	//ajout bibliotheque aleatoire
	@PostMapping("/biblioAleatoire/{nbr}")
	public boolean ajoutAleatoire(@PathVariable int nbr) {
		int nbrBiblio = nbr;
		int max = 100;
		int min = 0;
		for (int i = 0; i < nbrBiblio; i++) {
			brp.save(new Bibliotheque(null,RandomString.make(5),RandomString.make(20),null,((int)(Math.random()*((max-min)+1)) ), null));
		}
		
		return true;
		
	}
//	//recherche bibliotheque par nom ou description
	@GetMapping("/rechercheBiblio/{recherche}")
	public List<Bibliotheque> rechercheBiblio(@PathVariable String recherche){
	
		return brp.findByNomContaining(recherche);
		
	}
	
	
}

