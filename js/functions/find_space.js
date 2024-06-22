function find_space(st)
{
    for(let i = 0; i < st.length; i ++) {
        if (st[i] == ' ')
            return i
    }
    return -1  // Not found
}

function find_space_pos(st)
{
    return  st.indexOf(' ')
}

console.log(find_space("how are you"))
console.log(find_space("hello"))

console.log(find_space_pos("how are you"))
