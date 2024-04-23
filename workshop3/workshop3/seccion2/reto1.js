let i = true

while(i){
    const usergrades = (prompt("Ingresa tus notas separadas por comas"))
    let final = usergrades.split(",").map(init => parseInt(init))
    console.log(final)

    const sumgrades = final.reduce((total,number) => {
        return total + number /final.length
    
},0)
  alert(`tu promedio de las notas ingresadas es ${sumgrades}`)
  console.log(sumgrades)

}
