import { Component, Inject } from '@angular/core';
import { Task } from '../task/task';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface TaskDialogData {
  task: Partial<Task>;
  enableDelete: boolean;
}

export interface TaskDialogResult {
  task: Task;
  delete?: boolean;
}

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css'],
})
export class TaskDialogComponent {
  private backupTask: Partial<Task> = { ...this.data.task };

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData
  ) {}

  cancel(): void {
    this.data.task.title = this.backupTask.title;
    this.data.task.description = this.backupTask.description;
    this.dialogRef.close(this.data);
  }
}

/**
 * In the TaskDialogComponent we inject a reference to the dialog, so we can close it, and we also inject the value of the provider associated with
 * the MAT_DIALOG_DATA token. This is the data object that we passed to the open method in the AppComponent above. We also declare the private
 * property backupTask, which is a copy of the task we passed together with the data object.
 *
 * When the user presses the cancel button, we restore the possibly changed properties of this.data.task and we close the dialog, passing this.data as the result.
 */
