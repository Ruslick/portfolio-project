const express = require('express')
const fs = require('fs')
const path = require('path')



const router = express.Router()

router.route('/')
  // .get((req, res) => {
  //   let page = ''
  //   fs.createReadStream(
	// 		path.join(__dirname, "..", "..", "client", "build", "index.html")
	// 	)
	// 		.on("data", (chunk) => {
	// 			page += chunk;
	// 		})
	// 		.on("end", () => {
  //       res.type('text/html')
	// 			res.send(page);
	// 		});
  // })


module.exports = router