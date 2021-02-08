import { Bot } from "./Bot";
import { config } from './config';
import { Result } from "./Result";

console.log('starting bot');

const bot = new Bot(config.token);

bot.connect().then((connectionResult: Result) => {
    if (connectionResult.success) {
        const listenResult: Result = bot.listen()
    } else {
        console.log(connectionResult.message);
    }
});
