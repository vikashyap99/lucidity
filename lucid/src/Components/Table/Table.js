import React,{ useState} from 'react';
import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import EditDailog from '../EditDailog/EditDailog'
import './Table.css'

function TableList({products, setProducts, isUser, showProducts, setShowProducts }) {
    
    const [openEdit, setOpenEdit] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [disableRows, setDisableRows] = useState([])

    const handleDelete = (name) => {
        const temp = products.filter((el) => !(el.name === name))
        setProducts(temp)
        setShowProducts(temp)
    }

    const handleEdit = (prod) => {
        setOpenEdit(true)
        setSelectedProduct(prod)
        
    }

    const handleSave = (updatedProduct) => {
        let count = 0
        const temp = products.map((el) => {
            console.log(el,'el')
            if(el.name === updatedProduct.name){
                count += 1
                return {
                    category: updatedProduct.category,
                    name: el.name,
                    price: updatedProduct.price,
                    quantity: updatedProduct.quantity,
                    value: updatedProduct.value
                }
            } 
            else return el
        })
        console.log(count, 'count',updatedProduct.name)
        setProducts(temp)
        setShowProducts(temp)
        setOpenEdit(false)
    }

    const handleDisable = (pName) => {
        const flag = disableRows.includes(pName)
        let temp
        if(!flag){
            setDisableRows(prev => [...prev, pName])
            temp = products.filter(el => !(el.name === pName))
            setProducts(temp)
        }
        else{
            const arr = disableRows.filter(el => !(el === pName))
            setDisableRows(arr)
            const temp = showProducts.filter(el => el.name === pName)
            setProducts(prev => [...prev, ...temp])
        }
        
    }
    
    const columns = Object.keys( showProducts?.length &&  showProducts?.[0])

    return (
            <div>
            <TableContainer >
                <Table sx={{width: '98%', margin: '1rem'}}>
                <TableHead>
                    <TableRow>
                        {columns.map((column,ind) => (
                            <TableCell
                            className='table-cell'
                            key={ind}>
                                <span className='table-cell-back' >{column.toLocaleUpperCase()}</span>
                            </TableCell>
                        ))}
                        <TableCell className='table-cell'>
                           <span className='table-cell-back'>ACTION</span> 
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        showProducts.map((product) => (
                           
                            <TableRow key={product.name}>
                                {
                                    
                                   Object.values(product).map((el,ind) => (
                                        <TableCell key={ind+el} 
                                        className={disableRows.includes(product.name) ? 'disable-cell' : 'table-cell'}>
                                            {el}
                                        </TableCell>
                                    ))
                                }
                                <TableCell>
                                <IconButton disabled={isUser || disableRows.includes(product.name) }  onClick={() => handleEdit(product)}>
                                    <EditIcon color={isUser || disableRows.includes(product.name) ? 'disabled' : 'success'} />
                                </IconButton>
                                <IconButton disabled={isUser} onClick={() => handleDisable(product.name)}>
                                    {
                                        disableRows.includes(product.name) 
                                        ?
                                        <VisibilityOffIcon color='secondary' />
                                        :
                                        <VisibilityIcon  color={isUser ? 'disabled' : 'primary'} />
                                    }
                                    
                                </IconButton>
                                <IconButton disabled={isUser}  onClick={() => handleDelete(product.name)} >
                                    <DeleteIcon color={isUser ? 'disabled' :'warning'} />
                                </IconButton>
                            </TableCell>
                            </TableRow>
                            
                            
                        ))
                    }
                    
                </TableBody>
                </Table>
            </TableContainer>
            { openEdit
                && 
                <EditDailog 
                open={openEdit}
                setOpen={setOpenEdit}
                selectedProduct={selectedProduct}
                handleSave = {handleSave}
             />
             }
            </div>
    );
}

export default TableList;