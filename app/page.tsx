import MainContent from "@/components/Main/MainContent";
import { getDictionary } from "@/lib/get-dictionary";

export default async function HomePage() {
    const dict = await getDictionary() as any;

 return (
    <main className="bg-black">
      <MainContent dict={dict.home} />
    </main>
  );
}