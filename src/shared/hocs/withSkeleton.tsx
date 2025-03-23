import { ComponentType } from "react";
import { DirectionType, SkeletonType } from "../interfaces";
import Skeleton from "../ui/Skeleton/Skeleton";

interface Props {
  isLoading: boolean;
  direction?: DirectionType;
  type?: SkeletonType;
}

function withSkeleton<P extends object>(
  Component: ComponentType<P>,
  count?: number
) {
  return function withSkeleton({
    isLoading,
    direction = 'column',
    type,
    ...restProps
  }: Props & P) {
    if (isLoading)
      return <Skeleton type={type} count={count} direction={direction} />;
    return <Component type={type} {...(restProps as P)} />;
  };
}

export default withSkeleton;
