export default async function UserDetails({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  return <div>User: {userId}</div>;
}
