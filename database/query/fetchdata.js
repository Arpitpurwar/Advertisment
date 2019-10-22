const db2 = require('../connection/dbconnection');
const path = require('path');
const fs = require('fs');
const logger = require('../../common/logconfig')(__filename);


var getImage = function (locationId) {
    return new Promise ((resolve, reject) =>{
    let sql = `select a.mediaId,a.locationId,b.locationName,c.mediaName,c.media,c.mediaUrl,c.mediaSequence,c.media_loop_time from mapping_location_with_media a
     INNER JOIN locations b on a.locationId = b.id 
     INNER JOIN media_type c on a.mediaId=c.id where (a.locationId=1 or a.locationId=${locationId}) order by c.mediaSequence` ;
    db2.connection.query(sql,(err,rows) =>{
        if(err) {
            reject({err: "Location ID query"+err})
        } 
        else{
            resolve(rows)
        }
    })
    })
}

var getLocation = function () {
    return new Promise ((resolve, reject) =>{
    let sql = 'select * from locations';
    db2.connection.query(sql,(err,rows) =>{
        if(err) {
            reject({err : "All location api err"+ err})
        }
        else{
            resolve(rows)
        }
    })

    })
}
var insertData = function (mediaName,mediaType, file,locationId,mediaSequence,mediaUrl,media_loop_time){
    return new Promise ((resolve, reject) =>{
        if(file!==undefined){
        let filePath = path.join(__dirname,"../../uploads",file.filename);
        let buff = fs.readFileSync(filePath,'binary');
        let img = {ParamType:"file", DataType: "BLOB", "Data": buff};
        let sql = "insert into media_type (mediaName,mediaType, media,mediaSequence,mediaUrl,media_loop_time) VALUES (?,?,?,?,?,?)"

        db2.connection.query(sql,[mediaName,mediaType,img,mediaSequence,mediaUrl,media_loop_time],(err,rows)=>{
            
            if(err) {
        
                reject({err : "media insert query"+err});        
            fs.unlinkSync(filePath);
            logger.info('File deleted!');
            }
            else{
            let sql2 = 'select max(id) as id from media_type';
            db2.connection.query(sql2,(err,rows)=>{
                if(err) reject({err : "media select query"+err});
                let sql3 = 'insert into MAPPING_LOCATION_WITH_MEDIA (mediaid,locationid) VALUES (?,?)';
                db2.connection.query(sql3,[rows[0].ID,locationId],(err,rows)=>{
                    if(err) reject({err : "loaction insert query"+err});
                    resolve({notes: "successfully inserted all Data"})
                });
                        });
                    }
       });
    }
    else{
      
        let sql = "insert into media_type (mediaName,mediaType,mediaSequence,mediaUrl,media_loop_time) VALUES (?,?,?,?,?)"

        
        db2.connection.query(sql,[mediaName,mediaType,mediaSequence,mediaUrl,media_loop_time],(err,rows)=>{
            if(err) {
                
                reject({err : "media insert query"+err});        
            fs.unlinkSync(filePath);
            logger.info('File deleted!');
            }
            else{
            let sql2 = 'select max(id) as id from media_type';
            db2.connection.query(sql2,(err,rows)=>{
                if(err) reject({err : "media select query"+err});
                else{
                let sql3 = 'insert into MAPPING_LOCATION_WITH_MEDIA (mediaid,locationid) VALUES (?,?)';
                db2.connection.query(sql3,[rows[0].ID,locationId],(err,rows)=>{
                    if(err) reject({err : "loaction insert query"+err});
                    resolve("An Error Occured")
                });
            }
                        });
                    }
       });
    }
    });
};



module.exports = {
    insertData : insertData,
    getImage : getImage,
    getLocation : getLocation
}