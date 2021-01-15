import {
  addNewContact,
  getContacts,
  getContactWithId,
  updateContact,
} from '../controllers/crmControllers';

const routes = app => {
  app
    .route('/contact')
    .get(getContacts)

    .post(addNewContact);

  app
    .route('/contact/:contactID')
    .get(getContactWithId)
    .put(updateContact)
    .delete((req, res) => res.send('delete'));
};

export default routes;
