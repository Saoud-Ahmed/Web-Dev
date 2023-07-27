(function(global){

    var ajaxutils={};

    function getrequestobj(){
        if(window.XMLHttpRequest){
            return(new XMLHttpRequest());
        }
        else if(window.ActiveXObject){
            return(new  ActiveXObject("Microsoft.XMLHTTP"));
        }
        else{
            global.alert("ajax not supported weirdo");
            return(null);
        }
    }

    ajaxutils.sendgetrequest=function(requesturl,responseHandler){
        var request=getrequestobj();
        request.onreadystatechange=function(){
            handleresponse(request,responseHandler);
        };
        request.open("GET",requesturl,true);
        request.send(null);
    };

    function handleresponse(request,responseHandler){
        if(request.readystate==4&&request.status==200){
            responseHandler(request);
        }
    }

    global.$ajaxutils=ajaxutils;

})(window);