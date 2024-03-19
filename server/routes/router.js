const con = require('../connection/database');
const router = require("express").Router();
const controller = require('../controller/controller');



router.post('/', controller.login);
router.get('/authentication', controller.authentication);
router.get('/logout', controller.logout);


//router to fetch type of concerns from database
router.get('/concerns', controller.fetchConcerns);
router.post('/requestAgent', controller.requestAgent);
router.get('/checkOngoingRequest', controller.checkOngoingRequest);
router.get('/user_concerns', controller.fetchUserConcerns);





module.exports = router;