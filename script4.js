// // console.log("hello world");

function onEnterPressed(event) {
    if(event.key !== "Enter")
    {
        return;
    }    
   addRow();
}

function addRow() {
    console.log ("You pressed Enter!!");

    var snippet = `
    <tr><td>John</td></tr>
    `;
    document.getElementById('entries').innerHTML += snippet;
    }

