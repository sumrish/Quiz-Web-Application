interface EmailValidationOptions {
    allowedDomains?: string[];
    blockedDomains?: string[];
    requireOrganizationEmail?: boolean;
}

export class EmailCheck implements EmailValidationOptions {

    allowedDomains: string[];
    blockedDomains: string[];
    requireOrganizationEmail: boolean;

    constructor(allowedDomains: string[], blockedDomains: string[], requireOrganizationEmail: boolean) {

        this.allowedDomains = allowedDomains;
        this.blockedDomains = blockedDomains;
        this.requireOrganizationEmail = requireOrganizationEmail;

    }

    isValidEmail(email: string, options: EmailValidationOptions = {}): boolean {
        const { allowedDomains = [], blockedDomains = [], requireOrganizationEmail = false } = options;

        // Check for invalid characters
        const invalidChars = /[^\w+.-]/.test(email);
        if (invalidChars) {
            return false;
        }

        // Check for required organization email
        if (requireOrganizationEmail && !this.isOrganizationEmail(email, allowedDomains)) {
            return false;
        }

        // Check for blocked domains
        const emailDomain = this.getEmailDomain(email);
        if (blockedDomains.includes(emailDomain)) {
            return false;
        }

        // Check for allowed domains
        if (allowedDomains.length > 0 && !allowedDomains.includes(emailDomain)) {
            return false;
        }

        // Check for valid format
        const validFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!validFormat) {
            return false;
        }

        return true;
    }

    getEmailDomain(email: string): string {
        return email.split("@")[1];
    }

    isOrganizationEmail(email: string, organizationDomains: string[]): boolean {
        const emailDomain = this.getEmailDomain(email);
        return organizationDomains.includes(emailDomain);
    }

}
