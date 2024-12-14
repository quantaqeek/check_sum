import ContactForm from "@/components/contacts/contactForm";
import ContactsHero from "@/components/contacts/ContactsHero";

import React from "react";

const Contacts = () => {
  return (
    <div className="flex flex-col w-full">
      <ContactsHero />
      <ContactForm />
    </div>
  );
};

export default Contacts;
