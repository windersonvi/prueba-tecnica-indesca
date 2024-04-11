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
            <h1 className='titledata'>Información de Usuario N.{user.id}</h1>
            <form className='datosapi'>
                <div className='databot'>
                    <label><b>Nombre y Apellido:</b> {user.name}</label>
                </div>
                <div className='databot'>
                    <label><b>Email:</b> {user.email}</label>
                </div>
                <div className='databot'>
                    <label><b>Teléfono:</b> {user.phone}</label>
                </div>
                <div className='databot'>
                    <label><b>Website:</b> {user.website}</label>
                </div>
                <div className='databot'>
                    <label><b>Username:</b> {user.username}</label>
                </div>
                <div className='databot'>
                    <label><b>Dirección:</b> {user.address.street}</label>
                </div>
                <div className='databot'>
                    <label><b>Suite:</b> {user.address.suite}</label>
                </div>
                <div className='databot'>
                    <label><b>Ciudad:</b> {user.address.city}</label>
                </div>
                <div className='databot'>
                    <label><b>Código postal:</b> {user.address.zipcode}</label>
                </div>
                <div className='databot'>
                    <label><b>Nombre de la empresa:</b> {user.company.name} </label>
                </div>
            </form>
            <Button variant='contained' color='error' component={Link} to={`/`}>
                Volver
            </Button>
        </div>
        <Footer />
        </>
    );
}

export default ReadUsers; 