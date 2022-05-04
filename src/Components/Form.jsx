import React, { useState } from 'react'

export const Form = (props) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('category')
    const [desc, setDesc] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()

        if (!name.trim() || !price || category === "category" || !desc.trim()) {
            return alert("malumotlar to'liq emas")
        }
        const newProduct = {
            id: Date.now(),
            name: name,
            price: price,
            category: category,
            desc: desc,
        };
        
        props.setProducts(i => [...i, newProduct])
        setName("")
        setPrice(0)
        setCategory("category")
        setDesc("")
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder='product name'/>
            <input type="number" value={price} onChange={(event) => setPrice(event.target.value)}  placeholder='product price'/>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
                <option>Category</option>
                <option>Telephone</option>
                <option>Kompyuter</option>
                <option>Televizor</option>
            </select>
            <textarea value={desc} onChange={(event) => setDesc(event.target.value)}></textarea>
            <button>Add product</button>
        </form>
    </div>
  )
}