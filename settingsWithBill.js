function billWithSettings() {
    var thecallcost = 0;
    var thesmscost = 0;
    var thewarning = 0;
    var thecritical = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallcost(callcost){
        thecallcost = callcost;
    }
    function getCallcost() {
        return thecallcost;
    }

    function setsmscost(smscost){
        thesmscost = smscost;
    }
    function getsmscost(){
        return thesmscost
    }

    function setwarning(warningcost){
        thewarning = warningcost;
    }
    function getWarning(){
        return thewarning
    }

    function setCritical(criticalcost){
        thecritical = criticalcost;
    }
    function getcritical(){
        return thecritical
    }

    function makecall(){
        callCostTotal += thecallcost
    }

    function sendSMS(){
        smsCostTotal += thesmscost
    }

    function getTheWarnings(){
        if(getTotalcost() >= getcritical()){
            return "red";
        }
        if(getTotalcost() >= getWarning()){
            return "yellow";
        }
    }

    function getTotalcost(){
        return callCostTotal + smsCostTotal;
    }
    function getTotalcallcost(){
        return callCostTotal;
    }
    function getTotalsmscost(){
        return smsCostTotal;
    }
    return {
        setCallcost,
        getCallcost,
        setsmscost,
        getsmscost,
        setwarning,
        getWarning,
        setCritical,
        getcritical,
        getTotalcost,
        getTotalcallcost,
        getTotalsmscost,
        makecall,
        sendSMS,
        getTheWarnings
    }
}