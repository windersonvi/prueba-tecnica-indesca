//Importaciones de componentes
import Header from '../header/header';
import Footer from '../footer/footer';
// Importaciones de librerías de React
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// Importaciones de React Router
import { Link } from 'react-router-dom';
// Importaciones de librerías de componentes de Material-UI
import Button from '@mui/material/Button';
// Importaciones de estilos
import './readusers.css';

// Función para leer los usuarios
function ReadUsers() {
    const { id } = useParams();
    const [user, setUser] = useState(null); 

    // Consulta a la API de usuarios
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const userData = await response.json();
            setUser(userData);
        };

        fetchData();
    }, [id]);

    if (!user) {
        return <div>Cargando...</div>;
    }

    return (
        <>
        <Header />
        <div className='container'>
            <h1 className='titledata'>Información del usuario {user.id}</h1>
            <form className='datosapi'>
                <div className='databot'>
                    <label>Nombre y Apellido: {user.name}</label>
                </div>
                <div className='databot'>
                    <label>Email: {user.email}</label>
                </div>
                <div className='databot'>
                    <label>Teléfono: {user.phone}</label>
                </div>
                <div className='databot'>
                    <label>Website: {user.website}</label>
                </div>
                <div className='databot'>
                    <label>Username: {user.username}</label>
                </div>
                <div className='databot'>
                    <label>Dirección: {user.address.street}</label>
                </div>
                <div className='databot'>
                    <label>Suite: {user.address.suite}</label>
                </div>
                <div className='databot'>
                    <label>Ciudad: {user.address.city}</label>
                </div>
                <div className='databot'>
                    <label>Código postal: {user.address.zipcode}</label>
                </div>
                <div className='databot'>
                    <label>Nombre de la empresa: {user.company.name} </label>
                </div>
            </form>
            <Button variant='contained' component={Link} to={`/`}>
                Volver
            </Button>
        </div>
        <Footer />
        </>
    );
}

export default ReadUsers; 