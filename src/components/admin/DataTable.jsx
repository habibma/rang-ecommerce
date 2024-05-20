import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React from 'react'
import { Link } from 'react-router-dom'
import editIcon from '../../assets/imgs/edit.svg';
import deleteIcon from '../../assets/imgs/delete.svg';

const DataTable = ({ columns, rows, slug, handleDelete }) => {

    const actionColumn = {
        field: 'action',
        headerName: "Action",
        width: 100,
        renderCell: params => {
            return (
                <div className="action">
                    <Link to={`/admin/${slug}/${params.row.id}`} >
                        <img src={editIcon} alt="edit icon" />
                    </Link>
                    <Link>
                        <div className="delete" onClick={()=> handleDelete(params.row.id)}>
                            <img src={deleteIcon} alt="delete icon" />
                        </div>
                    </Link>
                </div >
            )
        }
    }

    return (
        <div className='data-table'>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    className='data-grid'
                    rows={rows}
                    columns={[...columns, actionColumn]}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 }
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    disableColumnFilter
                    disableDensitySelector
                    disableColumnSelector
                />
            </Box>
        </div>
    )
}

export default DataTable