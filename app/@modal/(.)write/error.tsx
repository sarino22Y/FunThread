"use client"; // Error components must be Client Components

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { AlertTriangle } from "lucide-react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 5000);
    console.log("timeout ", timeout);

    return () => { 
        clearTimeout(timeout);        
    };
  }, []);

  return (
    visible && (
      <Alert className="my-8">
        <ExclamationTriangleIcon />
        <div className="ml-5">
          <AlertTitle>Non connecté</AlertTitle>
          <AlertDescription>
            Vous devez être connecté pour pouvoir écrire un post.
          </AlertDescription>
        </div>
      </Alert>
    )
  );
}
