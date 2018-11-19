const users = {
    1: {
        name: 'Roman',
        lastName: 'Lurov',
        otherData: {
        role: 'student'
        }
    },
    2: {
        name: 'Ivan',
        lastName: 'Bondarenko',
        otherData: {
        role: 'student'
        }
    },
    3: {
        name: 'Roman',
        lastName: 'Lurov',
        otherData: {
        role: 'student'
        }
    },  
    4: {
        name: 'Oleg',
        lastName: 'Murko',
        otherData: {
        role: 'student'
        }
    },
    5: {
        name: 'Kurz',
        lastName: 'Smith'
    },
};
Object.keys(users).forEach(function(key) {
    const user = users[key];
    if (user) {
        try {
            console.log('name: ', user.name);
            console.log('last name: ', user.lastName);     
            console.log('role: ', user.otherData.role);
        } catch(e) {
            console.log('information missing');
        }
        

    }
});