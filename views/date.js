/* jshint: esversion:6*/

module.exports.getDate = function (){
const today1 = new Date();
    
    const options22 = {
        weekday1: "long",
        year1: "numeric",
        month1: "long",
        day1: "numeric",
    }

  return today1.toLocaleDateString("en-US", options22);
    
}

module.exports.getDay = function (){
    const today1 = new Date();
        
        const options22 = {
            weekday1: "long",
        }
    
        return today1.toLocaleDateString("en-US", options22);
        
    }

    console.log(module.exports);