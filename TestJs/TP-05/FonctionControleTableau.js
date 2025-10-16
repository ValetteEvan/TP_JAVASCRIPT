function tableauNombre(tableau)
{
    for (let i = 0; i < tableau.length; i++)
    {
        if (typeof tableau[i] !== 'number') 
        {
            return false;
        }
    }
    return true;    
}

console.log(tableauNombre([1, 2, 3, 4, 5]));
console.log(tableauNombre([1, '2', 3, 4, 5]));
console.log(tableauNombre([1, 2, 3, null, 5]));
console.log(tableauNombre([]));