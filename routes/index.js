const express = require("express");
const router = express.Router();
const query=require('../database/query/fetchdata');
const logger = require('../common/logconfig')(__filename);
const multer = require('multer');
const DIR = './uploads/';
const upload = multer({dest: DIR}).single('photo');
const  multipart  =  require('connect-multiparty');
const  multipartMiddleware  =  multipart({ uploadDir:  './uploads' });

router.get('/getLocation', (req, res) => {
    query.getLocation().then(
      (result) =>{
        if (result && result.length)
        {
          res.send(result);
        }
        else
        {
          logger.error({"err":"Data is not available"});
          res.send({"err":"Data is not available"})
        }
      }
      ).catch((e)=>{
        logger.error("error for getLocation",e);
      })

    });

    router.post('/upload',(req,res)=>{
      upload(req, res, function (err) {
        if (req.file == undefined) {
          // An error occurred when uploading
          
          query.insertData(req.body.mediaName,req.body.mediaType,req.file,req.body.locationId,req.body.mediaSequence,req.body.mediaUrl,req.body.media_loop_time).then(data =>{
           
            res.status(200).send(data);
          }).catch(err=>{res.status(500).send("not Done",+err);})

        }  
        else{
          
        query.insertData(req.body.mediaName,req.body.mediaType,req.file,req.body.locationId,req.body.mediaSequence,req.body.mediaUrl,req.body.media_loop_time).then(data =>{
          res.send(data);
        }).catch(err)
      }
    });     
    })


router.get('/getImage/:locationId', (req, res) => {
  query.getImage(req.params.locationId).then(
    (result) =>{
      if (result && result.length)
      {
      
        res.send(result);
      }
      else
      {
        logger.error({"err":"Data is not available"});
        res.send({"err":"Data is not available"})
      }
    }
    ).catch((e)=>{
      logger.error("error for getImage",e);
    })

  });

module.exports = router;