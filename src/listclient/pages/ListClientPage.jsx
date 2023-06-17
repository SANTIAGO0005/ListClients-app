import MaterialTable from "material-table"
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import { useEffect, useState } from "react";
import { Getdata } from "../../api/LoadData";
export const ListClientPage= () => {
    
    const [data, setData] = useState([])
    const columns = [
        {
            title:'Nombre completo',
            field:'nombre'
        },
        {
            title:'Email',
            field:'email'
        },
        {
            title:'Fecha de Nacimiento',
            field:'fechanac',
            type: "date"
        },
        {
            title:'Fecha de Creacion',
            field:'fechacrea',
            type: "date"
        }
        
    ]

   useEffect(() => {
     Getdata()
   }, [])
   
    
    return (<>
        <div>
            <MaterialTable
                columns={columns}
                data={data}
                title='Listado de Clientes'
                actions={[
                    {
                        icon: Edit,
                        tooltip: 'Editar Cliente',
                        
                    },
                    {
                        icon: Delete,
                        tooltip: 'Editar Cliente',
                        onClick:(event, rowData) => window.confirm('Estas seguro de eliminar un Cliente:'+rowData.nombre)
                    }
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
                localization={{
                    header: {
                        actions: 'Acciones'
                    }
                }}
            />
        </div>
    </>)
}