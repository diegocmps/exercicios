
fetch ("data.json")
.then(resolve => resolve.json())
.then((data)=>{
    document.write(JSON.stringify(data))
})
.catch(err => console.error(err))