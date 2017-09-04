//Toolamat is made by Eugene Nicks 
//V0.1 

function main(){
	
		$(document).ready(function() {
        $.ajax({
            url : "Tables/test.txt",
            dataType: "text",
            success : function (data) {
                $(".output").html(data);
            }
        });
	}); 

}


