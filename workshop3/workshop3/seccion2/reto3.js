
let id = 1

function add(){
    const products =[]
    let init = true
    while(init){
        let nameProducts =prompt("ingrese el nombre del producto");
        let preciProduct = prompt("ingrese el precio del producto")
        let quantityProducts = prompt("ingrese la cantidad")
        let descriptionProducts = prompt("ingrese la descripcion de el producto")

        let checkIfProductsRepeat = RepeatProducts(products,nameProducts)
        if (checkIfProductsRepeat > 0){
            let str =checkIfProductsRepeat.toString()
            nameProducts = nameProducts + " copy" + str

        }
        
        let products1={
            id: id,
            name: nameProducts,
            price: preciProduct,
            quantity: quantityProducts,
            description : descriptionProducts,
        }
        id++

        products.push(products1)

        init = ask()
           
    }
console.log(products)
return products
    
}
    

  
function RepeatProducts(products,nameProducts){
    const filterProducts = products.filter(products=> products.name === nameProducts)
    return filterProducts.length
}

function ask() {
    const option = prompt("¿Deseas agregar otro producto? (si/no)").toLowerCase();
    return option === "si";
  }

function serachbyname(){
    let nameProducts ="ingrese el nombre del producto que desea buscar"
}

add()

