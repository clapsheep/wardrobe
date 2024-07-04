import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// JWT 페이로드 타입 정의
interface JwtPayload {
  user: string; // 실제 사용자 객체 구조에 맞게 수정
}

export const middleware = (req: NextRequest) => {
  // 보호된 경로 리스트 (예시)
  const protectedRoutes = ['/home', '/profile', '/dashboard'];

  // 현재 경로가 보호된 경로인지 확인
  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    const token = req.headers.get('x-auth-token');

    if (!token) {
      return NextResponse.json({ error: "토큰이 존재하지 않습니다." }, { status: 401 });
    }

    try {
      // 환경 변수에서 JWT 시크릿 키 가져오기
      const jwtSecret = process.env.JWT_SECRET;
      if (!jwtSecret) {
        throw new Error("JWT 시크릿이 설정되지 않았습니다.");
      }

      const decoded = jwt.verify(token, jwtSecret) as JwtPayload;
      const requestHeaders = new Headers(req.headers);
      requestHeaders.set('user', JSON.stringify(decoded.user));

      // 토큰이 유효한 경우, 요청을 계속 진행
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      // 토큰이 유효하지 않은 경우
      return NextResponse.json({ error: "유효하지 않은 토큰입니다." }, { status: 401 });
    }
  }

  // 보호되지 않은 경로의 경우 그대로 진행
  return NextResponse.next();
};

// 미들웨어를 적용할 경로 설정
export const config = {
  matcher: ['api/user/:userId/auth']
};