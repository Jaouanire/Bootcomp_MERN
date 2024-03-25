const readline = require('readline')
const rl = readline.createInterface({input  : process.stdin,
                                     output : process.stdout})

  let contacts = [];
  const mainMenue = async() => {
    console.log('\nContact Manager');
    console.log('1. Add Contact');
    console.log('2. View All Contacts');
    console.log('3. Search for Contact');
    console.log('4. Exit');

rl.question('enter your choices ', (choice) => {

    switch(choice) {
        case '1':
            addContact()
            break;
        case  '2' :
            showList()
            break;
         case '3' :
            searchContact()
            break;
         case  '4' :
            console.log('Exiting application...');
            rl.close();
            break;   
            default :
            'Does not seems that we have this choice try again'
            mainMenue();
           
      } } ); }
const addContact = async () =>{ 
  rl.question('Enter your name : ',(name) => {
  rl.question('Enter your phone : ',(phone) => {
    contacts.push({name,phone});
    console.log('contact added succefully ');
    mainMenue();
  }) ; 
}); 
};
const showList = async() => {
    if( contacts.length === 0 ) {
        console.log('list of contact are empty ');
    } else {
        console.log('list of contacts : \n');
        contacts.forEach((contact) => {
        console.log(` Name : ${contact.name} , phoneNumber : ${contact.phone}`);
          } );
    } 
    mainMenue();
}
    const searchContact = async () => {
        rl.question('Enter name to search : ',(name) => {
        const foundContactName = contacts.find((contact) => contact.name === name);
     if(foundContactName) {
        console.log(`Name : ${foundContactName.name} , phone: ${foundContactName.phone}`);
     }
            else{
                console.log(`no contact found`);
            }
        })
        mainMenue();
    }
  mainMenue();
                                   

