// Function //

const getDifferentrandomNumbers = (min, max, tot) => {
    const numbers = []
    while (numbers.length < tot) {
        const randomaNumber = Math.floor(math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNumber)) numbers.push(randomNumber);
    }
    return numbers;
};