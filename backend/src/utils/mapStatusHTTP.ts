export default function mapStatusHttps(status: string): number {
  const statusMap: Record<string, number> = {
    INVALID_VALUE: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    SUCCESSFUL: 200,
    CREATED: 201,
    UNPROCESSABLE_ENTITY: 422,
  };
  return statusMap[status] || 500;
}
