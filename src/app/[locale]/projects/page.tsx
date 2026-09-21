import { redirect } from "@/i18n/navigation";

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect({ href: "/portfolio", locale });
}
