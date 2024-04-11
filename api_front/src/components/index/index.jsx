// Importaciones de librerías de componentes
import Footer from '../footer/footer';
import Header from '../header/header';
// Importaciones de librerías de React
import * as React from 'react';
// Importaciones de librerías de componentes de Material-UI
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
// Importaciones de React Router
import { Link } from 'react-router-dom';
// Importaciones de estilos
import './index.css';

// Definición de las columnas de la tabla
const columns = [
    { id: 'id', label: 'ID', maxWidth: 20},
    { id: 'name', label: 'Name', maxWidth: 20 },
    { id: 'username', label: 'Username', maxWidth: 20 },
    { id: 'email', label: 'Email', maxWidth: 20 },
];

// Función principal de la vista de la tabla de usuarios
function Users() {
    // Declaración de los estados de la página y las filas
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = React.useState([]);
// Consulta a la API de usuarios
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setRows(data))
            .catch(error => console.error(error));
    }, []);
// Funciones para cambiar de página y de filas por página
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
// Función para cambiar de filas por página
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
        <Header />
        <Paper className='contenedor' sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 400 }}>
                <Table className='table' stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow className='rowtable'>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align="left"
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            <TableCell align="left">Ver</TableCell> 
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align="left">
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell align="left">
                                            <Button variant='contained' component={Link} to={`/readUsers/${row.id}`}>
                                                Ver
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
        <Footer />
        </>

    );
}

export default Users;
