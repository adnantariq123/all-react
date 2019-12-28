import React from 'react';

// you could have even set up a default value like yo yo yo if vlaues does not get attached from whereever provider is called
const UserContext = React.createContext("yo yo yo")

// ever context created using the above menthod has to be with a provider and a consumer... whatever bro.. think of it, this shit has to be there :)
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

// same as ALWAYS we need to export that stuff!
export {UserProvider, UserConsumer} 




