// const user = {
//     name: 'Brandon',
//     email: 'brandon@gmail.com'
// }

// const renderUser = ({ name, email }) => {
//     console.log(`${name}: ${email}`);
// }

// renderUser(user)

const bank = {
    accountNum: 454812259,
    name: 'John Doe',
    balance: 1257
};

const bankInfo = ({ name, balance, accountNum }) => {
    return(`Hi ${name}! Your current balance is $${balance}. Account#: ${accountNum}.`)
};

bankInfo(bank);