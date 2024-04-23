let events = [];

function add() {
  let cont = events.length + 1;
  let addEvents = true;

  while (addEvents) {
    let nameEvent = prompt("Ingrese el nombre del evento").toLowerCase();
    let dateEvent = prompt("Ingrese la fecha del evento en formato D-M-Y");
    let descriptionEvent = prompt("Ingrese la descripción del evento");

    const event = {
      id: cont,
      name: nameEvent,
      date: dateEvent,
      description: descriptionEvent,
    };

    events.push(event);

    addEvents = ask();
    cont++;
  }

  return events;
}

function ask() {
  const option = prompt("¿Deseas agregar otro evento? (si/no)").toLowerCase();
  return option === "si";
}

function viewEvents() {
  alert(JSON.stringify(events));
}

function searchEventByName(name) {
  const filterednamesEvents = events.filter((event) =>
    event.name.includes(name.toLowerCase())
  );
  return filterednamesEvents;
}

function search() {
  let i = true;
  while (i) {
    const searchName = prompt("Ingrese el nombre del evento a buscar");
    const found = searchEventByName(searchName);
    if (found.length > 0) {
      alert(`Eventos encontrados:${JSON.stringify(found)}`);
    } else {
      alert("No se encontraron eventos con ese nombre, verifica si esta bien escrito maquinola.");
      const choose = confirm("¿Quieres ver los eventos?");
      if (choose) {
        viewEvents();
      } else {
       i = choose
      }
    }

    const option = prompt("¿Deseas buscar otro evento? (si/no)").toLowerCase();
    if (option == "si") {
      i = true;
    } else if (option == "no") {
      i = false;
    }
  }
}

function del() {
    const nameDel = prompt("Ingrese el nombre del evento que desea borrar");
    const index = events.findIndex((event) => event.name === nameDel);
    if (index !== -1) {
        const confirmDelete = confirm(`¿Seguro que quieres borrar el evento "${nameDel}"?`);
        if (confirmDelete) {
            events.splice(index, 1);
            alert("Evento borrado correctamente.");
        } else {
            alert("Borrado cancelado.");
        }
    } else {
        alert("No se encontró el evento con ese nombre.");
    }
}

function update(){
    const nameUpdate = prompt("Ingrese el nombre del evento que desea actualizar");
    const index = events.findIndex((event) => event.name === nameUpdate);
    if (index!== -1) {
        const nameUpdate = prompt("Ingrese el nuevo nombre del evento");
        const dateUpdate = prompt("Ingrese la nueva fecha del evento en formato D-M-Y");
        const descriptionUpdate = prompt("Ingrese la nueva descripción del evento");
        events[index].name = nameUpdate;
        events[index].date = dateUpdate;
        events[index].description = descriptionUpdate;
        alert("el evento ha sido actualizado");
        alert(JSON.stringify(events))
    } else {
        alert("No se encontró el evento con ese nombre bro, verfica si lo estas escribiendo bien");
    }
}



let init = true;

while (init) {
  alert("Bienvenido");
  alert("Estas son las funciones de la aplicacion 0: agregar, 1: ver eventos, 2: buscar, 3: actualizar, 4: borrar");
  const option = prompt("¿Qué deseas hacer?");

  switch (option) {
    case "0":
      events = add();
      break;
    case "1":
      viewEvents();
      break;
    case "2":
      search();
      break;
    case "3":
        update();
        break;
    case "4":
        del()
        break
    default:
      alert("Opción no válida");
  }

  let moveOn = confirm("¿Quieres realizar otra acción?");
  init = moveOn
  
}
