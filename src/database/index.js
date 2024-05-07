import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://hoangphta:1234567hoang@moviecluster0.zujh9il.mongodb.net/'
        );

        console.log('mongodb is connected')
    } catch (e) {
        console.log(e);
    }
};

export default connectToDB;