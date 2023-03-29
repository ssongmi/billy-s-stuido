export default function Start() {
  return (
    <div className="page-container start-page">
      <div className="start-page">
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img className="start-page-img" alt="image" src={`${process.env.PUBLIC_URL}/img/main.png`} />
      </div>
    </div>
  );
}
