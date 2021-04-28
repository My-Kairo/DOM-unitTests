describe("BillwithSetting widget function", function() {
    it("should be able to set the call cost", function() {
        let settingsBill = billWithSettings();
        settingsBill.setCallcost(2.75)
        assert.equal(2.75, settingsBill.getCallcost());

    });
    it("should be able to set the sms cost", function() {
        let settingsBill = billWithSettings();
        settingsBill.setsmscost(0.85)
        assert.equal(0.85, settingsBill.getsmscost());
    });

    it("should be able to set the sms and call cost", function(){
        let settingsBill = billWithSettings();
        settingsBill.setCallcost(1.63)
        settingsBill.setsmscost(0.99)
        assert.equal(1.63, settingsBill.getCallcost());
        assert.equal(0.99, settingsBill.getsmscost());
    })
    it("should be able to set the warning level", function(){
        let warningLevel = billWithSettings();
        warningLevel.setwarning(10)
        assert.equal(10, warningLevel.getWarning());
    })
    it("should be able to set the critical level", function(){
        let criticalLevel = billWithSettings();
        criticalLevel.setCritical(10)
        assert.equal(10, criticalLevel.getcritical());
    })
});

describe('setting values', function(){
    it('should be able to use the call cost set', function(){
        let settingsBill = billWithSettings();

        settingsBill.setCallcost(1.50)
        settingsBill.setsmscost(0.33)

        settingsBill.makecall()
        settingsBill.makecall()
        settingsBill.makecall()

        assert.equal(4.5, settingsBill.getTotalcost())
        assert.equal(0.00, settingsBill.getTotalsmscost())
        assert.equal(4.50, settingsBill.getTotalcallcost())
    })

    it('should be able to send two calls at 0.99', function(){
        let settingsBill = billWithSettings();

        settingsBill.setCallcost(0.99)
        settingsBill.setsmscost(0.45)

        settingsBill.makecall()
        settingsBill.makecall()

        assert.equal(1.98, settingsBill.getTotalcost())
        assert.equal(0.00, settingsBill.getTotalsmscost())
        assert.equal(1.98, settingsBill.getTotalcallcost())
    })

    it('should be able to send 3 SMSs at 0.50', function(){
        let settingsBill = billWithSettings();

        settingsBill.setCallcost(1.20)
        settingsBill.setsmscost(0.50)

        settingsBill.sendSMS()
        settingsBill.sendSMS()
        settingsBill.sendSMS()

        assert.equal(1.5, settingsBill.getTotalcost())
        assert.equal(1.50, settingsBill.getTotalsmscost())
        assert.equal(0.00, settingsBill.getTotalcallcost())
    })

    it('should be able to send 1 sms at 0.75 and make two calls at 1.10', function(){
        let settingsBill = billWithSettings();

        settingsBill.setCallcost(1.10)
        settingsBill.setsmscost(0.75)

        settingsBill.makecall()
        settingsBill.makecall()
        settingsBill.sendSMS()

        assert.equal(2.95, settingsBill.getTotalcost())
        assert.equal(0.75, settingsBill.getTotalsmscost())
        assert.equal(2.20, settingsBill.getTotalcallcost())
    })
})

describe("crirical and warning level", function(){
    it("should return yellow total cost if the total cost reached the warning level", function(){
        let settingsBill = billWithSettings();

    settingsBill.setCallcost(1.50);
    settingsBill.setsmscost(0.35);
    settingsBill.setCritical(10);
    settingsBill.setwarning(5);

    settingsBill.makecall();
    settingsBill.makecall();
    settingsBill.makecall();
    settingsBill.makecall();
    // settingsBill.makecall();
    // settingsBill.makecall();

    // assert.equal(10, settingsBill.getTotalcost());
    assert.equal("yellow", settingsBill.getTheWarnings());
    });

    it("should return red total cost if the critical level has been reached", function(){
        let settingsBill = billWithSettings();

        settingsBill.setsmscost(2.50);
        settingsBill.setCallcost(0.50);
        // settingsBill.setCritical(20);
        settingsBill.setwarning(10);

        settingsBill.makecall();
        settingsBill.makecall();
        settingsBill.makecall();
        settingsBill.makecall();
        // settingsBill.makecall();
        // settingsBill.makecall();
        // settingsBill.makecall();
        // settingsBill.makecall();
        // settingsBill.makecall();
        // settingsBill.makecall();


        assert.equal("red", settingsBill.getTheWarnings());
        // assert.equal(20, settingsBill.getTotalcost());
    });

    it("should stop adding the total call cost if the critical level has been reached", function(){
        let settingsBill = billWithSettings();

        settingsBill.setsmscost(0.20)
        settingsBill.setCallcost(2.50)
        settingsBill.setwarning(10)
        // settingsBill.setCritical(9)

        settingsBill.makecall()
        settingsBill.makecall()
        settingsBill.makecall()
        settingsBill.makecall()
        // settingsBill.makecall()
        // settingsBill.makecall()


        assert.equal("red", settingsBill.getTheWarnings())
        // assert.equal(10, settingsBill.getTotalcost())
    })
    
})