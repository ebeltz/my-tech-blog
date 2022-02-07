const { Post } = require('../models');

const postData = [{
        title: 'Olympics Day 1',
        content: 'The US team figure skating started off great! We won the mens short program and the ice dance short program!',
        user_id: 1

    },
    {
        title: 'Olympics Day 2',
        content: 'Curling was awesome to watch. The mixed doubles is very interesting to watch.',
        user_id: 2
    },
    {
        title: 'Olympics Day 3',
        content: 'It would be interesting to learn about the technology that the Olympics use',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;