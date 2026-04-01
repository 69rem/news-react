import Skeleton from "@/shared/ui/Skeleton/Skeleton.tsx";
import React from "react";
import type { DirectionType, SkeletonType } from "../interfaces/common.ts";

interface Props {
  isLoading: boolean;
  direction?: DirectionType;
  type?: SkeletonType;
}

function withSkeleton<P extends object>(
  Component: React.ComponentType<P>,
  count?: number,
) {
  return function withSkeleton(props: Props & P) {
    const { isLoading, type, direction = "column", ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Component type={type} {...(restProps as P)} />;
  };
}

export default withSkeleton;
