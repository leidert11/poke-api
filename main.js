const contenido = document.getElementById('contenido')
const imagen = document.getElementById('imagen')

const boton = document.getElementById('boton').addEventListener('click', async() => {
    const nombre = document.getElementById('name').value
    
    const API = `https://pokeapi.co/api/v2/pokemon/${nombre}`
   
    if (nombre === '') {
        alert(`por favor ingrese los datos requeridos`)
    } else {
        const response = await fetch(API)
        if (response.status != 200) {
            contenido.textContent = 'Pokemon No Encontrado'
        } else{
            const datos = await response.json()

            for(i=0;i<datos.abilities.length;i++){
                habilidades=`${datos.abilities[i].ability.name}`
            }

            contenido.innerHTML = `${datos.name}<br>
            ${datos.stats[0].stat.name}: ${datos.stats[0].base_stat}<br>
            Habilidades: ${habilidades} <br>
            Experiencia base: ${datos.base_experience}<br>
            id: ${datos.id}<br>
            Movimiento: ${datos.moves[0].move.name}`

            imagen.innerHTML = `<img src=${datos.sprites.front_default}>`
        }  
    } 

    })
    const reset = document.getElementById('reset').addEventListener('click', () => {
        imagen.innerHTML = ''
        contenido.innerText = ''
    })

 