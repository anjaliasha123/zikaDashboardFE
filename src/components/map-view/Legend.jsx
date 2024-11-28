function Legend({ classColors }) {

    const legendItems = Object.entries(classColors).map(([key, color]) => {
        <div className="legend-item" key={key}>
            <span
                className="legend-color-box"
                style={{ backgroundColor: color }}
            ></span>
            <span className="legend-label">{key}</span>
        </div>
    });
    return (
        <div className="legend">
            <div className="legend-title">Legend</div>
            {Object.entries(classColors).map(([key, color]) => (
        <div className="legend-item" key={key}>
          <span
            className="legend-color-box"
            style={{ backgroundColor: color }}
          ></span>
          <span className="legend-label">{key}</span>
        </div>
      ))}
            
        </div>
    )
}
export default Legend;