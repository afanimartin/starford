import HomePageClient from "./HomePageClient";
import { getHomeCopy } from "@/lib/content";

export default async function HomePage() {
  const homeCopy = await getHomeCopy();
  return <HomePageClient homeCopy={homeCopy} />;
}
