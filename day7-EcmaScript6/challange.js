let url = 'https://dummyjson.com/users';

async function fetchUserData (url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log('Processed Users:' );
        // call function 
        processUserData(data).forEach(user => console.log(`- ${user}`));
        console.log(`Total Age of Active Users: ${summarizeAge(data)}`);
    } catch (error) {
        return "Failed To Fetch Data";
    }
}
function processUserData(usersData){
    const remainingUsers = usersData.users.filter(user => user.gender === 'female')
                                        .map(({firstName, lastName, age}) => `Name: ${firstName} ${lastName}, Age: ${age}`)
    return remainingUsers; 
        
}

function summarizeAge(usersData){
    const UsersAge = usersData.users.filter(user => user.gender === 'female')
                                    .map(({age}) => age).reduce((a,b) => a+b);
    return UsersAge;
}

fetchUserData(url);
///////////////////////////////////////////////////////

async function responseData(){

  try {
 const response = await fetch('https://dummyjson.com/users');
  const json = await response.json();
  console.log(json);

  }
catch(error){
  console.log(error);
} };
responseData(); 




