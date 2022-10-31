
fetch('http://lis.unza.zm/archive-rest/communities')
.then((data) => {
    console.log(data);
    return data.json(); //coverted to object
    nodeintergration: true
})