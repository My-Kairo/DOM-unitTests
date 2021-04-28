describe("radio button bill widget", function(){
    it("should add/return call cost when call button is clicked", function(){
        let radioButton = radioBttnBill();

        radioButton.billtype("call")

        assert.equal(2.75, radioButton.getThecallTotal())
        // assert.equal(0.00, radioButton.getThesmsTotal())
    })
    it("should add sms cost when sms button is clicked", function(){
        let radioButton = radioBttnBill();

        radioButton.billtype("sms");

        assert.equal(0.75, radioButton.getThesmsTotal())
    })
    it("should add 2 sms at 0.75 and 3 calls at 2.75", function(){
        let radioButton = radioBttnBill();

        radioButton.billtype("sms")
        radioButton.billtype("sms")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")

        assert.equal(1.5, radioButton.getThesmsTotal());
        assert.equal(8.25, radioButton.getThecallTotal());
    })
    it("should display yellow total cost when the total bill is over 20", function(){
        let radioButton = radioBttnBill()
        
        radioButton.billtype("sms")
        radioButton.billtype("sms")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        assert.equal("yellow", radioButton.warningLevel())
    })
    it("should display the danger when the total bill is over 20", function(){
        let radioButton = radioBttnBill()
        
        radioButton.billtype("sms")
        radioButton.billtype("sms")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("call")
        radioButton.billtype("sms")
        radioButton.billtype("sms")
        radioButton.billtype("call")

        assert.equal("red", radioButton.criticalLevel())
    })
})