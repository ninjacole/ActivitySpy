import { Client } from "discord.js";
import { Result } from './Result';

class Bot {
    public client: Client = new Client();

    private readonly token: string;
    private connected: boolean = false;

    constructor(token: string) {
        this.token = token;
    }

    // Connect discord client
    public connect = async (): Promise<Result> => {
        let result: Result = new Result();

        try {
            await this.client.login(this.token);
            result.message = "Logged in successfully";
            result.success = true;
            this.connected = true;
        } catch (error) {
            result.message = error;
            result.success = false;
            this.connected = false;
        }

        return result;
    }

    // Start listening to discord messages
    public listen = (): Result => {
        let result: Result = new Result();

        if (this.connected) {
            result.message = "Listening for messages";
            result.success = true;
        } else {
            result.message = "Not connected";
            result.success = false;
        }

        return result;
    }
}

export { Bot }