 axios.get('https://api.github.com/users/fmomoreira')
    .then(function(response){
        console.log(response);
        //console.log(response.data.avatar_url); Retorna fotos do avatar do github
    })
    .catch(function(error){
    console.warn(error);
    });
