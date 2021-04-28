function inputBillButtn(){
    var costForCalls = 0;
    var costForSms = 0;

    function billTypesButtn(thestring){
        var itemBillType = thestring.trim();
        if(itemBillType === "call"){
            costForCalls += 2.75;
        }else if(itemBillType === "sms"){
            costForSms += 0.75;
        }
    }
    function getCallTotal(){
        return costForCalls;
    }
    function getSmsTotal(){
        return costForSms;
    }
    function smsCallTotal(){
        return costForSms + costForCalls;
    }
    function criticalLevel(){
        if(smsCallTotal() >= 20){
            return "danger"
        }
        
    }

    function warningLevel(){
        if(smsCallTotal() >= 10){
            return "warning"
        }
    }
    return{
        inputBillButtn,
        billTypesButtn,
        getCallTotal,
        getSmsTotal,
        smsCallTotal,
        criticalLevel,
        warningLevel
    }
}