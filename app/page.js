import Button from "@/components/Button";
import Input from "@/components/Input";

export default function Home() {
  return (
    <main className=" w-screen h-screen">
      <Button variant="primary" title="deneme" />
      <Button variant="secondary" title="deneme" />
      <Input name="name" placeholder="deneme" type="name" />
    </main>
  );
}
