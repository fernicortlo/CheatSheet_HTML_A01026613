// q: ¿Qué es el DOM?
// r: El DOM es la representación de un documento HTML en forma de árbol de nodos.

// q: ¿Qué es un nodo?
// r: Un nodo es un elemento del árbol DOM, por ejemplo, un elemento HTML, un texto, un comentario, etc.

//q: ¿Cómo se accede a un elemento del DOM?
//r: Se accede a un elemento del DOM a través de su ID, por ejemplo, document.getElementById("id_del_elemento")

//q: ¿Cómo se modifica un elemento del DOM?
//r: Se modifica un elemento del DOM a través de su ID, por ejemplo, document.getElementById("id_del_elemento").innerHTML = "Nuevo texto"

//q: ¿Cuál es la diferencia entre getElementby* y querySelector*?
//r: getElementby* devuelve un elemento, querySelector* devuelve una lista de elementos

//q: ¿Qué es un evento?
//r: Un evento es una acción que se produce en un elemento del DOM, por ejemplo, un click, un cambio de valor, etc.

//q: ¿Qué es un listener?
//r: Un listener es una función que se ejecuta cuando se produce un evento en un elemento del DOM

//q: ¿Qué es un callback?
//r: Un callback es una función que se pasa como parámetro a otra función

//q: ¿Qué es un objeto de evento?
//r: Un objeto de evento es un objeto que se pasa como parámetro a una función callback

// 1.
// ; Chat GPT
    // Get the <span> element that will display the mouse position
    var mousePositionElement = document.getElementById("mousePosition");

    // Add an event listener to the document that will update the mouse position <span> element on mousemove
    document.addEventListener("mousemove", function(event) {
      var x = event.clientX;
      var y = event.clientY;
      mousePositionElement.innerHTML = x
    }); 

//; Copilot
//Modifica el siguiente elemento para mostrar la posición del mouse en el documento id="mousePositionCopilot"
// Get the <span> element that will display the mouse position
var mousePositionCopilot = document.getElementById("mousePositionC");
// Add an event listener to the document that will update the mouse position <span> element on mousemove
document.addEventListener("mousemove", function(event) {
    var x = event.clientX;
    var y = event.clientY;
   mousePositionCopilot.innerHTML = x
 });

// 2.
//; Chat GPT
    // Se obtiene el formulario y se agrega un controlador de eventos para el evento "submit"
    var form = document.getElementById("form1");
    form.addEventListener("submit", function(event) {
      // Se evita que el formulario se envíe y se recargue la página
      event.preventDefault();
      // Se obtienen los valores de las cajas de texto de nombre y apellido
      var nombre = document.getElementById("form-fname").value;
      var apellido = document.getElementById("form-lname").value;
      // Se concatena el nombre y el apellido para crear el nombre completo
      var nombreCompleto = nombre + " " + apellido;
      // Se crea un elemento <p> con el nombre completo y se agrega después del botón de envío del formulario
      var p = document.createElement("p");
      p.innerHTML = "Nombre completo: " + nombreCompleto;
      document.getElementById("form1-submit").insertAdjacentElement("afterend", p);
    });

//; Copilot
//Modifica el siguiente elemento para que al enviar el formulario se muestre el nombre completo en un elemento <p> id="nombreCompleto"
// Se obtiene el formulario y se agrega un controlador de eventos para el evento "submit"
var form = document.getElementById("form2");
form.addEventListener("submit", function(event) {
    // Se evita que el formulario se envíe y se recargue la página
    event.preventDefault();
    // Se obtienen los valores de las cajas de texto de nombre y apellido
    var nombre = document.getElementById("form2-fname").value;
    var apellido = document.getElementById("form2-lname").value;
    // Se concatena el nombre y el apellido para crear el nombre completo
    var nombreCompletoC = nombre + " " + apellido;
    // Se crea un elemento <p> con el nombre completo y se agrega después del botón de envío del formulario
    var p = document.createElement("p");
    p.innerHTML = "Nombre completo: " + nombreCompletoC;
    document.getElementById("form2-submit").insertAdjacentElement("afterend", p);
});

// 3.
//; Chatgpt
      var table = document.getElementById("sampleTable");
    
    // Se agrega un controlador de eventos para el botón de insertar fila
    var btnInsertRow = document.getElementById("btn-insert-r");
    btnInsertRow.addEventListener("click", function() {
      // Se crea una nueva fila
      var newRow = table.insertRow();
      // Se crean dos nuevas celdas en la fila
      var newCell1 = newRow.insertCell();
      var newCell2 = newRow.insertCell();
      // Se establece el contenido de las celdas
      newCell1.innerHTML = "New row column 1";
      newCell2.innerHTML = "New row column 2";
    });
    
    // Se agrega un controlador de eventos para el botón de insertar columna
    var btnInsertColumn = document.getElementById("btn-insert-c");
    btnInsertColumn.addEventListener("click", function() {
      // Se recorre cada fila de la tabla y se inserta una celda al final de cada fila
      for (var i = 0; i < table.rows.length; i++) {
        var newRowCell = table.rows[i].insertCell();
        newRowCell.innerHTML = "New column";
      }
    });


