import dns from 'dns';
import * as emailValidator from 'email-validator';

export async function validateEmail(email: string): Promise<boolean> {
    // Check if email has a valid format
    if (!emailValidator.validate(email)) {
        return false;
    }

    // Extract domain from email
    const domain = email.split('@')[1];

    // Check if domain exists
    try {
        await new Promise<void>((resolve, reject) => {
            dns.resolveMx(domain, (err, addresses) => {
                if (err || !addresses || addresses.length === 0) {
                    reject(err || new Error('No MX records found'));
                } else {
                    resolve();
                }
            });
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function main() {
    const email = '6564jimvalex54@chukwuebuka.com';
    const isValid = await validateEmail(email);
    console.log(`Email ${email} is ${isValid ? 'valid' : 'invalid'}`);
}

main()