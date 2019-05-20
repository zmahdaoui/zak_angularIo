import {Pokemon} from "./Pokemon"



export function attaqueEnPremier(adversaire : Pokemon , adversaire2 : Pokemon) {
	return adversaire.vitesse > adversaire2.vitesse ? adversaire : adversaire2; 
}

export function combat(adversaire : Pokemon , adversaire2 : Pokemon) {
	let att1 = attaqueEnPremier(adversaire,adversaire2);
	if(att1.getNom() == adversaire.getNom()){
		let tour = true ;

		let pname1 = att1.getNom();
		let pv1 = att1.getPV();
		let pa1 = att1.getPA();
		let pd1 = att1.getPD();
		console.log(pname1+" pv: "+pv1+" pa: "+pa1+" pd: "+pd1);

		let pname2 = adversaire2.getNom();
		let pv2 = adversaire2.getPV();
		let pa2 = adversaire2.getPA();
		let pd2 = adversaire2.getPD();
		console.log(pname2+" pv: "+pv2+" pa: "+pa2+" pd: "+pd2);
		
		while(pv1>0  && pv2>0){
			if(tour == true){
				let pa = pa1 - pd2 >=0 ? pa1 - pd2 : pa1-2;
				pv2=pv2 - pa;
				console.log(pname1+" inflige "+pa+" à "+pname2);
				if(pv2<=0){
					console.log(pname1+"a vaincu "+pname2);
				}
				tour = false;
			}else{
				let pa = pa2 - pd1 >=0 ? pa2 - pd1 : pa2-2 ;
				pv1=pv1 - pa;
				console.log(pname2+" inflige "+pa+" à "+pname1);
				if(pv1<=0){
					console.log(pname2+" a vaincu "+pname1);
				}
				tour = true;
			}
		}
	}else{
		let tour = true ;

		let pname1 = adversaire.getNom();
		let pv1 = adversaire.getPV();
		let pa1 = adversaire.getPA();
		let pd1 = adversaire.getPD();
		console.log(pname1+" pv: "+pv1+" pa: "+pa1+" pd: "+pd1);

		let pname2 = att1.getNom();
		let pv2 = att1.getPV();
		let pa2 = att1.getPA();
		let pd2 = att1.getPD();
		console.log(pname2+" pv: "+pv2+" pa: "+pa2+" pd: "+pd2);
		
		while(pv1>0  && pv2>0){
			if(tour == true){
				let pa = pa1 - pd2 >=0 ? pa1 - pd2 : pa1-2;
				pv2=pv2 - pa;
				console.log(pname1+" inflige "+pa+" à "+pname2);
				if(pv2<=0){
					console.log(pname1+"a vaincu "+pname2);
				}
				tour = false;
			}else{
				let pa = pa2 - pd1 >=0 ? pa2 - pd1 : pa2 -2;
				pv1=pv1 - pa;
				console.log(pname2+" inflige "+pa+" à "+pname1);
				if(pv1<=0){
					console.log(pname2+" a vaincu "+pname1);
				}
				tour = true;
			}
		}
	}
}