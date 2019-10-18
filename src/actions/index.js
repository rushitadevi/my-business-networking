
export const handleProfile = data => {
  return async (dispatch, getState) => {
    let username = "user8";
    let password = "eAqd2ZPk3Rbtm8Mw";
    let authString = `${username}:${password}`;
    var headers = new Headers({
      "Content-Type": "application/json"
    });

    headers.set("Authorization", "Basic " + btoa(authString));
data="me"
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

export const FetchExperiences = () => {
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
    dispatch({
      type: "GET_POSTS",
      payload: jSon
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
    dispatch({
      type: "GET_POSTS",
      payload: jSon
    });
  };
};

export const AddPost1 = state => {
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
