import { AppError } from './AppError';

export class UnauthorizedError extends AppError {
  constructor(description = 'you are not authorized to do this action') {
    super('unauthorized', description, 401);
  }
}
