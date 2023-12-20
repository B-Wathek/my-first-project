export default function FeatureBox({ icon, name }) {
  return (
    <div>
      <img src={`/src/assets/${icon}`} alt="image" />
      <p>{name}</p>
    </div>
  );
}
