import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  material = "";
  standard = "";
  group = "";
  size = "";
  washerPercentage = null;
  thicknessRange = "";
  weight = null;
  quantity = null;
  totalWasherWeight = null;
  totalRm = null;
  rmRate = null;
  totalRmValue = null;
  scrapRate = null;
  totalScrapValue = null;
  productionRate = null;
  productionValue = null;
  netPricePerHundered = null;
  euroRate = null;
  euroRatePerHundered = null;

  materials = ["","A2", "A3", "A4"];
  standards1 = ["","DIN", "NEF"];
  standards2 = ["","ABC", "DEF"];
  standards3 = ["","PQR", "XYZ"];
  groups1 = ["","125", "150"];
  groups2 = ["","200", "250"];
  sizes = ["","M3", "M4", "M5"];

  dataArray = [
    { material: "10", standard: "10", group: "10", size: "10", washerPercentage: 10, thicknessRange: "10", weight: 10, quantity: 10, totalWasherWeight: 10, totalRm : 10, rmRate: 10, totalRmValue: 10, scrapRate: 10, totalScrapValue: 10, productionRate: 10, productionValue: 10, netPricePerHundered: 10, euroRate: 10, euroRatePerHundered: 10 }
  ];

  selectedIndex = null;

  constructor() { }

  ngOnInit(): void {
    this.dataArray.splice(0, 1);
  }

  AddDetail() {
    if(this.group == "125")
      this.washerPercentage = 0.45;
    if(this.group == "125" && this.size == "M3"){
      this.thicknessRange = "0.7-0.9";
      this.weight = 0.17;
    }
    if(this.quantity && this.weight)
    this.totalWasherWeight = (this.quantity/1000)*this.weight;
    this.totalRm = this.totalWasherWeight / this.washerPercentage;
    this.totalRmValue = this.totalRm * this.rmRate;
    this.totalScrapValue = (this.totalRm - this.totalWasherWeight) * this.scrapRate;
    this.productionValue = this.productionRate * this.totalWasherWeight;
    this.netPricePerHundered = ((this.totalRmValue + this.productionValue - this.totalScrapValue) / this.quantity) * 100;
    this.euroRatePerHundered = this.netPricePerHundered / this.euroRate;

    let temp = { material: this.material, standard : this.standard, group : this.group, size : this.size, washerPercentage : this.washerPercentage, thicknessRange: this.thicknessRange, weight : this.weight, quantity: this.quantity, totalWasherWeight : this.totalWasherWeight, totalRm : this.totalRm, rmRate: this.rmRate, totalRmValue : this.totalRmValue, scrapRate: this.scrapRate, totalScrapValue : this.totalScrapValue, productionRate: this.productionRate, productionValue : this.productionValue, netPricePerHundered : this.netPricePerHundered, euroRate: this.euroRate, euroRatePerHundered: this.euroRatePerHundered };
    this.dataArray.push(temp);
    
    this.washerPercentage = null;
    this.thicknessRange = "";
    this.weight = null;
    this.totalWasherWeight = null;
    this.totalRm = null;
    this.totalRmValue = null;
    this.totalScrapValue = null;
    this.productionValue = null;
    this.netPricePerHundered = null;
    this.euroRatePerHundered = null;
  }

  DeleteDetail(i){
    this.dataArray.splice(i,1);
  }

  SelectDetail(i){
    this.selectedIndex = i;
    this.material = this.dataArray[this.selectedIndex].material;
    this.standard = this.dataArray[this.selectedIndex].standard;
    this.group = this.dataArray[this.selectedIndex].group;
    this.size = this.dataArray[this.selectedIndex].size;
    this.quantity = this.dataArray[this.selectedIndex].quantity;
    this.rmRate = this.dataArray[this.selectedIndex].rmRate;
    this.scrapRate = this.dataArray[this.selectedIndex].scrapRate;
    this.productionRate = this.dataArray[this.selectedIndex].productionRate;
    this.euroRate = this.dataArray[this.selectedIndex].euroRate;
  }

  EditDetail(){
    this.dataArray[this.selectedIndex].material = this.material;
    this.dataArray[this.selectedIndex].standard = this.standard;
    this.dataArray[this.selectedIndex].group = this.group;
    this.dataArray[this.selectedIndex].size = this.size;
    this.dataArray[this.selectedIndex].quantity = this.quantity;
    this.dataArray[this.selectedIndex].rmRate = this.rmRate;
    this.dataArray[this.selectedIndex].scrapRate = this.scrapRate;
    this.dataArray[this.selectedIndex].productionRate = this.productionRate;
    this.dataArray[this.selectedIndex].euroRate = this.euroRate;

    if(this.group == "125")
      this.washerPercentage = 0.45;
    if(this.group == "125" && this.size == "M3"){
      this.thicknessRange = "0.7-0.9";
      this.weight = 0.17;
    }
    if(this.quantity && this.weight)
    this.dataArray[this.selectedIndex].totalWasherWeight = (this.dataArray[this.selectedIndex].quantity/1000)*this.dataArray[this.selectedIndex].weight;
    this.dataArray[this.selectedIndex].totalRm = this.dataArray[this.selectedIndex].totalWasherWeight / this.dataArray[this.selectedIndex].washerPercentage;
    this.dataArray[this.selectedIndex].totalRmValue = this.dataArray[this.selectedIndex].totalRm * this.dataArray[this.selectedIndex].rmRate;
    this.dataArray[this.selectedIndex].totalScrapValue = (this.dataArray[this.selectedIndex].totalRm - this.dataArray[this.selectedIndex].totalWasherWeight) * this.dataArray[this.selectedIndex].scrapRate;
    this.dataArray[this.selectedIndex].productionValue = this.dataArray[this.selectedIndex].productionRate * this.dataArray[this.selectedIndex].totalWasherWeight;
    this.dataArray[this.selectedIndex].netPricePerHundered = ((this.dataArray[this.selectedIndex].totalRmValue + this.dataArray[this.selectedIndex].productionValue - this.dataArray[this.selectedIndex].totalScrapValue) / this.dataArray[this.selectedIndex].quantity) * 100;
    this.dataArray[this.selectedIndex].euroRatePerHundered = this.dataArray[this.selectedIndex].netPricePerHundered / this.dataArray[this.selectedIndex].euroRate;

    this.selectedIndex = null;
  }

  Cancel(){
    this.selectedIndex = null;
  }

  Reset(){
    this.material = "";
    this.standard = "";
    this.group = "";
    this.size = "";
    this.washerPercentage = null;
    this.thicknessRange = "";
    this.weight = null;
    this.quantity = null;
    this.totalWasherWeight = null;
    this.totalRm = null;
    this.rmRate = null;
    this.totalRmValue = null;
    this.scrapRate = null;
    this.totalScrapValue = null;
    this.productionRate = null;
    this.productionValue = null;
    this.netPricePerHundered = null;
    this.euroRate = null;
    this.euroRatePerHundered = null;
  }

}
