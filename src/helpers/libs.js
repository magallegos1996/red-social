const helpers = {};

helpers.randomImageName = () => {
    const posibles = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomImageName = '';
    for (let i = 0; i<6; i++){
        randomImageName += posibles.charAt(Math.floor(Math.random() * posibles.length));
    }
    return randomImageName + '_' + Date.now();
};

module.exports = helpers;
