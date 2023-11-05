import mongoos from 'mongoose';

const Connection = async (username = 'admin', password = '12345') => {
    const URL = `mongodb://${username}:${password}@ac-zex0216-shard-00-00.lr90jd5.mongodb.net:27017,ac-zex0216-shard-00-01.lr90jd5.mongodb.net:27017,ac-zex0216-shard-00-02.lr90jd5.mongodb.net:27017/docs-clon?ssl=true&replicaSet=atlas-6cplmm-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoos.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('database connected sucessfully');
    } catch (error) {
        console.log('error while connecting with the database', error);
    }
}

export default Connection;