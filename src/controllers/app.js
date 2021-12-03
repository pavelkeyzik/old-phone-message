import { MessageParcer } from "./message-parser";
import { PhoneConfig } from "./phone-config";

class App {
  constructor() {
    this.phoneConfig = new PhoneConfig();
    this.messageParcer = new MessageParcer(this.phoneConfig);
    this.result = null;
  }

  sendMessage(message) {
    this.result = this.messageParcer.parseMessage(message);
  }

  getResult() {
    return this.result;
  }
}

export { App };
