function followLink(pageUrl) 
{ 
    jQuery.ajax({ 
        url: pageUrl, 
        type: "GET", 
        dataType: 'html', 
        success: function(response){ 
            document.getElementsByTagName('html')[0].innerHTML = response
        } 
    }); 
}