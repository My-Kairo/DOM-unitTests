describe("the calculate bill widget", function(){
    it("should calculate a string taken for sms and calls in the textbox ", function(){
        let calcItems = calculateBill()

        calcItems.bothItems("sms,sms,call,sms,call,call")

        assert.equal(8.25, calcItems.getTotalCall())
        assert.equal(2.25, calcItems.getTotalSms())
    })
    it("should calculate only sms string", function(){
        let calcItems = calculateBill()
        calcItems.bothItems("sms,sms,sms")
        assert.equal(2.25, calcItems.getTotalSms())
    })
    it("should calculate only call string", function(){
        let calcItems = calculateBill()
        calcItems.bothItems("call,call,call")
        assert.equal(8.25, calcItems.getTotalCall())
    })
    it("should not calculate if there is no string", function(){
        let calcItems = calculateBill()
        calcItems.bothItems("")
        assert.equal(0.00, calcItems.gettotalItems())
    })
    it("should display the warning when the total bill is over 10", function(){
        let calcItems = calculateBill()
        
        calcItems.bothItems("call,call,call,call,call,sms,sms,sms,call,call,call,call")
        assert.equal("warning", calcItems.warningLevel())
    })
    it("should display the danger when the total bill is over 20", function(){
        let calcItems = calculateBill()
        
        calcItems.bothItems("call,call,call,call,call,sms,sms,sms,call,call,call,call,sms,sms,call,call,call,call,call,call,call,call")
        assert.equal("danger", calcItems.criticalLevel())
    })
})