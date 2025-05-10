import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const createApiHandler = (handler: (req: NextRequest) => Promise<unknown>) => {
  return async (req: NextRequest) => {
    try {
      const result = await handler(req);

      if (result instanceof NextResponse) return result;

      return NextResponse.json(result);
    } catch (error) {
      return NextResponse.json(
        { error: (error as Error).message },
        { status: 500 },
      );
    }
  };
};

export default createApiHandler;
