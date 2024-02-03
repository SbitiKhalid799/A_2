const initialState = {
    Users: [
      { "id": 1, "username": "John", "password": "123", "genre": "male" ,"imageProfile":''},
      { "id": 2, "username": "Jane", "password": "456", "genre": "female" ,"imageProfile":''},
      { "id": 3, "username": "Bob", "password": "789", "genre": "male" ,"imageProfile":'Bob.jpg'},
      { "id": 4, "username": "Alice", "password": "abc", "genre": "female" ,"imageProfile":''},
      { "id": 5, "username": "Charlie", "password": "def", "genre": "male" ,"imageProfile":''},
      { "id": 6, "username": "User6", "password": "password6", "genre": "female" ,"imageProfile":''},
      { "id": 7, "username": "User7", "password": "password7", "genre": "male" ,"imageProfile":''},
      { "id": 8, "username": "User8", "password": "password8", "genre": "female" ,"imageProfile":''},
      { "id": 9, "username": "User9", "password": "password9", "genre": "male" ,"imageProfile":''},
      { "id": 10, "username": "User10", "password": "password10", "genre": "female" ,"imageProfile":''},
      { "id": 11, "username": "User11", "password": "password11", "genre": "male" ,"imageProfile":''},
      { "id": 12, "username": "User12", "password": "password12", "genre": "female" ,"imageProfile":''},
      { "id": 13, "username": "User13", "password": "password13", "genre": "male" ,"imageProfile":''},
      { "id": 14, "username": "User14", "password": "password14", "genre": "female" ,"imageProfile":''},
      { "id": 15, "username": "User15", "password": "password15", "genre": "male" ,"imageProfile":''},
      { "id": 16, "username": "User16", "password": "password16", "genre": "female" ,"imageProfile":''},
      { "id": 17, "username": "User17", "password": "password17", "genre": "male" ,"imageProfile":''},
      { "id": 18, "username": "User18", "password": "password18", "genre": "female" ,"imageProfile":''},
      { "id": 19, "username": "User19", "password": "password19", "genre": "male" ,"imageProfile":''},
      { "id": 20, "username": "User20", "password": "password20", "genre": "female" ,"imageProfile":''},
      { "id": 21, "username": "User21", "password": "password21", "genre": "male" ,"imageProfile":''},
      { "id": 22, "username": "User22", "password": "password22", "genre": "female" ,"imageProfile":''},
      { "id": 23, "username": "User23", "password": "password23", "genre": "male" ,"imageProfile":''},
      { "id": 24, "username": "User24", "password": "password24", "genre": "female" ,"imageProfile":''},
      { "id": 25, "username": "User25", "password": "password25", "genre": "male" ,"imageProfile":''},
      { "id": 26, "username": "User26", "password": "password26", "genre": "female" ,"imageProfile":''},
      { "id": 27, "username": "User27", "password": "password27", "genre": "male" ,"imageProfile":''},
      { "id": 28, "username": "User28", "password": "password28", "genre": "female" ,"imageProfile":''},
      { "id": 29, "username": "User29", "password": "password29", "genre": "male" ,"imageProfile":''},
      { "id": 30, "username": "User30", "password": "password30", "genre": "female" ,"imageProfile":''},
      { "id": 31, "username": "User31", "password": "password31", "genre": "male" ,"imageProfile":'hdfghdfgh.jpg'},
      { "id": 32, "username": "User32", "password": "password32", "genre": "female" ,"imageProfile":''},
      { "id": 33, "username": "User33", "password": "password33", "genre": "male" ,"imageProfile":''},
      { "id": 34, "username": "User34", "password": "password34", "genre": "female" ,"imageProfile":''},
      { "id": 35, "username": "User35", "password": "password35", "genre": "male" ,"imageProfile":''},
      { "id": 36, "username": "User36", "password": "password36", "genre": "female" ,"imageProfile":''},
      { "id": 37, "username": "User37", "password": "password37", "genre": "male" ,"imageProfile":''},
      { "id": 38, "username": "User38", "password": "password38", "genre": "female" ,"imageProfile":''},
      { "id": 39, "username": "User39", "password": "password39", "genre": "male" ,"imageProfile":''},
      { "id": 40, "username": "User40", "password": "password40", "genre": "female" ,"imageProfile":''},
      { "id": 41, "username": "User41", "password": "password41", "genre": "male" ,"imageProfile":''},
      { "id": 42, "username": "User42", "password": "password42", "genre": "female" ,"imageProfile":''},
      { "id": 43, "username": "User43", "password": "password43", "genre": "male" ,"imageProfile":''},
      { "id": 44, "username": "User44", "password": "password44", "genre": "female" ,"imageProfile":''},
      { "id": 45, "username": "User45", "password": "password45", "genre": "male" ,"imageProfile":''},
      { "id": 46, "username": "User46", "password": "password46", "genre": "female" ,"imageProfile":''},
      { "id": 47, "username": "User47", "password": "password47", "genre": "male" ,"imageProfile":''},
      { "id": 48, "username": "User48", "password": "password48", "genre": "female" ,"imageProfile":''},
      { "id": 49, "username": "User49", "password": "password49", "genre": "male" ,"imageProfile":''},
      { "id": 50, "username": "User50", "password": "password50", "genre": "female" ,"imageProfile":''},
    ],
    Publications: [
      { userId: 1,id: 0, name: 'Post_1', Description: 'Description of Post_1', like:4, usersLike: [45, 34, 9, 32] ,Commantes:[] },
      { userId: 23,id: 1, name: 'Post_2', Description: 'Description of Post_2', like: 3, usersLike: [1, 2, 3] ,Commantes:[]},
      { userId: 33,id: 2, name: 'Post_3', Description: 'Description of Post_3', like: 3, usersLike: [2, 4, 6],Commantes:[] },
      { userId: 44,id: 3, name: 'Post_4', Description: 'Description of Post_4', like: 3, usersLike: [3, 6, 9] ,Commantes:[]},
      { userId: 7,id: 4, name: 'Post_5', Description: 'Description of Post_5', like: 3, usersLike: [4, 8, 12] ,Commantes:[]},
      { userId: 1,id: 5, name: 'Post_6', Description: 'Description of Post_6', like: 3, usersLike: [5, 10, 15],Commantes:[] },
      { userId: 50,id: 6, name: 'Post_7', Description: 'Description of Post_7', like: 3, usersLike: [6, 12, 18] ,Commantes:[]},
      { userId: 11,id: 7, name: 'Post_8', Description: 'Description of Post_8', like: 3, usersLike: [7, 14, 21],Commantes:[] },
      { userId: 14,id: 8, name: 'Post_9', Description: 'Description of Post_9', like: 3, usersLike: [8, 16, 24] ,Commantes:[{id:2,commantaire:'bla bla bla bla bla bla bla bla bla bla'},{id:5,commantaire:'bla bla bla bla bla'}]},
      { userId: 31,id: 9, name: 'LYNXNPEI2S18O_L.jpg', Description: 'بلقبلة وناس زفان عبيد فارس غيرهم الكثير ساهمو في هذا الانجاز حذاري اوبابابابابابابابابابابابا', like: 0, usersLike: [] ,Commantes:[{id:2,commantaire:'bla bla bla bla bla bla bla bla bla bla'},{id:5,commantaire:'bla bla bla bla bla'}]},
    ],
    Convercation : [{id:"3_with_1",msgs:[]}]
  };

