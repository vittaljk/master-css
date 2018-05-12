interface IKey {
    key: number;
    sound: string;
    alphabet: string;
}

export class Key {
    key: number;
    sound: string;
    alphabet: string;

    constructor(options: IKey) {
        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                this[key] = options[key];
            }
        }
    }
}

