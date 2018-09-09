class Utils {
    constructor() {
    }

    create_id(letter) {
        return letter + (new Date().valueOf()).toString();
    };
}

export default new Utils();