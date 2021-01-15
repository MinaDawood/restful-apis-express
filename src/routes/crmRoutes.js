import {
  addNewContact,
  deleteContact,
  getContacts,
  getContactWithId,
  updateContact,
} from '../controllers/crmControllers';

const routes = app => {
  app
    .route('/contact')
    // get all contacts
    .get(getContacts)
    // post a new contact
    .post(addNewContact);

  app
    .route('/contact/:contactID')
    .get(getContactWithId)
    .put(updateContact)
    .delete(deleteContact);
};

export default routes;
