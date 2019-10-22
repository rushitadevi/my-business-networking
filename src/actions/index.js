
export const handleProfile = data => {
  return async (dispatch, getState) => {
    let username = "user8";
    let password = "eAqd2ZPk3Rbtm8Mw";
    let authString = `${username}:${password}`;
    var headers = new Headers({
      "Content-Type": "application/json"
    });

    headers.set("Authorization", "Basic " + btoa(authString));

    var response = await fetch(
      "https://striveschool.herokuapp.com/api/profiles/" + data,
      {
        method: "GET",
        headers: headers
      }
    );
    var jSon = await response.json();
    dispatch({
      type: "PROFILE",
      payload: jSon
    });
  };
};

export const FetchExperiences = (user) => {
  console.log(user,"insie")
  return async (dispatch, getState) => {
    let username = "user8";
    let password = "eAqd2ZPk3Rbtm8Mw";
    let authString = `${username}:${password}`;
    var headers = new Headers({
      "Content-Type": "application/json"
    });

    headers.set("Authorization", "Basic " + btoa(authString));
    var response = await fetch(
      "https://striveschool.herokuapp.com/api/profiles/"+ user  +"/experiences" ,
      {
        method: "GET",
        headers: headers
      }
    );
    var jSon = await response.json();
    console.log(jSon,"exp")
    dispatch({
      type: "GET_EXPERIENCE",
      payload: jSon
    });
  };
};


export const FetchUsers = () => {
  return async (dispatch, getState) => {
    let username = "user8";
    let password = "eAqd2ZPk3Rbtm8Mw";
    let authString = `${username}:${password}`;
    var headers = new Headers({
      "Content-Type": "application/json"
    });

    headers.set("Authorization", "Basic " + btoa(authString));
    var response = await fetch(
      "https://striveschool.herokuapp.com/api/profiles/" ,
      {
        method: "GET",
        headers: headers
      }
    );
    var jSon = await response.json();
   
    var value=jSon[6]
    var newJson=jSon.filter(item => item !==value )
   
    dispatch({
      type: "GET_USERS",
      payload: newJson
    });
  };
};


export const AddPost = state => {
  return async (dispatch, getState) => {
    let username = "user8";
    let password = "eAqd2ZPk3Rbtm8Mw";
    let authString = `${username}:${password}`;
    var headers = new Headers({
      'Accept': 'application/json',
      "Content-Type": "application/json"
    });
    const toSend = { text: state} //json needs object not text, so need to convert into object
    headers.set("Authorization", "Basic " + btoa(authString));
   var response = await fetch(
    "https://striveschool.herokuapp.com/api/posts/" ,
    {
      method: "POST",
      body:JSON.stringify(toSend),
      headers: headers
    }
  );
    var jSon = await response.json();
    dispatch({
      type: "ADD_POSTS",
      payload: jSon
    });
  };
};

export const FetchPosts = () => {
  console.log("key")
  return async (dispatch, getState) => {
    let username = "user8";
    let password = "eAqd2ZPk3Rbtm8Mw";
    let authString = `${username}:${password}`;
    var headers = new Headers({
      "Content-Type": "application/json"
    });

    headers.set("Authorization", "Basic " + btoa(authString));
    var response = await fetch(
      " https://striveschool.herokuapp.com/api/posts/" ,
      {
        method: "GET",
        headers: headers
      }
    );
    var jSon = await response.json();
    console.log(jSon,"json")
    dispatch({
      type: "GET_POSTS",
      payload: jSon
    });
  };
};

