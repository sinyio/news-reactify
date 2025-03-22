import { ComponentType } from "react";
import { DirectionType, SkeletonType } from "../interfaces";
import Skeleton from "../ui/Skeleton/Skeleton";

interface Props {
  isLoading: boolean;
}

function withSkeleton<P extends object>(
  Component: ComponentType<P>,
  type?: SkeletonType,
  count?: number,
  direction?: DirectionType
) {
  return function withSkeleton({ isLoading, ...restProps }: Props & P) {
    if (isLoading)
      return <Skeleton type={type} count={count} direction={direction} />;
    return <Component {...(restProps as P)} />;
  };
}

export default withSkeleton;
