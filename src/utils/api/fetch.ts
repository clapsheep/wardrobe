import { TCollection, TUser } from "@/types/DatabaseTypes";
import { NextResponse } from "next/server";

const { MONGO_API } = process.env;

// 해당 테이블 리스트 다 불러오기 getFullList(collection)
export const getFullList = async (
  collection: TCollection,
): Promise<TUser[]> => {
  const res = await fetch(`${MONGO_API}/${collection}`, { cache: "no-cache" });
  const { list } = await res.json();
  console.log(list);

  return list;
};

/* User 관련 API */

// 유저 1명만 불러오기 getOneUser(userId)
export const getOneUser = async (userId: string): Promise<TUser> => {
  const res = await fetch(`${MONGO_API}/user/${userId}`, {
    cache: "no-cache",
  });
  const { user } = await res.json();
  return user;
};

// 유저 생성하기
export const createUser = async () => {
  try {
    const res = await fetch(`${MONGO_API}/user`, { method: "POST" });
  } catch (err: any) {
    return NextResponse.json({ err: err.message });
  }
};

// 유저 삭제하기 deleteUser(userId)
export const deleteUser = async (userId: string) => {
  try {
    const res = await fetch(`${MONGO_API}/user/${userId}`, {
      method: "DELETE",
    });
  } catch (err: any) {
    return NextResponse.json({ err: err.message });
  }
};
