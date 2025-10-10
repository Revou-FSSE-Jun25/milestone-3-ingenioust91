"use client"
import { useParams } from 'next/navigation';
import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import { getProduct } from '@/lib/api';
import { useRouter } from "next/navigation";

type InputForm = {
    id : number;
    title : string;
    price : number;
    categoryId : number;
    description: string;
    images : string[];
}

function edit() {
    const { register, formState: {errors} } = useForm<InputForm>();
    const [product, setProduct] = useState([]);
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [catId, setCatId] = useState(1)
    const [desc, setDesc] = useState("")
    const [image, setImage] = useState(["", "", ""])
    const params = useParams<{ id: string }>();
    const id = params.id;
    const router = useRouter();

    useEffect(() => {
        async function fetchProduct() {
          const data = await getProduct(id);
          setProduct(data);
          setTitle(data.title)
          setPrice(data.price)
          setCatId(data.categoryId)
          setDesc(data.description)
          setImage(data.images)
        }
        fetchProduct();
      }, [id]);

    async function onSubmitInput(e: React.FormEvent) {
        e.preventDefault(); //mencegah autorefresh
         try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`,
                {
                method : "PUT",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify ({
                    title : title,
                    price : Number(price),
                    description: desc,
                    categoryId : Number(catId),
                    images : Array.isArray(image)
                    ? image.filter((i) => typeof i === "string" && i.startsWith("http"))
                    : [image]
                    })
                })

                if (!response.ok) {
                const errorText = await response.text();
                console.error("SERVER ERROR:", errorText);
                throw new Error("post failed");
                }

                const result = await response.json();
                console.log("RESULT: ", result);
                alert('Update Data berhasil')
                router.push(`/productdetail/${id}`)
            }
            catch (e){console.error("ERROR:", e);}

    }

    return (
    <div className='lg:p-[2%_7%] p-[10%] mt-[12%] lg:mt-[7%] lg:mb-[3%]'>
      <div className='p-[10%] lg:p-[2%] flex flex-col justify-center gap-2 shadow-2xl bg-white rounded-xl'>
        <h1 className='text-2xl text-center h-[10%]'><strong>CREATE NEW PRODUCT</strong></h1>

        <form onSubmit={onSubmitInput} className='flex flex-col items-center gap-4'>
          <div className='lg:w-[40%] w-full'>
            <label>Title Product*</label><br/>
            <input type="text" className='inputStyle'
            value={title}
            placeholder='Title Product'
            {...register("title", {
              onChange: (e) => {setTitle(e.target.value)},
              required : "title required",
              minLength: { value: 3, message: 'Title must be at least 3 characters' }
              })}
            />
            {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title.message}</p>}
          </div>

          <div className='lg:w-[40%] w-full'>
            <label>Category</label><br/>
            <select className='inputStyle h-[57%]'
            value={catId}
            {...register("categoryId", {
              onChange: (e) => {setCatId(e.target.value)},
              required : "category required",
              valueAsNumber: true 
              })}>
              <option value={1}>Clothes</option>
              <option value={3}>Furniture</option>
              <option value={4}>Shoes</option>
              <option value={2}>Electronics</option>
            </select>
          </div>

          <div className='lg:w-[40%] w-full'>
            <label>Price*</label><br/>
            <input type="number" className='inputStyle'
              placeholder='Price'
              value={price}
              {...register("price", {
              onChange: (e) => {setPrice(e.target.value)},
              required : "price required",
              valueAsNumber: true,
              min: { value: 0, message: 'Price must be positive' }
              })}
            />
            {errors.price && <p className="text-red-400 text-sm mt-1">{errors.price.message}</p>}
          </div>
          <div className='lg:w-[40%] w-full'>
            <label>Description</label><br/>
            <textarea className='inputStyle'
              placeholder='Product Description'
              value={desc}
              {...register("description",{
                onChange: (e) => {setDesc(e.target.value)},
              }
              )}
            />
          </div>
          <div className='lg:w-[40%] w-full'>
            <label>Images</label><br/>
            <div className='flex flex-col w-full h-full gap-2'>
              <input type="url" className='inputStyle'
              placeholder='Image URL'
              value={image[0]}
              {...register("images.0",{
                onChange: (e) => {setImage(e.target.value)},
              })}/>

              <input type="url" className='inputStyle'
              placeholder='Image URL'
              value={image[1]}
              {...register("images.1",{
                onChange: (e) => {setImage(e.target.value)},
              })}/>

              <input type="url" className='inputStyle'
              placeholder='Image URL'
              value={image[2]}
              {...register("images.2",{
                onChange: (e) => {setImage(e.target.value)},
              })}/>
            </div>
          </div>
          
        
        <button className='cursor-pointer lg:w-[40%] w-full h-[50px] bg-black text-white text-xl'>SUBMIT</button>
        </form>
      </div>
    </div>
    )
}

export default edit
