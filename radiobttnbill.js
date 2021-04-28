function radioBttnBill(){
    var theCallCost = 0;
    var theSmsCost = 0;

    // var billItemType = checkedRadioBtn;

    function billtype(billstring){
    var billItemType = billstring.trim();
        if (billItemType === "call"){
            theCallCost += 2.75;
        }
        else if (billItemType === "sms"){
            theSmsCost += 0.75;
        }
    }
    function getThecallTotal(){
        
        return theCallCost;
    }
    function getThesmsTotal(){
        return theSmsCost;
    }
    function billsTotal(){
        return theCallCost + theSmsCost;
    }
    function criticalLevel(){
    if(billsTotal() >= 30){
        return "red"
    }
    
}

function warningLevel(){
    if(billsTotal() >= 20){
        return "yellow"
    }
}
    return {
        getThecallTotal,
        getThesmsTotal,
        billtype,
        billsTotal,
        criticalLevel,
        warningLevel
    }
}