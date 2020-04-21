function onEnterPressed(event) {
    if(event.key !== "Enter")
    {
        return;
    }    
   addRow();
   cleanEntry();
}

var nextId = 0;
var names = [];
function addRow() {
    var name = document.getElementById('name').value;
    names.push(name);
    refreshTable();
}
function cleanEntry() {
    document.getElementById('name').value = ""
}

function removeEntry(id) {
    console.log(`remove entry ${id}`);
    document.getElementById(id).remove();
}

function refreshTable() {
   var snippet = "";
    for (var i=0; i<names.length; i++ )
    {
        snippet = `
       <tr id="${nextId}">
            <td onClick="removeEntry(${nextId})">❌</td>
            <td>${names[i]}</td>
       </tr>
    `;
    nextId +=1;
    }
     
        document.getElementById('entries').innerHTML += snippet;   

}