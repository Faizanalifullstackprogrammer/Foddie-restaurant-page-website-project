const loadContact = () => {
  // set div
  const divContact = document.createElement('div');
  divContact.classList.add('contact_main');

  // h1 heading
  const headingContact = document.createElement('h1');
  headingContact.classList.add('h1');
  headingContact.innerText = 'Contact Us';
  divContact.prepend(headingContact);

  // Email
  const emailDetail = document.createElement('p');
  emailDetail.innerText = 'Email: divyeshpatel685@gmail.com';
  divContact.append(emailDetail);

  // Phone
  const phoneDetail = document.createElement('p');
  phoneDetail.innerText = 'Phone: +256 753 044122';
  divContact.appendChild(phoneDetail);

  return divContact;
};

export default loadContact;