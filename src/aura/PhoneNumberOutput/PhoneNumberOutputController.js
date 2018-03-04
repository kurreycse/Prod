({
    show : function(component, event, helper) {
        console.log("in the show function now");
        var text = event.getParam("phone");
        //var phone = event.getParam("phone");
        console.log("event is " + event.getName());
        component.set("v.number", text);
        console.log("phone is now " +text);
    }
})