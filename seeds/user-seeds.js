const { User } = require('../models');

const userData = [{
        username: 'Jane',
        password: 'blog11'    
    },
    {
        username: 'Josh',
        password: 'blog12'
    },
    {
        username: 'Abby',
        password: 'blog13'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;