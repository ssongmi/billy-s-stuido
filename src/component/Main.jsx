export default function Main () {
  return (
    <div className="main-container">
      <div className="main-picture-container before-picture">
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img alt="before-picture" src={`${process.env.PUBLIC_URL}/icon/pixelArt.png`} />
      </div>
      <div className="main-picture-container after-picture">
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img alt="after-picture" src={`${process.env.PUBLIC_URL}/icon/pixelArt.png`} />
      </div>
    </div>
  );
}
