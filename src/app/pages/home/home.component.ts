import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  monedas = [bitcoin, eth, bitcoin1, bitcoin2, bitcoin3, eth1, eth2, pvu]
  constructor() { }
  ngOnInit(): void {
  }

  format(numb: number) {
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(numb);
  }

}

export class Moneda {
  public Nombre!: string;
  public Precio!: number;
  public change24h!: number;
  public change7d!: number;
  public marketcap!: number;
  public Volumen!: number;
  public supply!: number;
  
  constructor(Nombre: string, Precio: number, change24h: number, change7d: number, marketcap: number, volumen: number, supply: number){
    this.Nombre = Nombre;
    this.Precio = Precio;
    this.change24h = change24h;
    this.change7d = change7d;
    this.marketcap = marketcap;
    this.Volumen = volumen;
    this.supply = supply;
  }
}



//ejemplos
let bitcoin = new Moneda("Bitcoin", 31725.88,3.61,8.08,603047949323,37322076873,19054387)
let eth = new Moneda("Ethereum", 1978.06,4.38,0.07,238645030856,18872574808,120993587)
let bitcoin1 = new Moneda("Bitcoin", 31725.88,3.61,8.08,603047949323,37322076873,19054387)
let eth1 = new Moneda("Ethereum", 1978.06,4.38,0.07,238645030856,18872574808,120993587)
let bitcoin2 = new Moneda("Bitcoin", 31725.88,3.61,8.08,603047949323,37322076873,19054387)
let eth2 = new Moneda("Ethereum", 1978.06,4.38,0.07,238645030856,18872574808,120993587)
let bitcoin3 = new Moneda("Bitcoin", 31725.88,3.61,8.08,603047949323,37322076873,19054387)
let pvu = new Moneda("PVU", 0.00054,-70,-97,56,38,120993587)



