function Tabla(){
	this.p1="P1";
	this.p2="P2";
	this.turno=true;
	this.jugar = function(a){
		this.mat[a]=this.turno;
		ret = this.termino();
		if(ret)console.log("Gano "+(this.turno?this.p1:this.p2));
		this.turno = !this.turno;
		return ret;
	}
	this.mat=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
	this.p_ganadoras = [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
	this.termino = function(){
		for (var i = 0 ; i < 8; i++) {
			if(this.mat[this.p_ganadoras[i][0]]==this.turno && this.mat[this.p_ganadoras[i][1]]==this.turno && this.mat[this.p_ganadoras[i][2]]==this.turno){
				return true;
			}
		}
		return false;
	}
}
function juegoNuevo(p1,p2){
	this.T = new Tabla();
	this.T.p1=p1;
	this.T.p2=p2;
}