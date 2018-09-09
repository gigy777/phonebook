import resource from '../services/resource';
import Contact from '../models/contact';
import querys from '../services/querys';


export default () => resource({

    /** Property name to store preloaded entity on `request`. */
    id: 'contact',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
    load(req, id, callback) {
        let error = null;
        querys.get_by_id('contacts', id).then((data) => {
            callback(error, data);
        }).catch((err) => {
            error = 'Not found'
            callback(error, err);
        })
    },

    /** GET / - List all entities */
    list(req, res) {
        querys.get_all('contacts').then((data) => {
            res.json({ 'data': data })
        }).catch((err) => {
            res.json({ 'err': err })
        })
    },


    /** POST / - Create a new entity */
    create(req, res) {
        console.log(req.body)
        let _contact = new Contact(
            req.body['first_name'],
            req.body['last_name'],
            req.body['phone']
        );
        querys.insert_data('contacts', _contact).then((data) => {
            res.json({ 'data': data })
        }).catch((err) => {
            res.json({ 'err': err })
        })
    },

    /** GET /:id - Return a given entity */
    read({ contact }, res) {
        res.json({ 'data': contact });

    },

    /** PUT /:id - Update a given entity */
    update({ contact, body }, res) {

        let _contact = {
            first_name: body['first_name'],
            last_name: body['last_name'],
            phone: body['phone'],
            is_active: contact.is_active,
            updated: new Date(),
            created: contact.created
        }
        let _id = contact.id;

        querys.update_data('contacts', _contact, _id).then((data) => {
            res.json({ 'data': data });
        }).catch((err) => {
            res.json({ 'message': err })
        });
    },

    /** DELETE /:id - Delete a given entity */
    delete({ contact }, res) {
        console.log(contact);
        if (contact == undefined) {
            res.json({ 'err': 'Faild deleting contact' })
        }
        querys.custom_query(`delete from contacts where id ='${contact.id}'`).then((data) => {
            res.json({ 'data': 'Success deleted contact by id =' + contact.id })
        }).catch(() => {
            res.json({ 'err': 'Faild deleting contact' + contact.id })
        })
    }
});
