const User = require('../models/user');
const City = require('../models/city');
const Listing = require('../models/listing');
const Category= require('../models/category');
const SubCategory = require('../models/sub-category');
const Feature = require('../models/feature');
const ListingFeatures = require('../models/listing-features');
const Country = require('../models/country');
const Post = require('../models/post');
const Tag = require('../models/tag');
const PostTag = require('../models/post-tag');
const Event = require('../models/event');
const EventComment = require('../models/event-comment');
const EventCommentReply = require('../models/event-comment-reply');
const PostComment = require('../models/post-comment');
const PostCommentReply = require('../models/post-comment-reply');

// DATABASE RELATIONS 
// USER CITY
User.belongsTo(City);
City.hasMany(User);
// USER COUNTRY
User.belongsTo(Country);
Country.hasMany(User);

//---------------------LISTING---------------------------
// LISTING CITY
Listing.belongsTo(City);
City.hasMany(Listing);
// LISTING COUNTRY
Listing.belongsTo(Country);
Country.hasMany(Listing);
// CITY COUNTRY
City.belongsTo(Country);
Country.hasMany(City);
// USER LISTING
Listing.belongsTo(User);
User.hasMany(Listing);
// LISTİNG CATEGORY
Listing.belongsTo(Category);
Category.hasMany(Listing);
//LISTING SUBCATEGORY
Listing.belongsTo(SubCategory);
SubCategory.hasMany(Listing);
// LISTING CATEGORY SUBCATEGORY
SubCategory.belongsTo(Category);
Category.hasMany(SubCategory);
// LISTING FEATURE SUBCATEGORY
Feature.belongsTo(SubCategory);
SubCategory.hasMany(Feature);
// LISTING FEATURE - LISTING
ListingFeatures.belongsTo(Listing);
Listing.hasMany(ListingFeatures);
// LISTING FEATURE - FEATURE
ListingFeatures.belongsTo(Feature);
Feature.hasMany(ListingFeatures);
// LISTING EVENT
Event.belongsTo(Listing);
Listing.hasMany(Event);

//-------------------LISTING COMMENT AND RATING----------------
//  LISTING RATE SYSTEM WILL BE CHANGED AS LISTING CATEGORY
// OLANAKLAR, TEMİZLİK, HİZMET, FİYAT, KONUM, TOPLAM






//--------------------POST TAG-----------------
// POST TAG
Tag.belongsTo(Post);
Post.hasMany(Tag);
// POST TAG - POST
PostTag.belongsTo(Post);
Post.hasMany(PostTag);
// POST TAG - TAG
PostTag.belongsTo(Tag);
Tag.hasMany(PostTag);
// POST USER
Post.belongsTo(User);
User.hasMany(Post);


//-------------EVENT COMMENT------------
// EVENT COMMENT - EVENT
EventComment.belongsTo(Event);
Event.hasMany(EventComment);
// EVENT COMMENT - USER
EventComment.belongsTo(User);
User.hasMany(EventComment);
// EVENT COMMENT REPLY - USER
EventCommentReply.belongsTo(User);
User.hasMany(EventCommentReply);
// EVENT COMMENT REPLY - EVENT COMMENT
EventCommentReply.belongsTo(EventComment);
EventComment.hasMany(EventCommentReply);

// -------------POST COMMENT------------------
// POST COMMENT - USER
PostComment.belongsTo(User);
User.hasMany(PostComment);
// POST COMMENT  - POST
PostComment.belongsTo(Post);
Post.hasMany(PostComment);
// POST COMMENT REPLY - USER
PostCommentReply.belongsTo(User);
User.hasMany(PostCommentReply);
// POST COMMENT  - POST COMMENT
PostCommentReply.belongsTo(PostComment);
PostComment.hasMany(PostCommentReply);