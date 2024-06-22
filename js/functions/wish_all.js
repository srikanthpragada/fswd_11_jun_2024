
function wish(...names) {
   for(let n of names)
    console.log(`Hi ${n}`)
}

function wish2(...names) {
    let output = ""
    for(let n of names)
       output += `${n},`

    console.log(`Hi ${output.substring(0, output.length - 1)}`)
 }

wish('Jack', "Mark", "Larry")
wish('Scott', 'Steve')

wish2('Scott', 'Steve')
