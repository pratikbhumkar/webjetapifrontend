import React from 'react'
import { Button } from "@material-ui/core";

const Supplier = ({ bestPrice, supplierName, price }) => {
    return (
        <div style={{width: '25rem', margin:'auto'}}>
            <div className="margin">
                {bestPrice && <span style={{ backgroundColor: "red", padding: 10, borderRadius: 7, marginLeft:'16rem'}}>Best Price!</span>}
                <Button variant="contained" color="primary">
                    <div className="supplierContent">
                        <div className="Supplier-Left">MovieWorld</div>
                        <div className="Supplier-Right">$129</div>
                    </div>
                </Button>
            </div>

        </div>

    )
}

export default Supplier
