({
    setphone : function(Component, event) {
        var text = Component.find("phone").get("v.value");
 
        var PhoneNumberEvent = Component.getEvent("phoneEvent");
        $A.get("e.c:PhoneNumberEvent").setParams({
            "phone": text
        }).fire();
 
        console.log("phone is " + text);
        console.log("phone event is " + PhoneNumberEvent);
 
    }
})