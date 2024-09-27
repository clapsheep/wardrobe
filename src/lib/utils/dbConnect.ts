import mongoose, { Mongoose } from "mongoose";

// 타입 정의 추가
declare global {
  var mongoose: {
    promise: Promise<Mongoose> | null;
    conn: Mongoose | null;
  };
}

const { MONGO_URI } = process.env;

if (!MONGO_URI) {
  throw new Error(".env.local에 있는 MONGO_URI를 확인해주세요.");
}
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .set({ debug: true, strictQuery: false })
      .connect(`${MONGO_URI}`, {
        dbName: "wardrobe",
        ...(process.env.NODE_ENV === "development" ? { maxPoolSize: 1 } : {}), // 배포시 해당 줄 삭제
      })
      .then((mongoose) => mongoose)
      .catch((error) => {
        console.error("Mongoose 연결 오류:", error);
        throw error;
      });
  }

  cached.conn = await cached.promise;
  console.log("연결성공");

  return cached.conn;
}

// 애플리케이션 종료 시 연결 해제
process.on("exit", async () => {
  if (cached.conn) {
    try {
      await cached.conn.disconnect();
      console.log("Mongoose 연결 해제 완료");
    } catch (error) {
      console.error("Mongoose 연결 해제 오류:", error);
    }
  }
});

export default dbConnect;
