import * as crypto from 'crypto';

export async function generateStrongPassword(length: number): Promise<string> {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=';
    const randomBytes = crypto.randomBytes(length);
    let password = '';
    for (let i = 0; i < length; i++) {
        const index = randomBytes[i] % chars.length;
        password += chars[index];
    }
    return password;
}

export async function generateResetCode(length: number): Promise<string> {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^*()-_+';
    const randomBytes = crypto.randomBytes(length);
    let password = '';
    for (let i = 0; i < length; i++) {
        const index = randomBytes[i] % chars.length;
        password += chars[index];
    }
    return password;
}