"use client"; // Error components must be Client Components

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Alert className="my-8">
      <AlertTriangle />
      <div className="ml-5">
        <AlertTitle>Non connecté</AlertTitle>
        <AlertDescription>
          Vous devez être connecté pour pouvoir écrire un post.
        </AlertDescription>
      </div>
    </Alert>
  );
}
