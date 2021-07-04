import React from 'react';
import { Box } from '@material-ui/core';

const SubCategories = () => {
    return (
        <Box>
            <Box style={{ fontSize: "22px", fontWeight: "500"}}>
                Subcategories
            </Box>
            <Box  style={{ fontSize: "80%" }}>
                <Box component='P'style={{ color: "#4f4f4f", fontWeight: "500" }}>RETURN TO CLOTHING, SHOES, ACCESSORIES</Box>
                <Box component='P'style={{ color: "#4f4f4f", fontWeight: "500" }}>DRESSES</Box>
                <Box component='P'style={{ color: "#4f4f4f", fontWeight: "500" }}>TOPS, TEES {'&'} BLOUSES</Box>
                <Box component='P'style={{ color: "#4f4f4f", fontWeight: "500" }}> SWEATERS</Box>
                <Box component='P'style={{ color: "#4f4f4f", fontWeight: "500" }}>FASHION HOODIES {'&'} SWEATSHIRTS</Box>
                <Box component='P'style={{ color: "#4f4f4f", fontWeight: "500" }}>JEANS</Box>
            </Box>
        </Box>
    );
};

export default SubCategories;