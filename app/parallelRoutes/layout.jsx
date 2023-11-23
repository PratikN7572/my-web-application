export default function ParallelLayout(props) {
    return (
        <>
            {props.children}
            {props.route1}
            {props.route2}
      </>
  );
}
