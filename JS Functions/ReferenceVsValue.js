var someUser = {
  name: 'Jordan'
}

function nameFormatter (user) {
  return user.name = 'Oops';
}

nameFormatter(someUser);
