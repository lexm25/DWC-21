class Rectangulo{ 
    constructor (p1,p2){
        this.p1 = p1;
        this.p2 = p2;
    };
    base(){
        return this.p2.x-this.p1.x;
    }
    altura(){
        return this.p2.y-this.p1.y;
    }
    perimetro(){
        return (2*(this.base())) + (2*(this.altura())); 
    }
    area(){
        return (this.base())*(this.altura());
    };
};