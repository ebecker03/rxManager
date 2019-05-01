import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedlistService {
private meds: Object[] = []
private countId: number = 0;
  constructor() { }

  addMeds(med: Object){
    med['id'] = this.countId;
    med['completed'] = false;
    this.countId++;
    this.meds.push(med);
  }

  deleteMeds(id: number){
    let index = this.meds.findIndex(med => med['id'] === id)
    this.meds.splice(index, 1);
  }

}
