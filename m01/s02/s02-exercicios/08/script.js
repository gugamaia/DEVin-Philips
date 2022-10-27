let quanditade = 0;


for (let n = 2; n <= 1000; n++) {
    var primo = true;
    for(let i = 2; i < n; i++){
        if(n % i === 0) {
            primo = false;
        }
    }

    if (primo) {
        quanditade++;
        console.log(n);
    }
}

alert(`Existem ${quanditade} de primos entre 0 e 1.000`);
console.log(`Existem ${quanditade} de primos entre 0 e 1.000`);
