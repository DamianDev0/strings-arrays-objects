let id = 1;
let products = [];

function add() {
  let init = true;
  while (init) {
    let nameProducts = prompt("ingrese el nombre del producto");
    let preciProduct = prompt("ingrese el precio del producto");
    let quantityProducts = prompt("ingrese la cantidad");
    let descriptionProducts = prompt("ingrese la descripcion de el producto");

    let checkIfProductsRepeat = RepeatProducts(products, nameProducts);
    if (checkIfProductsRepeat > 0) {
      let str = checkIfProductsRepeat.toString();
      nameProducts = nameProducts + " copy" + str;
    }

    let products1 = {
      id: id,
      name: nameProducts,
      price: preciProduct,
      quantity: quantityProducts,
      description: descriptionProducts,
    };
    id++;

    products.push(products1);

    init = ask();
  }
  console.log(products);
  return products;
}

function RepeatProducts(products, nameProducts) {
  const filterProducts = products.filter(
    (products) => products.name === nameProducts
  );
  return filterProducts.length;
}

function ask() {
  const option = prompt("¿Deseas agregar otro producto? (si/no)").toLowerCase();
  return option === "si";
}

function searchByNameAndPrice(products) {
  let option = prompt(
    "¿Cómo deseas buscar los productos, por nombre/precio?"
  ).toLowerCase();
  if (option === "nombre") {
    let name = prompt(
      "Ingrese el nombre del producto que desea buscar"
    ).toLowerCase();
    let foundProduct = products.find(
      (product) => product.name.toLowerCase() === name
    );
    if (foundProduct) {
      alert(
        `ID: ${foundProduct.id}\nNombre: ${foundProduct.name}\nPrecio: ${foundProduct.price}\nCantidad: ${foundProduct.quantity}\nDescripción: ${foundProduct.description}`
      );
    } else {
      alert("Producto no encontrado");
    }
  } else if (option === "precio") {
    let priceMin = prompt("Ingrese el precio mínimo por el que desea buscar");
    let priceMax = prompt("Ingrese el precio máximo");
    const showProducts = products.filter(
      (product) => product.price >= priceMin && product.price <= priceMax
    );
    if (showProducts.length > 0) {
      showProducts.forEach((product) => {
        alert(
          `ID: ${product.id}\nNombre: ${product.name}\nPrecio: ${product.price}\nCantidad: ${product.quantity}\nDescripción: ${product.description}`
        );
      });
    } else {
      alert("No se encontraron productos en ese rango de precios");
    }
  } else {
    alert("Opción inválida");
  }
}

function del() {
  const nameDel = prompt("Ingrese el nombre del producto que desea borrar");
  const index = products.findIndex((product) => product.name === nameDel);
  if (index !== -1) {
    const confirmDelete = confirm(
      `¿Seguro que quieres borrar el proudcto "${nameDel}"?`
    );
    if (confirmDelete) {
      products.splice(index, 1);
      alert("Evento borrado correctamente.");
    } else {
      alert("Borrado cancelado.");
    }
  } else {
    alert("No se encontró el evento con ese nombre.");
  }
}

function update() {
  const nameUpdate = prompt(
    "Ingrese el nombre del producto que desea actualizar"
  );
  const option = prompt(
    "ingrese que desea cambiar del producto: name, price,quantity,description"
  );

  const index = products.findIndex((prduct) => prduct.name === nameUpdate);
  if (index !== -1) {
    if (option == "name") {
      const nameUpdate = prompt("Ingrese el nuevo nombre del producto");
      products[index].name = nameUpdate;
    }
    if (option == "price") {
      const priceUpdate = parseInt(prompt("ingrese el precio"));
      products[index].price = priceUpdate;
    }
    if (option == "quantity") {
      const quantityUpdate = parseInt(prompt("ingrese la cantidad"));
      products[index].quantity = quantityUpdate;
    }
    if (option == "description") {
      const descripcionUpdate = prompt("ingrese la description");
      products[index].description = descripcionUpdate;
    }
    alert("el evento ha sido actualizado");
    alert(JSON.stringify(products));
  } else {
    alert(
      "No se encontró el evento con ese nombre bro, verfica si lo estas escribiendo bien"
    );
  }
}

function constTotalOfInventory(products) {
  const cost = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  alert(`El costo total de el inventario es de ${cost}`);
  console.log(cost);
}

function existsProduct(products) {
  const search = prompt(
    "¿Que producto quieres validar en el inventario?"
  ).toLowerCase();
  const findProduct = products.find(function (product) {
    alert("el producto existe");
    return product.name === search;
  });

  if (findProduct.quantity === 0) {
    alert("El producto existe pero no tenemos cantidades disponibles");
  } else {
    alert(`Hay ${findProduct.quantity} productos de este item`);
  }
}

