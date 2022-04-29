import { Response } from 'express';
import { object } from 'yup';

class ErrorHandler {
  public statusCode: number;

  public message: string;

  constructor(statusCode: number, message: string) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = async (err: { statusCode: number; message: string }, res: Response) => {
  const { statusCode, message } = err;
  console.log(JSON.stringify(statusCode));
  console.log(JSON.stringify(message));
  // console.log(await statusCode, await message);
  return res.status(statusCode).json({ message });
};

export { ErrorHandler, handleError };
