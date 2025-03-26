
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    
    if(carClass instanceof Car){       
        if(el.checked){
            
            
        } else {
            
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function SetCarToCompare(el, carClass) {
    if (carClass instanceof Car) {
        let position = GetCarArrPosition(carArr, carClass);
        if (el.checked) {
            if (position === -1 && carArr.length < 2) {
                carArr.push(carClass);
            } else if(carArr.length >= 2){
                el.checked = false;
                alert("Só é possível comparar 2 carros");
            }
        } else {
            if (position !== -1) {
                carArr.splice(position, 1);
            }
        }
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    let table = document.getElementById("compareTable");
    // let tableBody = table.getElementById("compare-table")[0];
    tableBody.innerHTML = "";

    for (let i = 0; i < carArr.length; i++) {
        let car = carArr[i];
        let row = tableBody.insertRow(i);
        let cell = row.insertCell(0);
        cell.innerHTML = car.nome;
        cell = row.insertCell(1);
        cell.innerHTML = car.preco;
        cell = row.insertCell(2);
        cell.innerHTML = car.alturaCacamba;
        cell = row.insertCell(3);
        cell.innerHTML = car.alturaVeiculo;
        cell = row.insertCell(4);
        cell.innerHTML = car.alturaSolo;
        cell = row.insertCell(5);
        cell.innerHTML = car.capacidadeCarga;
        cell = row.insertCell(6);
        cell.innerHTML = car.motor;
        cell = row.insertCell(7);
        cell.innerHTML = car.potencia;
        cell = row.insertCell(8);
        cell.innerHTML = car.volumeCacamba;
        cell = row.insertCell(9);
        cell.innerHTML = car.roda;
        cell = row.insertCell(10);
        cell.innerHTML = "<img src='" + car.image + "' />";
    }
}