import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidator{
    static passwordNotMatch(control:AbstractControl):ValidationErrors|null{
        if ((control.get('newPassword')?.value !== control.get('confirmPassword')?.value))
        return {passwordNotMatch:true};

        return null;
      }
}