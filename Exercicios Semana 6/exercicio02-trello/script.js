function getUserInfo(){
      return new Promise((resolve)=>{
        setTimeout(()=>{
            let user = {
            nome:"Diego",
            idade:"39",
            email:"diego@email.com"
        }
        resolve(user)
        }, 2000)
        
    })
}

async function showUserInfo(){
    let retorno = await getUserInfo()
    console.log(retorno)
}

showUserInfo()