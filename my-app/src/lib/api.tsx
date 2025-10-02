export async function getProducts(id:number){
    try{
      const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)

      if (!response.ok) throw new Error("Gagal fetch produk");

      return response.json();
    }
    catch(Error:any) {
      return [];
    }
  }

export async function firstFetch(){
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
      const response = await fetch(`https://api.escuelajs.co/api/v1/products?categorySlug=${slug}`)

      if (!response.ok) throw new Error("Gagal fetch produk");

      return response.json();
    }
    catch(Error:any) {
      return [];
    }
  }