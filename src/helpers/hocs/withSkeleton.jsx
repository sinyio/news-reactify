import Skeleton from "../../components/Skeleton/Skeleton";

function withSkeleton(Component, type, count, direction) {
  return function withSkeleton({ isLoading, ...restProps }) {
    if (isLoading)
      return <Skeleton type={type} count={count} direction={direction} />;
    return <Component {...restProps} />;
  };
}

export default withSkeleton;
