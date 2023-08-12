const fs = require('fs') ;
const path = require('path') ;
const replacethis="data";
const replacetwith="acha";
const preview=true;
const folder=__dirname

try {
  fs.readdir(folder,(err,data)=>{
      for (let index = 0; index < data.length; index++) {
        const item = data[index];
        let oldFile=path.join( folder,item)
        let newFile= path.join( folder,item.replaceAll(replacethis,replacetwith))
        if(!preview){
        fs.rename(oldFile,newFile,()=>{
            console.log("Success")
        })
    }
    else{
        if("/data" + item !== newFile)
        
            console.log("data/"+ item +" Will be replace to "+newFile)
    
    
    }
    }
})
} catch (err) {
  console.error(err);
}