// 4.
//; Chatgpt
// Obtener los elementos HTML
var rowIndexElement = document.getElementById("rowIndex");
var colIndexElement = document.getElementById("colIndex");
var newValueElement = document.getElementById("newValue");
var tableElement = document.getElementById("myTable");
var changeButton = document.getElementById("btn-change");

// Agregar un event listener al botón de cambio
changeButton.addEventListener("click", function() {
    // Obtener los valores de entrada y convertirlos a números
    var rowIndex = parseInt(rowIndexElement.value);
    var colIndex = parseInt(colIndexElement.value);
    var newValue = newValueElement.value;

    // Validar los valores de entrada
    if (isNaN(rowIndex) || isNaN(colIndex) || rowIndex < 1 || colIndex < 1) {
        alert("Invalid input: row and column indices must be positive integers.");
        return;
    }

    // Obtener la fila y celda correspondientes en la tabla
    var row = tableElement.rows[rowIndex - 1];
    if (!row) {
        alert("Invalid input: row index out of range.");
        return;
    }
    var cell = row.cells[colIndex - 1];
    if (!cell) {
        alert("Invalid input: column index out of range.");
        return;
    }

    // Actualizar el valor de la celda
    cell.innerHTML = newValue;
});

//; Copilot
// Obtener los elementos HTML
var rowIndexElement = document.getElementById("rowIndex1");
var colIndexElement = document.getElementById("colIndex1");
var newValueElement = document.getElementById("newValue1");
var tableElement = document.getElementById("myTable1");
var changeButton = document.getElementById("btn-change1");

// Agregar un event listener al botón de cambio
changeButton.addEventListener("click", function() {
    // Obtener los valores de entrada y convertirlos a números
    var rowIndex1 = parseInt(rowIndexElement.value);
    var colIndex1 = parseInt(colIndexElement.value);
    var newValue1 = newValueElement.value;

    // Validar los valores de entrada
    if (isNaN(rowIndex) || isNaN(colIndex) || rowIndex < 1 || colIndex < 1) {
        alert("Invalid input: row and column indices must be positive integers.");
        return;
    }

    // Obtener la fila y celda correspondientes en la tabla
    var row = tableElement.rows[rowIndex - 1];
    if (!row) {
        alert("Invalid input: row index out of range.");
        return;
    }
    var cell = row.cells[colIndex - 1];
    if (!cell) {
        alert("Invalid input: column index out of range.");
        return;
    }

    // Actualizar el valor de la celda
    cell.innerHTML = newValue;
});


// 5. Agrega el código para quitar o agregar elementos a la lista de opciones. Los colores pueden ser aleatorios.
//; Chatgpt
var addColorBtn = document.getElementById("btn-add-color");
addColorBtn.addEventListener("click", function() {
  var select = document.getElementById("colorSelect");
  var newColor = "Blue"; // Cambiar por un color aleatorio
  var option = document.createElement("option");
  option.text = newColor;
  select.add(option);
});

var rmvColorBtn = document.getElementById("btn-rmv-color");
rmvColorBtn.addEventListener("click", function() {
  var select = document.getElementById("colorSelect");
  var index = select.selectedIndex;
  select.remove(index);
});

//; copilot
var addColorBtn = document.getElementById("btn-add-color1");
addColorBtn.addEventListener("click", function() {
    var select = document.getElementById("colorSelect1");
    var newColor = "Blue"; // Cambiar por un color aleatorio
    var option = document.createElement("option");
    option.text = newColor;
    select.add(option);
});

var rmvColorBtn = document.getElementById("btn-rmv-color1");
rmvColorBtn.addEventListener("click", function() {
    var select = document.getElementById("colorSelect1");
    var index = select.selectedIndex;
    select.remove(index);
});




// 6. Agrega el código para que al pasar el mouse sobre la imagen, se cambie por otra imagen de tamaño aleatorio.
//; Chatgpt
  // Get the image element
  var imagenGatoElement = document.getElementById("imagenGato");

  // Add an event listener to the image element that will replace the image source with a new image of random size on mouseover
  imagenGatoElement.addEventListener("mouseover", function() {
    // Generate random width and height between 300 and 600
    var randomWidth = Math.floor(Math.random() * (600 - 300 + 1) + 300);
    var randomHeight = Math.floor(Math.random() * (600 - 300 + 1) + 300);
    // Create a new image with random size
    var newImage = new Image();
    newImage.src = "http://placekitten.com/" + randomWidth + "/" + randomHeight;
    // Replace the image source with the new image
    imagenGatoElement.src = newImage.src;
  });

//; Copilot
// Get the image element
var imagenGatoElement1 = document.getElementById("imagenGato1");
// Add an event listener to the image element that will replace the image source with a new image of random size on mouseover
imagenGatoElement1.addEventListener("mouseover", function() {
    // Generate random width and height between 300 and 600
    var randomWidth = Math.floor(Math.random() * (600 - 300 + 1) + 300);
    var randomHeight = Math.floor(Math.random() * (600 - 300 + 1) + 300);
    // Create a new image with random size
    var newImage = new Image();
    newImage.src = "http://placekitten.com/" + randomWidth + "/" + randomHeight;
    // Replace the image source with the new image
    imagenGatoElement1.src = newImage.src;
});