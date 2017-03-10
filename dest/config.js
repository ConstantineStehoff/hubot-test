'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var config = {
	POD_URL: 'https://sym-corp-stage-guse1-aha1.symphony.com:8444/pod/v1',
	AGENT_URL: 'https://sym-corp-stage-guse1-aha1.symphony.com:8444/agent/v1',
	AGENT_URL2: 'https://sym-corp-stage-guse1-aha1.symphony.com:8444/agent/v2',
	SESSION_ENDPOINT: 'https://sym-corp-stage-guse1-aha1.symphony.com:8444/sessionauth/v1/authenticate',
	KEY_MANAGER_ENDPOINT: 'https://sym-corp-stage-guse1-aha1.symphony.com:8444/keyauth/v1/authenticate',

	CERT_FILE_PATH: './certs/bot.user28.pem',
	CERT_KEY_FILE_PATH: './certs/bot.user28.plainkey.pem',
	CERT_PASSPHRASE: '1234',

	USERNAME: 'bot.user28', // (Bolt)
	PASSWORD: 'cOrpB0tK3y',

	SESSION_TOKEN: '',
	KM_TOKEN: '',

	BOT_ID: '',
	STREAM_ID: ''
};

exports.default = config;