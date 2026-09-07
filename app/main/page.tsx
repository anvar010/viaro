import MainContent from "@/components/Main/MainContent";
import { getDictionary } from "@/lib/get-dictionary";

/** Same content as `/` — MainContent takes the `home` slice, not the whole dictionary. */
export default async function Page() {
  const dict = (await getDictionary()) as any;

  return (
    <main className="bg-black">
      <MainContent dict={dict.home} />
    </main>
  );
}
