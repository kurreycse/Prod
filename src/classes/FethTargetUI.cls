public class FethTargetUI {

    public void callTarget() {
        
        HttpRequest feedRequest = new HttpRequest();
        feedRequest.setEndpoint('callout:My_Named_Credentials/services/data/v32.0/sobjects/Account/0017F00000NUOcR');
        feedRequest.setMethod('GET');
        Http http = new Http();
        HTTPResponse feedResponse = http.send(feedRequest);
        System.debug(feedResponse.getBody());
    }
}