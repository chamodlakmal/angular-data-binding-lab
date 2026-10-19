import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // 1. Interpolation: values flow from this component into {{ expressions }}.
  readonly courseTitle = 'Angular 22 Data Binding';
  studentName = 'Nimal';
  completedLessons = 3;
  readonly totalLessons = 9;

  // 2. Property binding: Angular assigns these values to DOM properties.
  readonly logoUrl = 'favicon.ico';
  readonly logoDescription = 'Angular application icon';
  isSaveDisabled = false;

  // 3. Attribute binding: useful for ARIA, colspan, data attributes, and similar attributes.
  tableColumnCount = 2;
  readonly saveAriaLabel = 'Save the current student details';

  // 4. Style binding.
  headingColor = '#5b21b6';
  headingSize = 28;
  progressPercentage = 64;

  // 5. Class binding.
  isActiveStudent = true;
  hasValidationError = false;

  // 6. Event binding and $event.
  clickCount = 0;
  eventMessage = 'No event has been handled yet.';
  eventInputValue = '';

  // 7. Two-way binding with ngModel.
  formName = 'Nimal Perera';
  email = 'nimal@example.com';
  selectedCourse = 'Angular';
  acceptedTerms = false;

  increaseCount(): void {
    this.clickCount++;
    this.eventMessage = `The click event has run ${this.clickCount} time(s).`;
  }

  updateFromEvent(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.eventInputValue = input.value;
  }

  submitWithEnter(): void {
    this.eventMessage = `Enter pressed. Submitted: ${this.eventInputValue || 'empty value'}`;
  }

  readTemplateVariable(value: string): void {
    this.eventMessage = `Template variable contains: ${value || 'empty value'}`;
  }

  toggleDisabledState(): void {
    this.isSaveDisabled = !this.isSaveDisabled;
  }

  toggleStudentStatus(): void {
    this.isActiveStudent = !this.isActiveStudent;
  }

  toggleValidationError(): void {
    this.hasValidationError = !this.hasValidationError;
  }

  resetLab(): void {
    this.studentName = 'Nimal';
    this.isSaveDisabled = false;
    this.headingColor = '#5b21b6';
    this.headingSize = 28;
    this.progressPercentage = 64;
    this.isActiveStudent = true;
    this.hasValidationError = false;
    this.clickCount = 0;
    this.eventMessage = 'No event has been handled yet.';
    this.eventInputValue = '';
    this.formName = 'Nimal Perera';
    this.email = 'nimal@example.com';
    this.selectedCourse = 'Angular';
    this.acceptedTerms = false;
  }
}
