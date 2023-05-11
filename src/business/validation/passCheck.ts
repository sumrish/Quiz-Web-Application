export default class PasswordCheck {
  private password: string;

  constructor(password: string) {
    this.password = password;
  }

  public checkCases(): { passCases: boolean; errorMessage: string } {
    // Check length
    let passCases = true;
    let errorMessage = '';
    if (this.password.length < 8) {
      errorMessage += 'The password must contain at least 8 characters.\n';
      passCases = false;
    }

    // Check Only Letters value
    if (/^[a-zA-Z]+$/.test(this.password) == true) {
      errorMessage += 'The password cannot contain only letters.\n';
      passCases = false;
    }

    // Check Only number value
    if (/^\d+$/.test(this.password) == true) {
      errorMessage += 'The password cannot contain only numbers.\n';
      passCases = false;
    }

    // Check numeric value
    if (/\d/.test(this.password) !== true) {
      errorMessage += 'The password must contain at least 1 numeric value.\n';
      passCases = false;
    }
      
      // Check special characters
      if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(this.password) !== true) {
        errorMessage += 'The password must contain at least 1 special character.\n';
        passCases = false;
      }
  
      return { passCases, errorMessage };
    }
  }