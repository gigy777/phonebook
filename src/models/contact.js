import utils from '../services/utils'

class Contact {
    constructor(first_name, last_name, phone) {
        this.id = utils.create_id('c');
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone = phone;
        this.is_active = 1;
        this.created = new Date();
        this.updated = new Date();
    }
}

export default Contact;