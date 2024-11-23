import Button from "./mini-components/Button";

function InfoView({ properties, onClose}) {
    return (
        <div>
            <Button onClick={onClose} label={'Close'}/>
            <div className="absolute inset-40 bg-white p-10">
                <strong>Location:</strong> {properties.location}<br/>
                <strong>Reported Date:</strong> {properties.reportedDate}<br/>
                <strong>Value:</strong> {properties.value} {properties.unit}<br/>
            </div>
        </div>
    );
    
}
export default InfoView;