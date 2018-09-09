import { Router } from 'express';
import contacts from './contacts'; 
import querys from '../services/querys';
export default () => {
	let api = Router();

	api.use('/contacts', contacts());

	api.get('/search-contacts', (req,res) => {
		
			let letters = req.query.letters;
			querys.custom_query('SELECT * FROM contacts WHERE last_name LIKE "' + letters+'%"').then((data) => {
				res.json({'data':data});
			}).catch((err) => {
				res.json({'message':err});
			})
		
	})

	return api;

}
