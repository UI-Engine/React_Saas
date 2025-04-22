import SecureLS from 'secure-ls';

// You can also use environment variables for your secret key
const SecureLocalStorage = new SecureLS({
  encodingType: 'aes', 
  encryptionSecret: 'secret-key'
});

export default SecureLocalStorage ;
