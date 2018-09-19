const router = require( "express" ).Router();
const userController = require( "../../controllers/userController" );

// Matches with "/api/articles"
router.route( "/" )
    .get( userController.findAll )
    .post( userController.create )
    // .patch( userController.updateCalendar)
    .patch( userController.updateChildSchema);

// Matches with "/api/articles/:id"
router
    .route( "/userData/:id" )
    .get( userController.findUserData )

router
    .route( "/:id" )
    .get( userController.findById )
    // .post( userController.create )

    .put( userController.update )
    .delete( userController.remove );

module.exports = router;
