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
          
            function AjustesCalidad(item){
                let itemCalidad = 0;
                if (items.name === 'Aged Brie') {
                  itemcalidad += 1;
                  if (item.sellIn < 0) {
                    itemcalidad += 1;
                    }
                } else if(items.name === 'Backstage passes to a TAFKAL80ETC concert')  {
                    if (this.items.sellIn < 11) {
                        itemcalidad = 2;
                    }
                    if (this.items.sellIn < 6) {
                        itemcalidad = 3;
                    }
                    if (item.sellIn < 0) {
                        itemcalidad -= item.quality;
                        }
                } else if(items.name === 'Conjured'){
                    itemcalidad -= 2;
                    if (item.sellIn < 0) {
                      itemcalidad -= 2;
                      }
                }else if(items.name === 'Sulfuras, Hand of Ragnaros'){
                    //no se realiza cambio
                    item.sellIn -= 1;
                    item.quality = 80;
                }
         
            }

        

       
    }
    return this.items;

    }

 
}



