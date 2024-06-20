import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmer = () => {
  return (
    <SkeletonTheme highlightColor="#a3a3a3">
      <div className="skeleton-custom-card">
        <Skeleton height={200} />
        <div className="card-body">
          <h5>
            <Skeleton />
          </h5>
          <p>
            <Skeleton />
          </p>
          <Skeleton height={40} width={120} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default Shimmer;
