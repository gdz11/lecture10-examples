import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { UnsavedChangesCheck } from 'src/app/student/models/unsaved-changes-check';

export const unsavedChangesGuard: CanDeactivateFn<UnsavedChangesCheck> = (component, currentRoute, currentState, nextState) => {
  
  return new Observable(subscriber => {
    if(!component.hasUnsavedChanges())
      subscriber.next(true);
    else{
      let result = confirm("You have unsaved changes, are you sure you want to leave?");

      subscriber.next(result);
    }
  })
};
