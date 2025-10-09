export async function getProduct(id:string){
  try{
      const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)

      if (!response.ok) throw new Error("Gagal fetch produk");

      return response.json();
  }
  catch(Error:any) {
      return [];
  }

}

export async function getProducts(){
    try{
      const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=12`)

      if (!response.ok) throw new Error("Gagal fetch produk");
      
      return response.json();
    }
    catch(Error:any) {
      return [];
    }
  }

export async function categoryFetch(slug:string){
    try{
      const response = await fetch(`https://api.escuelajs.co/api/v1/products?categorySlug=${slug}&offset=0&limit=12`)

      if (!response.ok) throw new Error("Gagal fetch produk");

      return response.json();
    }
    catch(Error:any) {
      return [];
    }
  }

export async function searchbyTitle(title:string){
    try{
      const response = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${title}`)

      if (!response.ok) throw new Error("Gagal fetch produk");
      return response.json();
    }
    catch(Error:any) {
      return [];
    }
  }

export async function getProductsAdmin(){
    try{
      const response = await fetch(`https://api.escuelajs.co/api/v1/products`)

      if (!response.ok) throw new Error("Gagal fetch produk");

      return response.json();
    }
    catch(Error:any) {
      return [];
    }
  }

export async function deleteProduct(id:number){
  try{
      const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`,
        {method: 'DELETE',})

      if (response.ok) {alert('Berhasil delete Product')}
      return response.json();
  }
  catch(Error:any) {
    throw new Error("Gagal delete produk")
  }

}