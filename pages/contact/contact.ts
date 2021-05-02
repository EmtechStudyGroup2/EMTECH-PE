import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-contact",
  templateUrl: "contact.html",
  styleUrls: ['contact.css']
})
export class ContactPage {
  height: number;
  weight: number;
  calorie: number;
  calorieMessage: string;
  gender: string;
  age: number;
  activityLevel: number;
  bmr: number;
  carbohydrates: number;
  proteins: number;
  fats: number;
  carboMessage: string;
  proteinsMessage: string;
  fatsMessage: string;

  

  calculateBMR() {
    if (this.gender == "m") {
      this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
    } else if (this.gender == "f") {
      this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
    } else {
      this.bmr = 0.01;
    }
    this.calorie = parseFloat((this.bmr * this.activityLevel).toFixed(2));
    this.carbohydrates = parseFloat((0.6 * this.calorie).toFixed(0));
    this.proteins = parseFloat((0.125 * this.calorie).toFixed(0));
    this.fats = parseFloat((0.275 * this.calorie).toFixed(0));
  }
  constructor(public navCtrl: NavController) {}
}
