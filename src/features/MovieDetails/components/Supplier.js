import React from 'react'
import { Button } from "@material-ui/core";

const Supplier = ({ bestPrice, supplierName, price, onClick }) => {
    return (
        <div className="supplier-container">
            <div className="margin">
                {bestPrice && <span className="best-price">Best Price!</span>}
                <Button variant="contained" color="primary" onClick={() => {
                    onClick(supplierName)
                }}>
                    <div className="supplierContent">
                        <div className="Supplier-Left">{supplierName}</div>
                        <div className="Supplier-Right">${price}</div>
                    </div>
                </Button>
            </div>
        </div>

    )
}

export default Supplier
