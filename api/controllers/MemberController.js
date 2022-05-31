/**
 * MemberController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  	
  	 getMember: async (req, res) => {
  		console.log("====================    getMember================");
  		console.log("====================    getMember================");
  		console.log("====================    getMember================");
	    // let member = await Member.find();


		// let member = await sails.sendNativeQuery('MATCH (n:Member) RETURN n LIMIT 20');
		let member = await sails.config.custumNativeQuery.send('MATCH (n:Member) RETURN n LIMIT 20');

  		console.log("============================");
  		console.log("============================");
  		console.log(member);
  		console.log("============================");

  		res.ok({
  			data: member
  		});













     }



};

