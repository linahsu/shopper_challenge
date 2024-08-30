export default function mapStatusHttps(status: string): number {
  const statusMap: Record<string, number> = {
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    SUCCESSFUL: 200,
    CREATED: 201,
    DOUBLE_REPORT: 409,
  };
  return statusMap[status] || 500;
}
