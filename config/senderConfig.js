const senderConfig = (email, client) => {
  const senderParams = {
    Source: client,
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: "<h2>This is the feedback message from user</h2>",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Email sent to ${client}`,
      },
    },
  };
  return senderParams;
};
module.exports = senderConfig;
