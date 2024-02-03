export const inscription = (username,password,genre,image) =>{
    return {
        type:'AJOUTER_UTILISATEUR',
        payload:{
            id:0,
            username:username,
            password:password,
            genre:genre,
            imageProfile:image
        }
    }
}

export const newPost = (id,name,Description) => {
    return {
        type : 'ADD_NEW_POST',
        payload :{ 
            userId:parseInt(id),
            id:0,
            name:name,
            Description: Description,
            like: 0,
            usersLike: [],
            Commantes:[]
        }
    }
}

export const DeletrPost = (id) => {
    return {
        type : 'DELETE_POST',
        payload :{id}
    }
}

export const NewConvercarion = (id,idU) => {
    return{
        type : 'NEW_CONVERCATION',
        payload : {id,idU}
    }
}

export const SendMesg = (id,message,idConv_1,idConv_2) => {
    return {
        type:'SEND_MESSAGE',
        payload : {id,message,idConv_1,idConv_2}
    }
}

export const LikingPost = (idUser,idPost) =>{
    return {
        type:'LIKE_A_PUBLICATION',
        payload:{idUser,idPost}
    }
}

export const AddCommante = (idu,commante,idPoste) => {
    return {
        type:'ADD_COMMANTE',
        payload:{
            idu,
            commante,
            idPoste
        }
    }
}