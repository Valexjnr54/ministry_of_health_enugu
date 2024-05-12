export async function uniqueSix(): Promise<number> {
    return Math.floor(Math.random() * 900000) + 100000;
}

export async function ShortCode(inputString: string): Promise<string> {
    // Check if the string has at least two characters
    if (inputString.length >= 2) {
      // Extract the first two characters and convert them to uppercase
      const firstTwoUpperCase = inputString.substring(0, 2).toUpperCase();
      return firstTwoUpperCase;
    } else {
      // If the string has less than two characters, return the original string
      return inputString.toUpperCase();
    }
}

export async function expiryDate(): Promise<string> {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() + 1);
  
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
  
    return `${day}-${month}-${year}`;
}

export async function renewal_expiryDate(): Promise<string> {
  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() + 1);

  const year = currentDate.getFullYear()+ 1;
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');

  return `${day}-${month}-${year}`;
}

export async function extractIdFromPrefixedString(input: string, prefixes: string[]): Promise<string | null> {
  for (const prefix of prefixes) {
      if (input.startsWith(prefix)) {
          return input.substring(prefix.length);
      }
  }
  return null; // or return an empty string if you prefer
}