const romanNumeralMap: Map<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

export default function reverseRoman(romanNumber: string): number {
    if (romanNumber == null || romanNumber.trim() === "") {
        throw new Error("No Roman Characters Provided");
    }

    let res: number = 0;
    let prev: number = 0;
    let current: number;

    const array = romanNumber.split("").reverse();
    for (const char of array) {
        current = romanNumeralMap[char.toUpperCase()];
        if (current == null) throw new Error("Invalid Character");

        if (current >= prev) {
            res += current;
        } else {
            res -= current;
        }
        prev = current;
    }
    return res;
}
