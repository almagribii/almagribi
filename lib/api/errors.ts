// lib/api/errors.ts
export class APIError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
    this.name = "APIError";
  }
}

export class ValidationError extends APIError {
  constructor(message: string) {
    super(400, message);
    this.name = "ValidationError";
  }
}

export class NotFoundError extends APIError {
  constructor(message: string = "Resource not found") {
    super(404, message);
    this.name = "NotFoundError";
  }
}

export class UnauthorizedError extends APIError {
  constructor(message: string = "Unauthorized") {
    super(401, message);
    this.name = "UnauthorizedError";
  }
}

export class InternalServerError extends APIError {
  constructor(message: string = "Internal server error") {
    super(500, message);
    this.name = "InternalServerError";
  }
}
