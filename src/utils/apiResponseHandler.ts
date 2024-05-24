/**
 * Represents a response object used within an API context.
 *
 * @example
 * ```javascript
 * const user = await UserService.findById(userId);
 * const response = new ApiResponseHandler(200, user);
 * res.json(response);
 * ```
 */

class ApiResponseHandler {
  statusCode: number;
  data: object[];
  message: string;
  success: boolean;
  constructor(statusCode: number, data: object[], message = 'Success') {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { ApiResponseHandler };
