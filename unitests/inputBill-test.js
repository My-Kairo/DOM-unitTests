describe("text input bill widget", function(){
    it("should add the call string from the texbox input when the add button is clicked", function(){
        let textInputBill = inputBillButtn();

        textInputBill.billTypesButtn("call")

        assert.equal(2.75, textInputBill.getCallTotal());
    })
    it("should add the sms string from the textbox input when the add button is clicked", function(){
        let textInputBill = inputBillButtn();

        textInputBill.billTypesButtn("sms");
        assert.equal(0.75, textInputBill.getSmsTotal())
    })
    it("should add both 2 sms at 0.75 and 1 call at 2.75", function(){
        let textInputBill = inputBillButtn();

        textInputBill.billTypesButtn("sms");
        textInputBill.billTypesButtn("sms");
        textInputBill.billTypesButtn("call");

        assert.equal(1.50, textInputBill.getSmsTotal());
        assert.equal(2.75, textInputBill.getCallTotal())
    })
    it("should display the warning when the total bill is over 10", function(){
        let textInputBill = inputBillButtn();

        textInputBill.billTypesButtn("sms");
        textInputBill.billTypesButtn("sms");
        textInputBill.billTypesButtn("call");
        textInputBill.billTypesButtn("call");
        textInputBill.billTypesButtn("call");
        textInputBill.billTypesButtn("call");
        textInputBill.billTypesButtn("call");
        textInputBill.billTypesButtn("call");

        assert.equal(18, textInputBill.smsCallTotal());
        assert.equal("warning", textInputBill.warningLevel())

        
    })
    it("should display the danger when the total bill is over 20", function(){
        let textInputBill = inputBillButtn();
        textInputBill.billTypesButtn("sms");
        textInputBill.billTypesButtn("sms");
        textInputBill.billTypesButtn("call");
        textInputBill.billTypesButtn("call");
        textInputBill.billTypesButtn("call");
        textInputBill.billTypesButtn("call");
        textInputBill.billTypesButtn("call");
        textInputBill.billTypesButtn("call");
        textInputBill.billTypesButtn("call");
        textInputBill.billTypesButtn("call");
        textInputBill.billTypesButtn("call");

        assert.equal("danger", textInputBill.criticalLevel());
        assert.equal(26.25, textInputBill.smsCallTotal())
    })
})