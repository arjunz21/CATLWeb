function Loader() {
  return (
    <>
      <div className="container h-5 p-5 text-center">
        <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <h1>Loading ...</h1>
      </div>
    </>
  );
}

export default Loader;
