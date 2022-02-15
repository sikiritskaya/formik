const getUsers = () => {
  return fetch(process.env.REACT_APP_USERS_URL)
    .then((res) => res.json())
    .catch((error) => console.log("Connection error", error));
};

export default getUsers;
