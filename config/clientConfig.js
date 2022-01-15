const clientConfig = (email, sender, message) => {
  const clientParams = {
    Source: sender,
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: message,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `From ${sender}`,
      },
    },
  };
  return clientParams;
};

module.exports = clientConfig;
