import { createRegistItemStore } from "@/store/registItemStore";
import { TCollection, TUser } from "@/types/DatabaseTypes";
import { NextResponse } from "next/server";

const { NEXT_PUBLIC_API } = process.env;

// 해당 테이블 리스트 다 불러오기 getFullList(collection)
export const getFullList = async (
  collection: TCollection,
): Promise<TUser[]> => {
  const res = await fetch(`${NEXT_PUBLIC_API}/${collection}`, { cache: "no-cache" });
  const list = await res.json();

  return list;
};

/* User 관련 API */

// 유저 1명만 불러오기 getOneUser(userId)
export const getOneUser = async (userId: string): Promise<TUser> => {
  try {
    const res = await fetch(`${NEXT_PUBLIC_API}/user/${userId}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const user = await res.json();
    return user;
  } catch (error) {
    throw error;
  }
};

// 유저 생성하기
export const createUser = async () => {
  try {
    const res = await fetch(`${NEXT_PUBLIC_API}/user`, { method: "POST" });
  } catch (err: any) {
    return NextResponse.json({ err: err.message });
  }
};

// 유저 삭제하기 deleteUser(userId)
export const deleteUser = async (userId: string) => {
  try {
    const res = await fetch(`${NEXT_PUBLIC_API}/user/${userId}`, {
      method: "DELETE",
    });
  } catch (err: any) {
    return NextResponse.json({ err: err.message });
  }
};

/* style 관련 API */
export const getStyle = async (styleId: string) => {
  try {
    const res = await fetch(`${NEXT_PUBLIC_API}/style/${styleId}`, {
      cache: "no-cache",
    });
    const style = await res.json();
    return style;
  } catch (err: any) {
    return NextResponse.json({ err: err.message });
  }
};
/* puppeteer에 url 전달 API */
export const submitURL = async (formData: FormData) => {
  try {
    const url = formData.get("url");
    const encodedUrl = encodeURIComponent(url as string);
    const res = await fetch(`${NEXT_PUBLIC_API}/dressroom/${encodedUrl}`, {
      cache: "no-cache",
    });
    const { data } = await res.json();

    return { success: true, data: data.data };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
};
