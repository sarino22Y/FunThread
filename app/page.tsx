import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button className="m-4"
      variant="test">Click-me</Button>
      <Input />
    </div>
  );
}
