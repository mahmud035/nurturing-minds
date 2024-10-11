export const setAuthToken = (user) => {
  const currentUser = {
    email: user?.email,
  };

  //! get JWT Token
  fetch('https://nurturing-minds-server-side.vercel.app/jwt', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem('nurturing-token', data.token);
    });
};
