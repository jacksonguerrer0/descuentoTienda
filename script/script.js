const pcPrice = 820000;
var  pcAmount, purchaseValue, discountValue, totalPay, discount;

pcAmount = 0;
purcharseValue = 0;
discountValue = 0;
totalPay = 0;
discount = 0;

//ocultando la orden de pago
document.getElementById("orderPay").style.display= "none";


function Calculate() {
    pcAmount = document.getElementById("numberPc").value;
    purcharseValue = pcAmount * pcPrice;
    document.getElementById("orderPay").style.display= "";
    document.getElementById("amount").style.display= "none";

    if(purcharseValue >= 1640000 && purcharseValue <= 3280000){
        //15%
        discountValue = (purcharseValue * 15)/(100);
        totalPay = purcharseValue - discountValue;
        document.getElementById("purcharseValue").value = purcharseValue;
        document.getElementById("discountValue").value = discountValue;
        document.getElementById("totalPay").value = totalPay;
        document.getElementById("discount").innerHTML = "Su descuento es del 15%";
    }
    else if (purcharseValue > 3280000 && purcharseValue <= 6560000){
        //25%
        discountValue = (purcharseValue * 25)/(100);
        totalPay = purcharseValue - discountValue;
        document.getElementById("purcharseValue").value = purcharseValue;
        document.getElementById("discountValue").value = discountValue;
        document.getElementById("totalPay").value = totalPay;
        document.getElementById("discount").innerHTML = "Su descuento es del 25%";
    }
    else if (purcharseValue > 6560000 && purcharseValue <= 9840000){
        //35%
        discountValue = (purcharseValue * 35)/(100);
        totalPay = purcharseValue - discountValue;
        document.getElementById("purcharseValue").value = purcharseValue;
        document.getElementById("discountValue").value = discountValue;
        document.getElementById("totalPay").value = totalPay;
        document.getElementById("discount").innerHTML = "Su descuento es del 35%";
    }
    else if (purcharseValue < 1640000 && purcharseValue > 9840000){
        //0%
        totalPay = purcharseValue;
        document.getElementById("purcharseValue").value = purcharseValue;
        document.getElementById("discountValue").value = discountValue;
        document.getElementById("totalPay").value = totalPay;
        document.getElementById("discount").innerHTML = "No hay descuento para esta compra";
    }
    else{
        //0%
        totalPay = purcharseValue;
        document.getElementById("purcharseValue").value = purcharseValue;
        document.getElementById("discountValue").value = discountValue;
        document.getElementById("totalPay").value = totalPay;
        document.getElementById("discount").innerHTML = "No hay descuento para esta compra";
    }
}