const simulatedApi = new Promise((resolve, reject) => {
  resolve({
    id: 1,
    advice: "You will never win, if you never begin!"
  });
});

export default simulatedApi;
