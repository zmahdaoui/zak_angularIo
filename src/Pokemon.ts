export class Pokemon {
	nom : string;
	vitesse : number;
	pointVie : number;
	pointAtt : number;
	pointDef : number;
	constructor(nom: string, vitesse: number, pointVie: number, pointAtt: number, pointDef: number){
		this.nom=nom;
		this.vitesse=vitesse;
		this.pointVie=pointVie;
		this.pointAtt=pointAtt;
		this.pointDef=pointDef;
	}

	getNom(): string{
		return this.nom;
	}

	getVitesse(): number{
		return this.vitesse;
	}

	getPV(): number{
		return this.pointVie;
	}

	getPA(): number{
		return this.pointAtt;
	}
	getPD(): number{
		return this.pointDef;
	}

	attaqueEnPremier(adversaire : Pokemon) : boolean {
		return this.vitesse > adversaire.vitesse;
	}
}