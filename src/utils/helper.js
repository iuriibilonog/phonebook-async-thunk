export const isAlreadyHasContact = (contacts, verifyContact) => {
  const contactsNames = contacts.map((item) => item.name.toLowerCase());

  return contactsNames.includes(verifyContact.toLowerCase());
};
