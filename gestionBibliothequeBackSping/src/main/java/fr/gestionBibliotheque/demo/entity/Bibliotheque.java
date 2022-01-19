package fr.gestionBibliotheque.demo.entity;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Bibliotheque {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nom;
	@Column(length=1000)
	private String description;
	@Column(length=1000)
	private String photo;
	
	private int adherent;
	
	
	//essai relation avec Entity Livre
	@OneToMany(mappedBy = "bibliotheque")
	 @JsonManagedReference
	private Collection<Livre> livres;
}
