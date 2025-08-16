function ComingSoon({ onContinueShopping }) {

  const handleContinueShopping = (e) => {
    console.log('e = ', e);
    onContinueShopping(e);
  }

  return (
    <>
      <div style={{
        display: "flex", justifyContent: 'center', alignItems: 'center', height: "100vh"
      }} >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h1 style={{ alignSelf: "center" }}>C O M I N G S O O N</h1>
          <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
        </div >
      </div>
    </>
  )
}

export default ComingSoon;
