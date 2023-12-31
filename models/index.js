const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

Blogpost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
    });

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
    });

Comment.belongsTo(Blogpost, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
    });

User.hasMany(Blogpost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
    });

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
    });

Blogpost.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
    });

module.exports = { User, Blogpost, Comment };
