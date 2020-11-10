class UserList
{
    save = function(payeeObj){
        
        var temp = JSON.parse(localStorage.getItem("USERS"));
        var payeeList = temp ? temp : [];
        payeeList.push(payeeObj);       
        localStorage.setItem("USERS", JSON.stringify(payeeList ) );
    }
    
    list = function(){
        var temp = JSON.parse(localStorage.getItem("USERS"));
        var payeeList = temp ? temp : [];
        return payeeList;
    }

    list_user  = function(userId){
        var temp = JSON.parse(localStorage.getItem("USERS"));
        var payeeList = temp ? temp : [];
        var filteredList = payeeList.filter(obj=>obj.createdBy == userId);
        return filteredList;  
    }
}