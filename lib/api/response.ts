// lib/api/response.ts
import { NextResponse } from "next/server";

export interface APIResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export function successResponse<T>(
  data: T,
  message?: string,
  statusCode: number = 200
) {
  return NextResponse.json(
    {
      success: true,
      message,
      data,
    } as APIResponse<T>,
    { status: statusCode }
  );
}

export function errorResponse(error: string, statusCode: number = 500) {
  return NextResponse.json(
    {
      success: false,
      error,
    } as APIResponse,
    { status: statusCode }
  );
}
