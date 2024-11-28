import Button from "./mini-components/Button";

function InfoView({ properties, onClose}) {
    return (
        <div>
            {/* <div className="">
                <strong>Kingdom:</strong> {properties.kingdom} <br/>
                <strong>Class:</strong> {properties.class} <br/>
                <strong>Phylum:</strong> {properties.phylum}<br/>
                <strong>Location:</strong> {properties.country} - {properties.state}<br/>
            </div> */}
            <div className="card">
            <div className="content">
                <h2 className="title">{properties.country} - {properties.state}</h2>
                <p className="data">
                <strong>Kingdom:</strong> {properties.kingdom} <br/>
                <strong>Class:</strong> {properties.class} <br/>
                <strong>Phylum:</strong> {properties.phylum}<br/>
                </p>
                <Button onClick={onClose} label={'Close'}/>
            </div>
        </div>
            
        </div>
    );
    
}
export default InfoView;