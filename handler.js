"use strict";
const AWS = require("aws-sdk");

const SES_CONFIG = {
  accessKeyId: process.env.AC,
  secretAccessKey: process.env.SC,
  region: "eu-central-1",
};

const AWS_SES = new AWS.SES(SES_CONFIG);
const clientConfig = require("./config/clientConfig");
const senderConfig = require("./config/senderConfig");

module.exports.mail = async (event) => {
  try {
    const {
      from: sender,
      to: client,
      question: message,
    } = await JSON.parse(event.body);

    await AWS_SES.sendEmail(clientConfig(client, sender, message)).promise();
    await AWS_SES.sendEmail(senderConfig(sender, client)).promise();

    return { message: "Email sent successfully" };
  } catch (error) {
    throw new Error('Semething went wrong');
  }
};
