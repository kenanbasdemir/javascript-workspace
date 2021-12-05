export class BaseLogger{
    log(data){
        console.log("Default logger : " + data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elastic : " + new Date())
        console.log("-".repeat(100));
        console.log(data);
        console.log("-".repeat(100));
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to MongoDB : " + new Date())
        console.log("-".repeat(100));
        console.log(data);
        console.log("-".repeat(100));
    }
}