function buyProducts(products) {
  let buyUser = prompt("Que productos deseas comprar");
  const ifExist = products.find(function (products) {
    return products.name === buyUser;
  });

  if (ifExist.quantity > 0) {
    let quantityUser = prompt(
      `cuantas unidades del produto ${ifExist.name} las unidades disponibles son ${ifExist.quantity} `
    );
    if (quantityUser <= ifExist.quantity) {
      ifExist.quantity -= quantityUser;
      alert(`has comprado ${quantityUser}`);
      alert("gracias por la compra");
    } else {
      alert("no existe el producto");
    }
  }
}

function sortByName(products) {
  orderbyname = products.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  alert(`Elemntos ordenados por nombre ${JSON.stringify(orderbyname)}`);
}

function sortByprice(products) {
  orderbyprice = products.sort((a, b) => {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  });
  alert(`Elemntos ordenados por precio ${JSON.stringify(orderbyname)}`);
}

function sortByQuantity(products) {
  orderbyQuanty = products.sort((a, b) => {
    if (a.quantity < b.quantity) {
      return -1;
    }
    if (a.quantity > b.quantity) {
      return 1;
    }
    return 0;
  });
  alert(`Elemntos ordenados por cantidad ${JSON.stringify(orderbyQuanty)}`);
}

function sortBydescription(products) {
  orderbydescrip = products.sort((a, b) => {
    if (a.description < b.description) {
      return -1;
    }
    if (a.description > b.description) {
      return 1;
    }
    return 0;
  });
  alert(`Elemntos ordenados por descripcion ${JSON.stringify(orderbyname)}`);
}

function orderProducts(products) {
  let way = prompt(
    "De qué manera quieres organizar\n\n 1 - Nombre\n 2 - Precio\n 3- Cantidad\n4 - Descripción"
  );
  switch (way) {
    case "1":
      sortByName(products);
      break;
    case "2":
      sortByprice(products);
      break;
    case "3":
      sortByQuantity;
      products;
      break;
    case "4":
      sortBydescription(products);
      break;
    default:
      alert("Selección no válida");
  }
}
function detectBadWords(products) {
  for (const word of products) {
    const change = word.description.replace(
      /palabra1|palabra2|palabra3|palabra4/g,
      "*"
    );
    if (change !== word.description) {
      alert(
        `Tienes malas palabras en la descripción del producto ${word.name}`
      );
      alert(`La palabra ha sido censurada: ${change}`);
    }
  }
}

function reportGeneral(products) {
  const totalValueInventory = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const productMostExpensive = Math.max(
    ...products.map((product) => product.price)
  );
  const productCheap = Math.min(...products.map((product) => product.price));
  const lowerAmount = Math.min(...products.map((product) => product.quantity));
  const MoreAmount = Math.max(...products.map((product) => product.quantity));

  alert(`la cantidad de productos que hay es de ${products.length}`);
  alert(`El  valor total del inventario es de ${totalValueInventory}`);
  alert(`El articulo mas caro es ${productMostExpensive.name} ${productMostExpensive}`);
  alert(`El articulo mas bararo es ${productCheap.name} ${productCheap}`);
  alert(
    `El articulo con menos cantidad disponible es ${lowerAmount.name} con ${lowerAmount}`
  );
  alert(
    `El articulo con mas cantidad disponible es ${MoreAmount.name} con ${MoreAmount}`
  );
}

let listProducts = add();

let init = true;

while (init) {
  alert("Bienvenido");
  const option = prompt(
    `Estas son las funciones de la aplicación\n\n
    1: agregar\n
    2: buscar\n
    3: eliminar\n
    4: actualizar\n
    5: costo total inventario\n
    6: ver si hay unidades disponibles\n
    7: comprar productos\n
    8: ordenar productos\n
    9: Ver malas palabras\n
    10:reporte general`
  );
  switch (option) {
    case "1":
      add(listProducts);
      break;
    case "2":
      searchByNameAndPrice(listProducts);
      break;
    case "3":
      del();
      break;
    case "4":
      update();
      break;
    case "5":
      constTotalOfInventory(listProducts);
      break;
    case "6":
      existsProduct(listProducts);
      break;
    case "7":
      buyProducts(listProducts);
      break;
    case "8":
      orderProducts(listProducts);
      break;
    case "9":
      detectBadWords(listProducts);
      break;
    case "10":
      reportGeneral(listProducts);
      break;
    default:
      alert("Opción no válida");
  }
  let moveOn = confirm("¿Quieres realizar otra acción?");
  init = moveOn;
}
