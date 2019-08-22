import { Injectable } from '@angular/core';
import { Exercise } from './exercises.model'

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor() { }

  availableExervices: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8, state: null },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15, state: null },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18, state: null },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8, state: null }
  ];

  private exercises = this.availableExervices.slice();

  getExercises() {
    return [...this.exercises];
  }
    
  
}
