import React, { useEffect, useState } from 'react';
import './categories.css';

function ProductsEdit() {
    const [editproduct, setEditproduct] = useState([]);
    const [displayedit, setDisplayedit] = useState(false);
    const [displayinput, setDisplayinput] = useState(false);
    const [displayedit_show, setDisplayedit_show] = useState({ id: '', title: '', price: '' });

    const [addInput, setAddInput] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image: ''
    });

    const addclosehandle = () => setDisplayinput(false) ;
    const addprod = () => setDisplayinput(true);
    const editclosehandle = () => setDisplayedit(false);

    // Fetch all products
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setEditproduct(json))
            .catch(err => console.error(err));
    }, []);

    // DELETE
    const handledelete = async (deleteid) => {
        alert(`Are you sure you want to delete product ID ${deleteid}?`);
        try {
            await fetch(`https://fakestoreapi.com/products/${deleteid}`, {
                method: 'DELETE'
            });
            const updatedata = editproduct.filter(item => item.id !== deleteid);
            setEditproduct(updatedata);
        } catch (err) {
            console.error(err);
        }
    };

    // EDIT
    const handleEdit = (id, title, price) => {
        setDisplayedit(true);
        setDisplayedit_show({ id, title, price });
    };

    const inputHandleChange = (e) => {
        const { name, value } = e.target;
        setAddInput({ ...addInput, [name]: value });
    };

    // Add products
    const inputSubmit = async () => {
        const { title, price, description, category, image } = addInput;
        if (!title || !price || !description || !category || !image) {
            alert('All fields are required!');
            return;
        }

        await fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addInput)
        })
            .then((res) => res.json())
            .then((data) => {
                setEditproduct((prev) => [...prev, data]);
                setAddInput({
                    title: '',
                    price: '',
                    description: '',
                    category: '',
                    image: ''
                });
                setDisplayinput(false);
            })
            .catch((err) => console.error(err));
    };

    // Update product
    const edithandlefetch = () => {
        fetch(`https://fakestoreapi.com/products/${displayedit_show.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(displayedit_show)
        })
            .then((response) => response.json())
            .then(() => {
                const updatedProducts = editproduct.map((product) =>
                    product.id === displayedit_show.id
                        ? { ...product, title: displayedit_show.title, price: displayedit_show.price }
                        : product
                );
                setEditproduct(updatedProducts);
                setDisplayedit(false);
            })
            .catch((err) => console.error(err));
    };

    return (
        <>
            {editproduct.length > 0 ? (
                <div className='procts_edit'>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>TITLE</th>
                                <th>PRICE</th>
                                <th>DESCRIPTION</th>
                                <th>CATEGORY</th>
                                <th>IMAGE</th>
                                <th className='table_edit'>EDIT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {editproduct.map((v) => (
                                <tr key={v.id}>
                                    <td>{v.id}</td>
                                    <td>{v.title}</td>
                                    <td>$ {v.price}</td>
                                    <td>{v.description}</td>
                                    <td>{v.category}</td>
                                    <td>
                                        <img src={v.image} alt={v.title} style={{ width: '40px', height: '40px' }} />
                                    </td>
                                    <td>
                                        <button className='ed_btn' onClick={() => handleEdit(v.id, v.title, v.price)}>Edit</button>
                                        <button className='del_btn' onClick={() => handledelete(v.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='d-flex justify-content-center my-3'>
                        <button onClick={addprod} className='btn btn-info'>Add Products</button>
                    </div>
                </div>
            ) : (
                <h1>Loading....</h1>
            )}

            {/* =================== Add Product =================== */}
            {displayinput && (
                <div className='edit_productsdetails'>
                    <div className='edit_productsdetails_container'>
                        <div className='edit_content'>
                            <label><strong>TITLE :</strong>
                                <input type='text' name='title' value={addInput.title} onChange={inputHandleChange} />
                            </label>
                            <label><strong>PRICE :</strong>
                                <input type='number' name='price' value={addInput.price} onChange={inputHandleChange} />
                            </label>
                            <label><strong>DESCRIPTION :</strong>
                                <input type='text' name='description' value={addInput.description} onChange={inputHandleChange} />
                            </label>
                            <label><strong>CATEGORY :</strong>
                                <input type='text' name='category' value={addInput.category} onChange={inputHandleChange} />
                            </label>
                            <label><strong>IMAGE :</strong>
                                <input type='text' name='image' value={addInput.image} onChange={inputHandleChange} />
                            </label>
                            <div>
                                <button className='btn btn-primary mx-2' onClick={inputSubmit}>Submit</button>
                                <button className='mx-2 btn btn-danger' onClick={addclosehandle}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* =================== Edit Product =================== */}
            {displayedit && (
                <div className='edit_productsdetails'>
                    <div className='edit_productsdetails_container'>
                        <div className='edit_content'>
                            <label><strong>TITLE :</strong>
                                <input type='text' name='title'value={displayedit_show.title} onChange={(e) => setDisplayedit_show({ ...displayedit_show, title: e.target.value })}/>
                            </label>
                            <label><strong>PRICE :</strong>
                                <input type='number' name='price' value={displayedit_show.price} onChange={(e) => setDisplayedit_show({ ...displayedit_show, price: e.target.value })}/>
                            </label>
                            <div>
                                <button className='btn btn-primary mx-2' onClick={edithandlefetch}>Submit</button>
                                <button className='mx-2 btn btn-danger' onClick={editclosehandle}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductsEdit;
