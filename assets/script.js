const hero = document.querySelector('#hero');

function upper() {
    const string = hero.innerText;
    const mid = (string.length + 1) / 2
    const otp = [];

    string.split('').forEach(s => {
        const rand = Math.floor(Math.random() * (string.length + 2));
        if(rand < mid) {
            otp.push(s.toUpperCase());
        }else {
            otp.push(s);
        }
    });
    hero.innerText = otp.join(' ');
};

upper();
