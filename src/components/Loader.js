import AtomicSpinner from "atomic-spinner";

export default function Loader() {
  return (
    <>
      <AtomicSpinner
        displayElectronPaths={true}
        displayNucleus={false}
        electronPathCount={12}
        electronPathColor={"#6b9663"}
        electronPathWidth={0.6}
        electronsPerPath={9}
        electronSpeed={0.8}
        nucleusDistanceFromCenter={4.8}
        nucleusParticleFillColor={"#b49393"}
        nucleusParticleBorderColor={"#b58c8c"}
        nucleusMaskOverlap={false}
      />
    </>
  );
}
