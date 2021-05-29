function clickColor(id_select) {
	document.getElementById(id_select).style.color = "#212529";
 	
};

function addMesssage(nameDIV)
{
    var html =  "<div id='Err' class='invalid-feedback'>Обязательное поле.</div>"
    var elem = document.getElementById(nameDIV);
	elem.insertAdjacentHTML("beforeend", html);	
    
}
 function delMessage(nameDIV)
 {
    var delEl = document.getElementById(nameDIV);
	delEl.removeChild(document.getElementById('Err'));
 }


function inputInfo()
{
    checkEmpty("FIO", "divFIO");
    checkEmpty("Position", "divPosition");
    checkEmpty("Organization", "divOrganization");
    checkEmpty("Adres", "divAdres");
    checkEmpty("Contact", "divContact");
    checkEmpty("Email", "divEmail");
    checkEmptySelect("Services", "divServices");
    checkEmptySelect("Region", "divRegion");
    checkEmptyCheckBox("gridCheck", "divGridCheck");

} 

function checkEmpty(id, divId)
{
    if (document.getElementById(id).value=='')
    {
        
        if (!document.getElementById(id).classList.contains("is-invalid")) 
        {
            document.getElementById(id).classList.add("is-invalid");
            addMesssage(divId);
            
        } 
       
    }else
    {
        if (document.getElementById(id).classList.contains("is-invalid")) 
        {
            document.getElementById(id).classList.remove("is-invalid")
            delMessage(divId);
        }
    }
}



function checkEmptySelect(id, divId)
{
    if (document.getElementById(id).options.selectedIndex == 0)
    {
        
        if (!document.getElementById(id).classList.contains("is-invalid")) 
        {
            document.getElementById(id).classList.add("is-invalid");
            addMesssage(divId);
            
        } 
       
    }else
    {
        if (document.getElementById(id).classList.contains("is-invalid")) 
        {
            document.getElementById(id).classList.remove("is-invalid")
            delMessage(divId);
        }
    }
}

function checkEmptyCheckBox(id, divId)
{
    if (document.getElementById(id).checked==false)
    {
        
        if (!document.getElementById(id).classList.contains("is-invalid")) 
        {
            document.getElementById(id).classList.add("is-invalid");
            addMesssage(divId);
            
        } 
       
    }else
    {
        if (document.getElementById(id).classList.contains("is-invalid")) 
        {
            document.getElementById(id).classList.remove("is-invalid")
            delMessage(divId);
        }
    }
}