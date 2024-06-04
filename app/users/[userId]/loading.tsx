import { Loader } from "@/components/ui/loader";
import { Skeleton } from "@/components/ui/skeleton";
import PostPlaceholder from "@/src/feature/post/PostSkeleton";
import clsx from "clsx";
import React from "react";

const loader = () => {
  return (
    <div className={clsx("w-full flex flex-row items-start p-4")}>
      <Loader className="gap-2"/>
      <div className="ml-4 flex w-full flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <Skeleton className="h-6 w-32" />
        </div>
      </div>
    </div>
  );
};

export default loader;
