import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TrainingService } from '../training.service'

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  
  @Output() trainingStart = new EventEmitter<void>();
  
  exercises = [];

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exercises = this.trainingService.getExercises();
  }

  onStartTraining() {
    this.trainingStart.emit();
  }
}
