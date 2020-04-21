function onEnterPressed(event) {
    if(event.key !== "Enter")
    {
        return;
    }    
   addRow();
   cleanEntry();
}

function addRow() {
    var name = document.getElementById('name').value;
    // var snippet = "<tr><td>" + name + "</td></tr>";    
    var snippet = `
    <tr>
       <td>❌</td>
       <td>${name}</td>
    </tr>
    `;
    document.getElementById('entries').innerHTML += snippet;
    }

function cleanEntry() {
    document.getElementById('name').value = ""
}

