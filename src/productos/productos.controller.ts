import { Controller, Get, Param } from '@nestjs/common';

interface producto {
    id: string;
    nombre: string;
    categoria: string;
    precio: number;
    expiracion: string;
}

@Controller('productos')
export class ProductosController {

    private productos: producto[] = [
        { id: '1',
            nombre: 'Leche entera',
            categoria: 'lacteos',
            precio: 4500,
            expiracion: '2026-09-20' },
        { id: '2',
            nombre: 'Queso campesino',
            categoria: 'lacteos',
            precio: 12000,
            expiracion: '2026-09-15' },
        { id: '3',
            nombre: 'Yogurt de fresa',
            categoria: 'lacteos',
            precio: 3800,
            expiracion: '2026-10-05' },
        { id: '4',
            nombre: 'Pan tajado',
            categoria: 'panaderia',
            precio: 6200,
            expiracion: '2026-09-10' },
        { id: '5',
            nombre: 'Croissant',
            categoria: 'panaderia',
            precio: 2500,
            expiracion: '2026-09-06' },
        { id: '6',
            nombre: 'Manzana roja',
            categoria: 'frutas',
            precio: 1500,
            expiracion: '2026-09-18' },
        { id: '7',
            nombre: 'Banano',
            categoria: 'frutas',
            precio: 900,
            expiracion: '2026-09-12' },
        { id: '8',
            nombre: 'Pechuga de pollo',
            categoria: 'carnes',
            precio: 18000,
            expiracion: '2026-09-08' },
        { id: '9',
            nombre: 'Carne molida',
            categoria: 'carnes',
            precio: 22000,
            expiracion: '2026-09-08' },
        { id: '10',
            nombre: 'Arroz blanco',
            categoria: 'granos',
            precio: 5400,
            expiracion: '2027-03-30' }
    ]

    @Get('')
    getAllProductos() {
        return this.productos;
    }

    @Get('expiracion/:fecha')
    getProductosByExpiracion(@Param('fecha') fecha: string) {
        console.log('.:: Fecha de expiracion', fecha)
        const data = this.productos.filter((producto) => producto.expiracion === fecha);
        console.log('.:: Productos encontrados', data.length)
        return data;
    }

    @Get('categoria/:categoria')
    getProductosByCategoria(@Param('categoria') categoria: string) {
        console.log('.:: Categoria', categoria)
        const data = this.productos.filter((producto) => producto.categoria === categoria);
        console.log('.:: Productos encontrados', data.length)
        return data;
    }

    @Get(':id')
    getProductoById(@Param('id') id: string) {
        console.log('.:: Producto ID', id)
        const producto = this.productos.find((producto) => producto.id === id);
        console.log('.:: Producto encontrado', producto)
        return producto;
    }
}