let counter = true;

export const Reducer = (state = initialState,action) => {
    switch (action.type){
        case 'AJOUTER_UTILISATEUR':
            let newUser = {...action.payload,id:state.Users.length + 1}
            return {...state,Users:[...state.Users,newUser]}
        case "ADD_NEW_POST":
            let newPost = {...action.payload,id:state.Publications.length + 1}
            return {...state,Publications:[...state.Publications,newPost]}
        case 'DELETE_POST' :
            return {...state,Publications:state.Publications.filter((e) => e.id !== action.payload.id)}
        case 'NEW_CONVERCATION':
            const conversationExists = state.Convercation.some(
              (conversation) => conversation.id === `${action.payload.id}_with_${action.payload.idU}` || conversation.id === `${action.payload.idU}_with_${action.payload.id}`
            );
            return conversationExists
                ? { ...state }
                : {
                    ...state,
                    Convercation: [
                      ...state.Convercation,
                      {
                        id: `${action.payload.id}_with_${action.payload.idU}`,
                        msgs: [],
                      },
                    ],
                  };
            
            case 'SEND_MESSAGE':
              const {id,message,idConv_1,idConv_2} = action.payload;
              const updatedConversations = state.Convercation.map((conversation) => {
                if (conversation.id === idConv_1 || conversation.id === idConv_2) {
                  return {...conversation,msgs: [...conversation.msgs, { idU: id, Message: message }]};
                }
                return conversation;
              });
              return {...state, Convercation: updatedConversations,};
              case 'LIKE_A_PUBLICATION':
                const { idUser, idPost } = action.payload;
                const updatedPublications = state.Publications.map((publication) => {
                  if (publication.id === parseInt(idPost)) {
                    const usersLike = counter
                      ? [...publication.usersLike, parseInt(idUser)]
                      : publication.usersLike.filter(e => e !== parseInt(idUser));
                    const like =  publication.usersLike.length;
                    counter = !counter;
                    return {
                      ...publication,
                      usersLike,
                      like,
                    };
                  }
                  return publication;
                });
                return { ...state, Publications: updatedPublications };
                case 'ADD_COMMANTE':
                  const {idu,commante,idPoste} = action.payload;
                  const newComment = {id:idu,commantaire:commante}
                  const C = state.Publications.map((publication) => {
                    if (publication.id === parseInt(idPoste)) {
                      const C = [...publication.Commantes, newComment];
                      return { ...publication, Commantes: C };
                    }
                    return publication;
                  });
                  return { ...state, Publications: C };
                
        default: 
            return state
    }
}