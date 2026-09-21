import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

interface user {
    id: string;
    name: string;
    email: string;
}
@Controller('users')
export class UsersController {

    private users: user[] = [
        {
            id: '2',
            name: 'Jane Smith',
            email: 'jane.smith@example.com'
        },
        {
            id: '3',
            name: 'Carlos Rodríguez',
            email: 'carlos.rodriguez@example.com'
        },
        {
            id: '4',
            name: 'Emily Johnson',
            email: 'emily.johnson@example.com'
        },
        {
            id: '5',
            name: 'Michael Brown',
            email: 'michael.brown@example.com'
        },
        {
            id: '6',
            name: 'Sofia Martínez',
            email: 'sofia.martinez@example.com'
        },
        {
            id: '7',
            name: 'David Lee',
            email: 'david.lee@example.com'
        },
        {
            id: '8',
            name: 'Ana Gómez',
            email: 'ana.gomez@example.com'
        },
        {
            id: '9',
            name: 'Lucas Silva',
            email: 'lucas.silva@example.com'
        },
        {
            id: '10',
            name: 'Olivia Taylor',
            email: 'olivia.taylor@example.com'
        },
        {
            id: '11',
            name: 'Mateo Fernández',
            email: 'mateo.fernandez@example.com'
        }
    ]

    @Get('')
    getAllUsers() {
        return this.users;
    }
    @Get(':id')
    getUserById(@Param('id') id: string) {
        console.log('.:: User ID', id)
        const user = this.users.find((user) => user.id === id);
        console.log('.:: Usuario encontrado', user)
        return user;
    }
    @Get('search/:name')
    getUserByName(@Param('name') name: string) {
        console.log('.:: User Name', name)
        const email = this.users.find((user) => user.name === name);
        console.log('.:: Usuario encontrado', email)
        return email;
    }
    @Get('search/name')
    getUserByNames(@Param('name') name: string) {
        const data = this.users.find((user) => user.name === name);
        return { result: data?.email || 'Usuario no encontrado' };
    }


    @Post()
    createUser(@Body() user: user) {
        console.log('.:: User: ', user);
        //user.id = no debe existir
        //user. correo = no debe existir
        //si el usuario existe -
        this.users.push(user);
        return {
            msg: 'Usuario creado exitosamente',
            data: user
        }
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        const position = this.users.findIndex((user) => user.id === id);
        console.log('.:: Position', position);
        if (position === -1) {
            return {
                msg: 'No existe el ID',
            }
        }
        this.users.splice(position, 1);
        return {
            msg: 'Usuario eliminado exitosamente',

        }
    }
    @Put(':id')
    updateUser(@Param('id') id: string, @Body() userChanges: user) {
        console.log('.:: User ID Update:', id);
        console.log('.:: userChanges:', userChanges);
        const position = this.users.findIndex((user) => user.id==id);
        if (position === -1){
            return{
                msg 'no existe el ID'
            }
        }

        return {
            msg: "Usuario actualizado con exito",
            data: {}
        }
    }

}



