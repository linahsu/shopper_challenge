export default function mapStatusHttps(status: string): number {
  const statusMap: Record<string, number> = {
    badRequest: 400,
    unauthorized: 401,
    notFound: 404,
    successful: 200,
    created: 201,
    unprocessableEntity: 422,
  };
  return statusMap[status] || 500;
}
