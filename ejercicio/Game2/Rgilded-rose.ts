export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    
    items: Array<Item>;
    
    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let item of this.items) {
            ObtenerProductos(item); 
    }
    return this.items;

    }

 
}

function ObtenerProductos(item){
    const sulfurasFactory = new SulfurasFactory();
    const agedBrieFactory = new AgedBrieFactory();
    const backstagepassesFactory = new BackstagepassesFactory();
    const conjuredFactory = new ConjuredFactory();

    switch (item) {
        case item.equals("Aged Brie"):
            return agedBrieFactory;
            break;

            case item.equals("Backstage passes to a TAFKAL80ETC concert"):
            return backstagepassesFactory;
            break;
    
            case item.equals("Conjured"):
                return conjuredFactory;
                break;

            case item.equals("Sulfuras, Hand of Ragnaros"):
                return sulfurasFactory;
                break;
    }
}

class Generales {


    CalidadMinima(){
      return 0;
    }
  
    CalidadMaxima(){
      return 50;
    }
  
    definirCalidad(item: any){
        let calidad =0;
        if(item.quality < 0){
            calidad =    this.CalidadMinima();
        } else if(item.quality > 50){
            calidad =  this.CalidadMaxima();
        }
        return calidad;
    }
  
  }

class AgedBrieFactory implements Generales{
    itemcalidad += 1;
    if (this.sellIn < 0) {
      itemcalidad += 1;
      }
  definirCalidad(itemcalidad);
}

class BackstagepassesFactory implements Generales{
    if (this.sellIn < 11) {
        itemcalidad = 2;
    }
    if (this.sellIn < 6) {
        itemcalidad = 3;
    }
    if (this.sellIn < 0) {
        itemcalidad -= this.quality;
        }
        definirCalidad(itemcalidad);
}

class ConjuredFactory implements Generales{

    itemcalidad -= 2;
    if (this.sellIn < 0) {
      itemcalidad -= 2;
      }
      definirCalidad(itemcalidad);
}

class SulfurasFactory implements Generales{
    //no se realiza cambio
    this.sellIn -= 1;
    this.quality = 80;
}



