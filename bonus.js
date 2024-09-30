function calculateSavings(payments, livingCost) {
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "invalid input";
    }
    let totalIncome = 0;
    payments.forEach(payment => {
        if (payment >= 3000) {
            totalIncome += payment * 0.8; 
        } 
        else {
            totalIncome += payment; 
        }
    });

    let savings = totalIncome - livingCost;
    if (savings >= 0) {
        return savings;
    } 
    else {
        return "earn more";
    }
   
    }
    console.log(calculateSavings([1000, 2000, 3000], 5400)); 
    console.log(calculateSavings([1000, 2000, 2500], 5000)); 
    console.log(calculateSavings([900, 2700, 3400], 10000)); 
    console.log(calculateSavings([100, 1900, 2700], 3400)); 