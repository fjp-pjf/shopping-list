function showList(){
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status==200){
                var response = JSON.parse(this.responseText);
                var queue = response.list;
                var output = "";
            for (var i = 0; i < queue.length; i++){
                output += "<tr>";
                output += "<td>" + queue[i].Slno +"</td>";
                output += "<td>" + queue[i].Name +"</td>";
                output += "<td>" + queue[i].Quantity +"</td>";
                output += "<td>" + queue[i].Unit +"</td>";
                output += "<td>" + queue[i].Department +"</td>";
                output += "<td>" + queue[i].Notes +"</td>";
                output += "</tr>";
            }
            document.getElementById("data").innerHTML = output;
            }
        }
        xhttp.open("GET","list.json",true);
        xhttp.send();
}
