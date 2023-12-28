const Container_wapper = (props) => {
  return (
    <>
      <div className="flex flex-col w-full h-screen justify-between">
        {props.children}
      </div>
    </>
  );
};

export default Container_wapper;
