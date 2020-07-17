const Dialogflow = require("dialogflow");
const uuid = require("uuid");

const { DialogFlowModel } = require("./models");
const config = require("./config");

const credentials = {
  client_email: config.CLIENT_EMAIL,
  private_key: config.PRIVATE_KEY,
};

const sessionId = uuid.v4();
const sessionClient = new Dialogflow.SessionsClient({
  projectId: config.PROJECT_ID,
  credentials,
});

module.exports = async function (context, req) {
  const { message } = req.body;
  const requestOptions = new DialogFlowModel();

  requestOptions.session = sessionClient.sessionPath(
    config.PROJECT_ID,
    sessionId
  );

  requestOptions.queryInput = {
    text: {
      text: message,
      languageCode: config.LANGUAGE,
    },
  };

  const response = await sessionClient.detectIntent(requestOptions);
  context.res = {
    body: response[0].queryResult,
  };
};
