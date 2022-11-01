import React from 'react';
let embedStyle: React.CSSProperties = {
    background: "#FFFFFF",
    border: "none",
    borderRadius: "2px",
    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
}
const Embed = () => {
    return <><iframe style={embedStyle} width="640" height="480" src="https://charts.mongodb.com/charts-coardgame-development-lwnau/embed/charts?id=635ff59f-12e3-4d58-8d52-cb199ada61d1&maxDataAge=3600&theme=light&autoRefresh=true"></iframe></>
}

export default Embed