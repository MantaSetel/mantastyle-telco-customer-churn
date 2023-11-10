const backgroundImageStyle = {
  backgroundImage: 'url("src/assets/header.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Header = () => {
  return (
    <div
      style={backgroundImageStyle}
      className="bg-[#7752FE] h-[25vh] flex justify-center items-center"
    >
      <h1 className="text-white text-center font-header text-3xl">
        Analysis and forecasting of customer churn <br></br>in the
        telecommunications industry.
      </h1>
    </div>
  );
};

export default Header;
