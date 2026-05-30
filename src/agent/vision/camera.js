import { EventEmitter } from 'events';

export class Camera extends EventEmitter {
    constructor(bot, fp) {
        super();
        this.bot = bot;
        this.fp = fp;
        console.log('Camera disabled in server environment');
        setTimeout(() => this.emit('ready'), 100);
    }

    async capture() {
        console.log('Camera capture disabled in server environment');
        return null;
    }
}
