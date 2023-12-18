//Elementos campo de entrada
let bales = document.getElementById('bales');
let packs = document.getElementById('packs');
let units = document.getElementById('units');
let price = document.getElementById('price');
let porcent = document.getElementById('porcent');

//Botón para calcular
let calc = document.getElementById('calc');

//Campos de valores de precio
let priceEndUnit = document.getElementById('priceForUnit');
let priceEndPack = document.getElementById('priceForPack');
let priceEndBale = document.getElementById('priceForBale');

//Valores iniciales de los campos de entrada
let balesVal = 1;
let packsVal = 1;
let unitsVal = 1;
let priceVal = 0;
let porcentVal = 30;

//Valores iniciales de los precios
let priceBales = 0;
let pricePacks = 0;
let priceUnits = 0;

//Obtener los valores de cada campo de entrada:
bales.addEventListener('input', (e) => {
    balesVal = Number(e.target.value);
})

packs.addEventListener('input', (e) => {
    packsVal = Number(e.target.value);
})
units.addEventListener('input', (e) => {
    unitsVal = Number(e.target.value);
})
price.addEventListener('input', (e) => {
    priceVal = Number(e.target.value);
})
porcent.addEventListener('input', (e) => {
    porcentVal = Number(e.target.value);
})

//Calcular los valores:
calc.addEventListener('click', (e) => {
    //Calculado los precios finales
    priceBales = Math.round((priceVal * porcentVal + priceVal * 100) / (balesVal * 100)) ;
    pricePacks = Math.round((priceVal * porcentVal + priceVal * 100) / (balesVal * packsVal * 100));
    priceUnits = Math.round((priceVal * porcentVal + priceVal * 100) / (balesVal * packsVal * unitsVal * 100));

    //Añadiendo los precios finales
    priceEndUnit.textContent = priceUnits;
    priceEndPack.textContent = pricePacks;
    priceEndBale.textContent = priceBales;
})