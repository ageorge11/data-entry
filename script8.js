function onEnterPressed(event) {
    if(event.key !== "Enter")
    {
        return;
    }    
   addRow();
   cleanEntry();
}

var nextId = 0;

function addRow() {
    var name = document.getElementById('name').value;
    // var snippet = "<tr><td>" + name + "</td></tr>";    
    var snippet = `
    <tr id="${nextId}">
       <td onClick="removeEntry(${nextId})">❌</td>
       <td>${name}</td>
    </tr>
    `;
    nextId += 1;
    document.getElementById('entries').innerHTML += snippet;
    }

function cleanEntry() {
    document.getElementById('name').value = ""
}

function removeEntry(id) {
    console.log(`remove entry ${id}`);
    document.getElementById(id).remove();
}

