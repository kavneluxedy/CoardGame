const post = async (url, option) => {
  return await fetch(url, option).then((response) => {
    return response.json();
  });
};

const Comm = async (dbName, collName, filter, uri) => {
  let option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dbName: dbName,
      collName: collName,
      query: filter,
    }),
  };

  let result = await post(uri, option);
  return result;
};

export { Comm };