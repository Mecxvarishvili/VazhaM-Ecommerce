import React from 'react';
import { Box, makeStyles, Table, TableBody, TableRow, TableCell, TableContainer  } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    title: {
        fontSize: "20px",
        fontWeight: "500",
        color: "#4f4f4f",
        marginBottom: "8px",
    },
    tableBody: {
        border: "1px solid gray"
    },
    tableName: {
        border: "1px solid rgba(224, 224, 224, 1)",
        color: "#4f4f4f",
        fontWeight: "600",
        fontSize: "16px",
        width: "150px!important",
    },
    tableDescribe: {
        border: "1px solid rgba(224, 224, 224, 1)",
        borderRight: "1px solid rgba(224, 224, 224, 1)",
        fontSize: "14px",
        fontStyle: "italic",
        color: "#4f4f4f",
    },
}))

function createData(name, describe,) {
  return { name, describe, };
}

const rows = [
  createData('Weight', '0.3 kg'),
  createData('Dimension', '50 x 60 cm'),
];

const Information = () => {
    const classes = useStyles()

    return (
        <Box>
            <Box className={classes.title}>Aditional Information</Box>
            <Box>
                <TableContainer>
                    <Table>
                        <TableBody>
                            {rows.map((row) => (
                              <TableRow key={row.name}>
                                <TableCell className={classes.tableName} component="th" scope="row">
                                  {row.name}
                                </TableCell>
                                <TableCell className={classes.tableDescribe} align="left">{row.describe}</TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                    </Table> 
                </TableContainer>
            </Box>
        </Box>
    );
};

export default Information;