/**
 * MessageController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  
  /**
   * Action blueprints:
   *    `/message/onMessage`
   */
   onMessage: function (req, res) {
     var message = req.body.text;
     if(message.indexOf('-ass') != -1) {
       var assIndex = message.indexOf('-ass');
       var newMessage = message.substring(0, assIndex) + ' ass-' + message.substring(assIndex + 5);
       return res.json({
         text: newMessage
       });
     }
     return res.json({
     });
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to MessageController)
   */
  _config: {}

  
};
