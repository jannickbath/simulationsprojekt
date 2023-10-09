const Default = (props: any) => {
  const progress = props.progress + "%";
  
  return (
    <>
      <div className={`car car-default ${props.own ? "own" : ""}`} style={{left: progress}}>
          <div className="car__body">
            <div className="car__body__topper">
              <div className="car__body__topper__front-glas"></div>
              <div className="car__body__topper__back-glas"></div>
            </div>
            <div className="car__body__headlight"></div>
            <div className="car__body__taillight"></div>
            <div className="car__body__tires">
              <div className="car__body__tires__front car__body__tires__tire">
                <div className="car__body__tires__tire__inner"></div>
              </div>
              <div className="car__body__tires__back car__body__tires__tire">
                <div className="car__body__tires__tire__inner"></div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Default