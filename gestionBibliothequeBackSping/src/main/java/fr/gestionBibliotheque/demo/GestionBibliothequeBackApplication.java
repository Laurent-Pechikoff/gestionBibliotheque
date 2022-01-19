package fr.gestionBibliotheque.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import fr.gestionBibliotheque.demo.dao.BibiothequeRepository;
import fr.gestionBibliotheque.demo.dao.LivreRepository;
import fr.gestionBibliotheque.demo.entity.Bibliotheque;

@SpringBootApplication
public class GestionBibliothequeBackApplication implements CommandLineRunner{

	@Autowired
	private BibiothequeRepository brp;
	@Autowired
	private RepositoryRestConfiguration rrc;
	@Autowired
	private LivreRepository lrc;
	
	
	public static void main(String[] args) {
		SpringApplication.run(GestionBibliothequeBackApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		rrc.exposeIdsFor(Bibliotheque.class);
		System.out.println("Coucou bibliotheque!!!");


		//Creation bibliotheque		
		//		brp.save(new Bibliotheque(null, "Alcazar","bibliotheque de Marseille" , "https://d18dnr0ekxokj7.cloudfront.net/actualites-marseille/2020/05/bibliotheque-alcazar-belsunce-marseille.jpg"));
		//		brp.save(new Bibliotheque(null, "INHA","Institut National de l\'Histoire de l\'Art" , "https://www.inha.fr/_contents-images/ametys-internal%253Asites/inha/ametys-internal%253Acontents/la-bibliotheque-de-l-inha-article/_metadata/content/_data/INHA-Salle%2520Labrouste3_(c)EMILIE_GROLEAU_BD.jpg_1920x2880"));
		//		brp.save(new Bibliotheque(null, "BNF", "Bibliothèque Nationale de France Richelieux", "https://www.pixopolitan.com/pub/media/catalog/product/cache/5b287fc191c76a73657d6e03905e88eb/3/3/33783_sd.jpg"));

		//brp.save(new Bibliotheque(null,RandomString.make(5),RandomString.make(20),null,((int)(Math.random()*(100-1)) ), null));

		//exo creation  10 livres pour 4 bibliotheques
//		List<Bibliotheque> listB = new ArrayList<>();
//		List<Livre> listLivre = new ArrayList<>();
//		for (int i = 0; i < 4; i++) {
//			Bibliotheque b = new Bibliotheque(null,RandomString.make(5),RandomString.make(20),null,((int)(Math.random()*(100-1)) ), listLivre);
//
//			listB.add(b);
//			brp.save(b);
//		}
//		brp.findAll().forEach(b->{
//			System.out.println(b.getNom());
//			for (int i = 0; i < 10; i++) {
//				Livre l = new Livre(null, RandomString.make(5), b,((int)(Math.random()*(100-1)) ));
//				listLivre.add(l);
//				lrc.save(l);
//			}
//		});

//				for (Bibliotheque bibliotheque : listB) {
//					for (int i = 0; i < 10; i++) {
//						Livre l = new Livre(null, RandomString.make(5), bibliotheque,((int)(Math.random()*(100-1)) ));
//						listLivre.add(l);
//						lrc.save(l);
//					}
//					brp.save(bibliotheque);
//				}
	}

	//
	//lrc.save(new Livre(null,"Java pour les null",null));

}
