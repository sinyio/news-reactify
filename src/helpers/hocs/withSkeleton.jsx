import Skeleton from "../../components/Skeleton/Skeleton";

function withSkeleton(Component, type, count) {
  return function withSkeleton({ isLoading, ...restProps }) {
    if (isLoading) return <Skeleton type={type} count={count} />;
    return <Component {...restProps} />;
  };
}

export default withSkeleton;
